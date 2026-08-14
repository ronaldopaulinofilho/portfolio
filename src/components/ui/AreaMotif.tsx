import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

/**
 * Line motifs for the About cards — one per area of expertise.
 *
 * Inline SVG rather than video or Lottie: a few hundred bytes each, vector
 * crisp at any size, and they inherit `currentColor` so they follow the card's
 * text colour. The loops only run while the card is on screen, and stop
 * entirely under prefers-reduced-motion.
 */

const STROKE = { stroke: 'currentColor', strokeWidth: 1.25, fill: 'none' } as const
const loop = (duration: number, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'reverse' as const,
  ease: 'easeInOut' as const,
})

/** Scalability: one module replicating into a system. */
function ScaleMotif({ on }: { on: boolean }) {
  const cells = [
    [6, 6],
    [30, 6],
    [6, 30],
    [30, 30],
  ]
  return (
    <>
      {cells.map(([x, y], i) => (
        <motion.rect
          key={i}
          x={x}
          y={y}
          width={20}
          height={20}
          rx={5}
          {...STROKE}
          initial={{ opacity: i === 0 ? 1 : 0.2, scale: 1 }}
          animate={on ? { opacity: i === 0 ? 1 : [0.2, 0.85, 0.2] } : {}}
          transition={loop(2.4, i * 0.35)}
          style={{ transformOrigin: `${x + 10}px ${y + 10}px` }}
        />
      ))}
    </>
  )
}

/** Design Engineering: a handoff travelling from canvas to code. */
function BridgeMotif({ on }: { on: boolean }) {
  return (
    <>
      <rect x={4} y={16} width={16} height={16} rx={4} {...STROKE} />
      <path d="M40 17l6 7-6 7" {...STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 17l-6 7 6 7" {...STROKE} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 24h5" {...STROKE} strokeDasharray="2 3" strokeLinecap="round" />
      <motion.circle
        r={2.2}
        cy={24}
        fill="currentColor"
        stroke="none"
        initial={{ cx: 22, opacity: 0 }}
        animate={on ? { cx: [22, 33, 22], opacity: [0, 1, 0] } : {}}
        transition={loop(2.2)}
      />
    </>
  )
}

/** Agentic AI: a core emitting signal to its satellites. */
function SignalMotif({ on }: { on: boolean }) {
  const sats = [
    [10, 12],
    [42, 14],
    [14, 40],
    [40, 38],
  ]
  return (
    <>
      {sats.map(([x, y], i) => (
        <line key={`l${i}`} x1={26} y1={26} x2={x} y2={y} {...STROKE} strokeDasharray="2 3" />
      ))}
      {sats.map(([x, y], i) => (
        <motion.circle
          key={`c${i}`}
          cx={x}
          cy={y}
          r={3}
          {...STROKE}
          initial={{ opacity: 0.3 }}
          animate={on ? { opacity: [0.3, 1, 0.3] } : {}}
          transition={loop(1.8, i * 0.3)}
        />
      ))}
      <motion.circle
        cx={26}
        cy={26}
        r={6}
        {...STROKE}
        initial={{ scale: 1, opacity: 0.9 }}
        animate={on ? { scale: [1, 1.5, 1], opacity: [0.9, 0.25, 0.9] } : {}}
        transition={loop(2)}
        style={{ transformOrigin: '26px 26px' }}
      />
      <circle cx={26} cy={26} r={2.4} fill="currentColor" stroke="none" />
    </>
  )
}

/** Complex B2B: dense rules resolving into a single clean flow. */
function FlowMotif({ on }: { on: boolean }) {
  const lines = [14, 22, 30, 38]
  return (
    <>
      {lines.map((y, i) => (
        <motion.path
          key={i}
          d={`M6 ${y}h${18 + i * 6}`}
          {...STROKE}
          strokeLinecap="round"
          initial={{ pathLength: 1, opacity: 0.35 }}
          animate={on ? { opacity: [0.35, 0.9, 0.35] } : {}}
          transition={loop(2.2, i * 0.22)}
        />
      ))}
      <motion.path
        d="M6 46h40"
        {...STROKE}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={on ? { pathLength: [0, 1] } : { pathLength: 1 }}
        transition={loop(2.6)}
      />
    </>
  )
}

const MOTIFS = [ScaleMotif, BridgeMotif, SignalMotif, FlowMotif]

export function AreaMotif({ index }: { index: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { margin: '-40px' })
  const reduced = useReducedMotion()
  const Motif = MOTIFS[index % MOTIFS.length]
  const on = inView && !reduced

  return (
    // #d97706 is the accent the hero canvas already uses for its particles.
    <span ref={ref} className="shrink-0 text-[#d97706]" aria-hidden="true">
      <svg width={54} height={54} viewBox="0 0 52 52">
        <Motif on={on} />
      </svg>
    </span>
  )
}
