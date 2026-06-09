import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

interface Props {
  label: string
  children: ReactNode
  className?: string
}

export function SectionHeader({ label, children, className }: Props) {
  return (
    <>
      <span
        className="text-sm font-medium tracking-widest uppercase mb-4 block"
        style={{ color: 'var(--accent-light)' }}
      >
        {label}
      </span>
      <h2
        className={cn('text-4xl md:text-5xl font-bold tracking-tight', className)}
        style={{ color: 'var(--text-heading)' }}
      >
        {children}
      </h2>
    </>
  )
}
