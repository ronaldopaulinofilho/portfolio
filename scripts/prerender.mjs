/**
 * Pré-renderização pós-build.
 *
 * O site é uma SPA: o HTML publicado traz só `<div id="root"></div>`, e todo o
 * conteúdo aparece depois que o React roda. O Google até executa JavaScript, mas
 * num segundo passe; os rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot)
 * em geral não executam, e enxergariam uma página em branco.
 *
 * Aqui servimos o `dist` recém-construído, abrimos no Chrome headless, pegamos o
 * DOM já montado e gravamos por cima do index.html. O resultado é um HTML que se
 * lê sem JavaScript, sem trocar o React por outro framework.
 *
 * Se não houver Chrome na máquina, avisamos e seguimos: publicar sem
 * pré-renderização é pior que o ideal, mas melhor do que quebrar o deploy.
 */
import { createServer } from 'node:http'
import { readFile, writeFile, stat } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import { join, extname, resolve } from 'node:path'

const DIST = resolve('dist')
const PORT = 4321

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.webp': 'image/webp', '.mp4': 'video/mp4', '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
}

const CHROMES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
].filter(Boolean)

async function findChrome() {
  for (const p of CHROMES) {
    try { await stat(p); return p } catch { /* próximo */ }
  }
  return null
}

function serve() {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(req.url.split('?')[0])
    const file = join(DIST, path === '/' ? 'index.html' : path)
    try {
      const body = await readFile(file)
      res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' })
      res.end(body)
    } catch {
      // SPA: qualquer rota desconhecida cai no index.
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(await readFile(join(DIST, 'index.html')))
    }
  })
  return new Promise(ok => server.listen(PORT, () => ok(server)))
}

function dumpDom(chrome) {
  return new Promise((ok, fail) => {
    // Sem `--virtual-time-budget`: com ele o Chrome despeja o DOM antes de o
    // React montar, e o resultado é a mesma casca vazia que queremos evitar.
    // O corte por tempo fica por nossa conta, logo abaixo.
    const args = [
      '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
      '--dump-dom', `http://localhost:${PORT}/`,
    ]
    const proc = spawn(chrome, args)
    const kill = setTimeout(() => proc.kill('SIGKILL'), 60_000)
    let out = '', err = ''
    proc.stdout.on('data', d => (out += d))
    proc.stderr.on('data', d => (err += d))
    proc.on('close', code => {
      clearTimeout(kill)
      code === 0 && out.includes('</html>') ? ok(out) : fail(new Error(err.slice(-200) || `exit ${code}`))
    })
  })
}

/**
 * Framer Motion deixa `opacity: 0` e `transform` inline nos elementos que ainda
 * não entraram na viewport. Congelados no HTML estático, viram conteúdo oculto.
 * Removemos só essas duas declarações; o JS reaplica a animação ao carregar.
 */
function unhide(html) {
  return html.replace(/style="([^"]*)"/g, (full, decls) => {
    const kept = decls
      .split(';')
      .map(d => d.trim())
      .filter(d => d && !/^opacity:\s*0(\.\d+)?$/i.test(d) && !/^transform:/i.test(d))
      .join('; ')
    return kept ? `style="${kept}"` : ''
  })
}

const chrome = await findChrome()
if (!chrome) {
  console.warn('[prerender] Chrome não encontrado. Publicando sem pré-renderização.')
  process.exit(0)
}

const bodyOf = html => html.slice(html.indexOf('<body'), html.indexOf('</body>'))

/** Conteúdo de verdade, e não a casca de ~150 bytes que o Vite gera. */
const MIN_BODY = 2000

const server = await serve()
try {
  // `--dump-dom` despeja no evento `load`, que acontece antes de o React montar
  // quando o bundle ainda não está em cache. Na segunda tentativa o Chrome já
  // tem o JS em disco e chega a tempo. Repetir é mais confiável do que cravar
  // uma espera fixa, que erraria para mais na minha máquina e para menos no CI.
  let html = null
  for (let i = 1; i <= 4; i++) {
    const dump = unhide(await dumpDom(chrome))
    if (bodyOf(dump).length >= MIN_BODY) { html = dump; break }
    console.log(`[prerender] tentativa ${i}: página ainda vazia, repetindo`)
  }

  if (!html) throw new Error(`body não passou de ${MIN_BODY} bytes em 4 tentativas`)

  await writeFile(join(DIST, 'index.html'), html)
  console.log(`[prerender] ok — body com ${bodyOf(html).length.toLocaleString('pt-BR')} bytes`)
} catch (e) {
  console.warn(`[prerender] falhou (${e.message}). Publicando sem pré-renderização.`)
} finally {
  server.close()
}
