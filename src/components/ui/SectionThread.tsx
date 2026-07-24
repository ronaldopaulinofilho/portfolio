import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * Scroll-linked connector between page sections: a vertical thread that draws
 * itself as the boundary crosses the viewport, ending on a Figma-style anchor
 * node. Repeated between every section, it reads as one continuous line
 * stitching the page together.
 */
export function SectionThread() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'end 0.55'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 })
  const nodeOpacity = useTransform(progress, [0.7, 1], [0, 1])
  const nodeScale = useTransform(progress, [0.7, 1], [0.4, 1])

  if (reduced) return <div ref={ref} aria-hidden />

  return (
    <div ref={ref} aria-hidden className="relative z-10 h-20 -my-10 flex justify-center pointer-events-none">
      <motion.span
        className="w-px h-full origin-top bg-neutral-300"
        style={{ scaleY: progress }}
      />
      <motion.span
        className="absolute -bottom-[3px] w-[7px] h-[7px] bg-white border-[1.5px] border-[#18A0FB]"
        style={{ opacity: nodeOpacity, scale: nodeScale }}
      />
    </div>
  )
}
