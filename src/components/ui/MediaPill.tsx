import { Media } from './Media'

/**
 * Pílula de mídia do design system Hanzo: um card pequeno e inclinado, usado
 * inline no título, onde as telas dos cases rolam na vertical em loop.
 *
 * Tamanhos em `em`, então ela acompanha o corpo do título onde for colocada.
 * A lista é duplicada e a trilha anda -50%: quando a primeira metade sai, a
 * segunda ocupa exatamente o mesmo lugar, e o loop não tem emenda.
 * Decorativa (aria-hidden): o texto do título já diz tudo.
 */

const base = import.meta.env.BASE_URL
const src = (p: string) => `${base}${p.replace(/^\//, '')}`

// Só as telas com cor de verdade (a maioria das capturas é cinza/branca e
// apagaria o card), alternando quente e frio e vários cases, não só os primeiros.
const DEFAULT_ITEMS = [
  '/projects/flux-landing.webp',
  '/projects/b2b-dashboard.webp',
  '/projects/flux-kanban.mp4',
  '/projects/design-system.webp',
  '/projects/voip-login.webp',
]

export function MediaPill({
  items = DEFAULT_ITEMS,
  tilt = -2,
  className,
}: {
  items?: string[]
  /** Graus de inclinação; o design system usa -2 e 2. */
  tilt?: number
  className?: string
}) {
  const loop = [...items, ...items]

  return (
    <span
      aria-hidden="true"
      className={`ds-media-pill ${className ?? ''}`}
      style={{ rotate: `${tilt}deg` }}
    >
      <span className="ds-media-pill-track" style={{ animationDuration: `${items.length * 2.6}s` }}>
        {loop.map((p, i) => (
          <Media key={i} src={src(p)} className="ds-media-pill-item" />
        ))}
      </span>
    </span>
  )
}
