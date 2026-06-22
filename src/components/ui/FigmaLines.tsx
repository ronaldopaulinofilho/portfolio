import { useState } from 'react'

const VARIANTS = [
  { nodes: [[8, 100], [52, 44], [108, 72], [152, 14]] as [number, number][], len: 260 },
  { nodes: [[12, 108], [68, 30], [120, 68], [158, 10]] as [number, number][], len: 270 },
  { nodes: [[6, 96], [44, 52], [100, 80], [148, 18]] as [number, number][], len: 250 },
]

let variantIndex = 0

export function FigmaLines({ children }: { children: React.ReactNode }) {
  const [on, setOn] = useState(false)
  const v = VARIANTS[variantIndex++ % VARIANTS.length]
  const path = `M${v.nodes.map(([x, y]) => `${x} ${y}`).join(' L')}`
  const last = v.nodes[v.nodes.length - 1]

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
    >
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 175 120"
        width="175"
        height="120"
        fill="none"
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 5px)',
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          opacity: on ? 1 : 0,
          transition: 'opacity 0.15s ease',
          zIndex: 50,
        }}
      >
        {/* Path */}
        <path
          d={path}
          stroke="#18A0FB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: v.len,
            strokeDashoffset: on ? 0 : v.len,
            transition: on ? 'stroke-dashoffset 0.4s ease-out' : 'none',
          }}
        />

        {/* Dashed preview from last node */}
        <line
          x1={last[0]} y1={last[1]}
          x2={last[0] + 16} y2={last[1] - 12}
          stroke="#18A0FB"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
          style={{ opacity: on ? 0.55 : 0, transition: on ? 'opacity 0.2s 0.32s' : 'none' }}
        />

        {/* Anchor nodes */}
        {v.nodes.map(([x, y], i) => (
          <rect
            key={i}
            x={x - 3.5} y={y - 3.5}
            width={7} height={7}
            fill="white"
            stroke="#18A0FB"
            strokeWidth="1.5"
            style={{
              opacity: on ? 1 : 0,
              transition: on ? `opacity 0.12s ${i * 0.06}s` : 'none',
            }}
          />
        ))}

        {/* Active node (filled) at preview tip */}
        <rect
          x={last[0] + 12.5} y={last[1] - 15.5}
          width={7} height={7}
          fill="#18A0FB"
          style={{ opacity: on ? 1 : 0, transition: on ? 'opacity 0.12s 0.36s' : 'none' }}
        />
      </svg>
    </span>
  )
}
