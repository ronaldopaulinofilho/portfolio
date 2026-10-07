import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { uiParaIaCase } from '../data/caseStudies'
import { Block } from '../components/ui/CaseStudyModal'
import { useLang } from '../contexts/LanguageContext'
import { Footer } from '../components/layout/Footer'

const URL = 'https://www.ronaldopaulinofilho.com.br/estudos/ui-para-ia/'

/**
 * O estudo como página própria, e não só como modal.
 *
 * O modal só monta o conteúdo quando alguém clica, então nada dele chega ao
 * HTML publicado. Aqui o texto inteiro existe no documento desde o primeiro
 * byte: é o que permite ranquear por conta própria e ser citado por quem não
 * executa JavaScript.
 */
export default function EstudoUiIa() {
  const { lang, t } = useLang()
  const c = uiParaIaCase[lang === 'en' ? 'en' : 'pt']

  // title, description e canonical próprios da rota: sem isso a página herda
  // os da home e as duas competem pelos mesmos termos.
  useEffect(() => {
    const anterior = document.title
    document.title = `${c.title} — Ronaldo Paulino Filho`

    const def = (sel: string, cria: () => HTMLElement) =>
      (document.head.querySelector(sel) as HTMLElement) ?? document.head.appendChild(cria())

    const desc = def('meta[name="description"]', () => {
      const m = document.createElement('meta')
      m.setAttribute('name', 'description')
      return m
    })
    const descAntes = desc.getAttribute('content')
    desc.setAttribute('content', c.subtitle)

    const canon = def('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    }) as HTMLLinkElement
    const canonAntes = canon.href
    canon.href = URL

    return () => {
      document.title = anterior
      if (descAntes) desc.setAttribute('content', descAntes)
      canon.href = canonAntes
    }
  }, [c])

  return (
    <div className="bg-white min-h-screen">
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <a
          href={import.meta.env.BASE_URL}
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:opacity-70"
          style={{ color: 'var(--text)' }}
        >
          <ArrowLeft size={16} />
          {t.nav.about ? (lang === 'en' ? 'Back to portfolio' : 'Voltar ao portfólio') : 'Voltar'}
        </a>

        <p
          className="text-xs font-medium uppercase tracking-widest mb-4"
          style={{ color: 'var(--text)' }}
        >
          {uiParaIaCase.label}
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
          <div>
            <dt className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text)' }}>
              {c.meta.roleLabel}
            </dt>
            <dd className="text-sm" style={{ color: 'var(--text-heading)' }}>{c.meta.role}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider mb-1" style={{ color: 'var(--text)' }}>
              {c.meta.toolsLabel}
            </dt>
            <dd className="text-sm" style={{ color: 'var(--text-heading)' }}>{c.meta.tools}</dd>
          </div>
        </dl>

        {c.intro.split('\n\n').map((para, i) => (
          <p key={i} className="text-base leading-relaxed mb-5" style={{ color: 'var(--text)' }}>
            {para}
          </p>
        ))}

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
      </main>
      <Footer />
    </div>
  )
}
