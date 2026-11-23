import type { ReactNode } from 'react'

/**
 * Ícone em chip colorido, como nos "service chips" do design system Hanzo:
 * fundo saturado e glifo numa cor de contraste (nunca preto sobre a cor).
 * Pares copiados do design system.
 */
const iconTones = {
  yellow: { bg: '#ffd500', fg: '#660080' },
  pink: { bg: '#ff45ab', fg: '#c9fffb' },
  green: { bg: '#52ff69', fg: '#3224ff' },
  sky: { bg: '#05a9ff', fg: '#f8ffbf' },
  orange: { bg: '#ff5e00', fg: '#fff3c2' },
  graphite: { bg: '#474747', fg: '#baffd0' },
  // fora da paleta do design system: azul da marca LinkedIn com glifo branco
  blue: { bg: '#0a66c2', fg: '#ffffff' },
} as const

export type IconTone = keyof typeof iconTones

const SIZES = { sm: 'w-5 h-5', md: 'w-10 h-10', lg: 'w-11 h-11' } as const

export function ColorIcon({
  tone,
  size = 'lg',
  children,
}: {
  tone: IconTone
  size?: keyof typeof SIZES
  children: ReactNode
}) {
  const { bg, fg } = iconTones[tone]
  return (
    <span
      aria-hidden="true"
      className={`${SIZES[size]} shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
      style={{ backgroundColor: bg, color: fg, boxShadow: size === 'sm' ? undefined : '3px 4px 6px rgba(0,0,0,0.12)' }}
    >
      {children}
    </span>
  )
}
