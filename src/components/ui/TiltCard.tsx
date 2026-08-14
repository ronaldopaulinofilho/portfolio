import { useRef, type ReactNode, type PointerEvent } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { ease } from '../../lib/motion'
import { cn } from '../../lib/utils'

/**
 * Glass card with a scroll reveal and a cursor-tracked 3D tilt.
 *
 * Two nested elements on purpose: the outer one owns the reveal (opacity /
 * y / scale) and the inner one owns the tilt. Both would otherwise write to
 * the same `transform` and clobber each other.
 *
 * We never animate `filter` here — a `filter` on the card would make it a
 * backdrop root and cancel its own `backdrop-filter`, so a blur-in reveal
 * would visibly break the frosted fill.
 */

const MAX_TILT = 5.5

const TAGS = {
  div: motion.div,
  article: motion.article,
  figure: motion.figure,
}

export function TiltCard({
  children,
  className,
  wrapperClassName,
  index = 0,
  as = 'div',
  id,
  onClick,
  sheen = true,
}: {
  children: ReactNode
  /** Classes for the card itself (glass, radius, padding). */
  className?: string
  /** Classes for the outer wrapper — this is the grid item, so column spans go here. */
  wrapperClassName?: string
  index?: number
  as?: keyof typeof TAGS
  id?: string
  onClick?: () => void
  sheen?: boolean
}) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  // Pointer position within the card, normalised to 0..1.
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const active = useMotionValue(0)

  const follow = { stiffness: 260, damping: 28, mass: 0.6 }
  const sx = useSpring(px, follow)
  const sy = useSpring(py, follow)
  const sActive = useSpring(active, { stiffness: 200, damping: 30 })

  const rotateY = useTransform(sx, [0, 1], [-MAX_TILT, MAX_TILT])
  const rotateX = useTransform(sy, [0, 1], [MAX_TILT, -MAX_TILT])
  const scale = useTransform(sActive, [0, 1], [1, 1.02])

  const sheenX = useTransform(sx, v => `${v * 100}%`)
  const sheenY = useTransform(sy, v => `${v * 100}%`)
  const sheenBg = useMotionTemplate`radial-gradient(22rem 22rem at ${sheenX} ${sheenY}, rgba(255,255,255,0.75), rgba(255,255,255,0) 70%)`
  const sheenOpacity = useTransform(sActive, [0, 1], [0, 0.55])

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (reduced || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
    active.set(1)
  }

  function handleLeave() {
    px.set(0.5)
    py.set(0.5)
    active.set(0)
  }

  const Card = TAGS[as]

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.09, ease }}
      style={{ perspective: 1000 }}
      className={cn('h-full', wrapperClassName)}
    >
      <Card
        ref={ref as never}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        onClick={onClick}
        style={reduced ? undefined : { rotateX, rotateY, scale }}
        className={cn('relative h-full', className)}
      >
        {children}
        {sheen && !reduced && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: sheenBg, opacity: sheenOpacity }}
          />
        )}
      </Card>
    </motion.div>
  )
}
