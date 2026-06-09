import { motion, useReducedMotion } from 'framer-motion'

const paths = [
  'M -200 180 C 200 80, 550 380, 850 130 S 1250 280, 1650 80',
  'M -200 420 C 150 270, 500 560, 900 310 S 1320 470, 1700 320',
  'M -200 660 C 200 500, 620 780, 1020 520 S 1420 660, 1700 560',
  'M -100 -60 C 320 180, 640 -120, 1060 230 S 1430 30, 1700 190',
  'M 150 940 C 380 720, 720 920, 1040 700 S 1360 840, 1700 740',
]

export function AnimatedLines() {
  const reduced = useReducedMotion()
  if (reduced) return null

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1400 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="0.8"
          strokeOpacity={0.28}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: {
              duration: 3.2,
              delay: 0.2 + i * 0.45,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: { duration: 0.6, delay: 0.2 + i * 0.45 },
          }}
        />
      ))}
    </svg>
  )
}
