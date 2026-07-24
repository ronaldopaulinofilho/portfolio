import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * Depth wrapper for page sections: as a section scrolls out of view it
 * recedes — shrinking and dimming slightly — so the next section reads as
 * sliding in over it. Scroll-linked, so it tracks the user's pace.
 */
export function DepthSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.72, 1], [0.975, 1, 1, 0.955])
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.75, 1], [0.85, 1, 1, 0.65])

  if (reduced) return <>{children}</>

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      {children}
    </motion.div>
  )
}
