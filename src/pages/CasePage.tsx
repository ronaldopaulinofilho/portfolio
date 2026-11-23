import { useEffect } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import type { CaseStudy } from '../data/caseStudies'
import { Block } from '../components/ui/CaseStudyModal'
import { Media } from '../components/ui/Media'
import { useLang } from '../contexts/LanguageContext'
import { Footer } from '../components/layout/Footer'

const SITE = 'https://www.ronaldopaulinofilho.com.br'

function assetUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

/** URL canônica com barra final: é assim que o GitHub Pages serve o index.html da pasta. */
function canonicalUrl(study: CaseStudy) {
  return `${SITE}${study.path}/`
}

/**
 * Cada case como página própria, e não só como modal.
 *
 * O modal só monta o conteúdo quando alguém clica, então nada dele chega ao
 * HTML publicado. Aqui o texto inteiro existe no documento desde o primeiro
 * byte: é o que permite ranquear por conta própria e ser citado por buscadores
 * de IA e agentes que não executam JavaScript.
 */
export default function CasePage({ study }: { study: CaseStudy }) {
  const { lang } = useLang()
  const c = study[lang === 'en' ? 'en' : 'pt']
  const url = canonicalUrl(study)
  const isStudy = study.path.startsWith('/estudos/')

  // title, description, canonical e Open Graph próprios da rota: sem isso a
  // página herda os da home e as duas competem pelos mesmos termos.
  useEffect(() => {
    const titulo = `${c.title} — Ronaldo Paulino Filho`
    const imagem = study.images.find(i => i.endsWith('.webp')) ?? '/og-image.png'
    const restaurar: (() => void)[] = []

    const anterior = document.title
    document.title = titulo
    restaurar.push(() => { document.title = anterior })

    const meta = (attr: 'name' | 'property', chave: string, valor: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${chave}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, chave)
        document.head.appendChild(el)
      }
      const antes = el.getAttribute('content')
      el.setAttribute('content', valor)
      restaurar.push(() => { if (antes !== null) el!.setAttribute('content', antes) })
    }

    meta('name', 'description', c.subtitle)
    meta('property', 'og:type', 'article')
    meta('property', 'og:title', titulo)
    meta('property', 'og:description', c.subtitle)
    meta('property', 'og:url', url)
    meta('property', 'og:image', `${SITE}${imagem}`)
    meta('name', 'twitter:title', titulo)
    meta('name', 'twitter:description', c.subtitle)
    meta('name', 'twitter:image', `${SITE}${imagem}`)

    let canon = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canon) {
      canon = document.createElement('link')
      canon.rel = 'canonical'
      document.head.appendChild(canon)
    }
    const canonAntes = canon.href
    canon.href = url
    restaurar.push(() => { canon!.href = canonAntes })

    return () => restaurar.reverse().forEach(f => f())
  }, [c, study, url])

  // Dados estruturados da página. O grafo da home descreve a pessoa; aqui
  // descrevemos o case e apontamos para ela pelo @id, sem repetir os dados.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': isStudy ? 'TechArticle' : 'CreativeWork',
    '@id': `${url}#case`,
    url,
    name: c.title,
    headline: c.title,
    description: c.subtitle,
    abstract: c.intro.split('\n\n')[0],
    inLanguage: lang === 'en' ? 'en' : 'pt-BR',
    image: study.images.filter(i => i.endsWith('.webp')).map(i => `${SITE}${i}`),
    author: { '@id': `${SITE}/#person` },
    creator: { '@id': `${SITE}/#person` },
    isPartOf: { '@id': `${SITE}/#webpage` },
    keywords: [study.cardStack, c.meta.tools].join(' · '),
    ...(study.demo ? { workExample: { '@type': 'WebApplication', name: c.demoLabel, url: `${SITE}${study.demo}` } } : {}),
  }

  const meta = [
    { label: c.meta.roleLabel, value: c.meta.role },
    { label: c.meta.durationLabel, value: c.meta.duration },
    { label: c.meta.toolsLabel, value: c.meta.tools },
    { label: c.meta.impactLabel, value: c.meta.impact },
  ].filter((m): m is { label: string; value: string } => !!m.label && !!m.value)

  const temMidiaNasSecoes = c.sections.some(s => s.blocks.some(b => b.type === 'media'))

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <a
          href={import.meta.env.BASE_URL}
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:opacity-70"
          style={{ color: 'var(--text)' }}
        >
          <ArrowLeft size={16} />
          {lang === 'en' ? 'Back to portfolio' : 'Voltar ao portfólio'}
        </a>

        <article>
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: 'var(--text)' }}
          >
            {study.label}
          </p>

          <h1
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-6"
            style={{ color: 'var(--text-heading)' }}
          >
            {c.title}
          </h1>

          <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text)' }}>
            {c.subtitle}
          </p>

          <dl className="grid sm:grid-cols-2 gap-6 mb-12 pb-12 border-b" style={{ borderColor: 'var(--border)' }}>
            {meta.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text)' }}>
                  {label}
                </dt>
                <dd className="text-sm" style={{ color: 'var(--text-heading)' }}>{value}</dd>
              </div>
            ))}
          </dl>

          {c.intro.split('\n\n').map((para, i) => (
            <p key={i} className="text-base leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
              {para}
            </p>
          ))}

          {study.demo && c.demoLabel && (
            <a
              href={assetUrl(study.demo)}
              target="_blank"
              rel="noopener"
              className="ds-btn inline-flex items-center gap-2 text-sm pl-5 pr-4 py-2.5 mt-4"
            >
              {c.demoLabel}
              <ArrowUpRight size={15} />
            </a>
          )}

          {study.video && (
            <Media
              src={assetUrl(study.video)}
              className="w-full rounded-xl border mt-8"
              style={{ borderColor: 'var(--border)' }}
              controls
            />
          )}

          {!temMidiaNasSecoes && study.images.length > 0 && (
            <div className="flex flex-col gap-4 mt-8">
              {study.images.map((src, i) => (
                <Media
                  key={src}
                  src={assetUrl(src)}
                  alt={`${c.title} — ${i + 1}`}
                  className="w-full rounded-xl border"
                  style={{ borderColor: 'var(--border)' }}
                />
              ))}
            </div>
          )}

          {c.sections.map((sec, i) => (
            <section key={i} className="mt-14">
              <h2
                className="text-2xl font-bold tracking-tight mb-6"
                style={{ color: 'var(--text-heading)' }}
              >
                <span aria-hidden="true" className="mr-2">{sec.emoji}</span>
                {sec.title}
              </h2>
              <div className="flex flex-col gap-5">
                {sec.blocks.map((b, j) => (
                  <Block key={j} block={b} />
                ))}
              </div>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  )
}
