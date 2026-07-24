import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowDown, FileText } from 'lucide-react'
import { IconBehance, IconLinkedin } from '../ui/BrandIcons'
import { contact } from '../../data/contact'
import { useLang } from '../../contexts/LanguageContext'

const HeroCanvas = lazy(() => import('./HeroCanvas'))

const NODES: [number, number][] = [[28, 148], [72, 72], [138, 108], [186, 28]]
const PATH = `M${NODES.map(([x, y]) => `${x} ${y}`).join(' L')}`
const PATH_LEN = 340

function FigmaCursor() {
  const [hover, setHover] = useState(false)
  const [auto, setAuto] = useState(false)
  const on = hover || auto

  // Replays the vector-drawing animation on its own so it's discoverable without hover
  useEffect(() => {
    let hide: ReturnType<typeof setTimeout>
    const show = () => {
      setAuto(true)
      hide = setTimeout(() => setAuto(false), 2800)
    }
    const first = setTimeout(show, 1200)
    const loop = setInterval(show, 7500)
    return () => {
      clearTimeout(first)
      clearTimeout(hide)
      clearInterval(loop)
    }
  }, [])

  return (
    <span
      className="relative inline-block cursor-default select-none"
      style={{ width: 26, height: 36, verticalAlign: 'middle', marginLeft: 14, position: 'relative', top: -26 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Figma arrow cursor — accurate shape with drop shadow */}
      <svg width="26" height="36" viewBox="0 0 12 19" fill="none" aria-hidden="true"
        style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.35))' }}>
        <path
          d="M0.5 0.5 L0.5 15.5 L4.1 12 L7 17.8 L9.2 16.9 L6.3 11.1 L11.5 11.1 Z"
          fill="white"
          stroke="#111111"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Vector drawing lines — appear on hover, extend upward into the canvas */}
      <svg
        aria-hidden="true"
        viewBox="0 0 220 170"
        width="260"
        height="201"
        fill="none"
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: -48,
          pointerEvents: 'none',
          opacity: on ? 1 : 0,
          transition: 'opacity 0.15s ease',
          zIndex: 20,
        }}
      >
        {/* Blue path */}
        <path
          d={PATH}
          stroke="#18A0FB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: PATH_LEN,
            strokeDashoffset: on ? 0 : PATH_LEN,
            transition: on ? 'stroke-dashoffset 0.45s ease-out' : 'none',
          }}
        />

        {/* Dashed preview from last node */}
        <line
          x1="186" y1="28" x2="210" y2="6"
          stroke="#18A0FB"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
          style={{
            opacity: on ? 0.55 : 0,
            transition: on ? 'opacity 0.2s 0.4s' : 'none',
          }}
        />

        {/* Anchor nodes (hollow) */}
        {NODES.map(([x, y], i) => (
          <rect
            key={i}
            x={x - 4} y={y - 4}
            width={8} height={8}
            fill="white"
            stroke="#18A0FB"
            strokeWidth="1.5"
            style={{
              opacity: on ? 1 : 0,
              transition: on ? `opacity 0.15s ${i * 0.07}s` : 'none',
            }}
          />
        ))}

        {/* Active node at preview end (filled) */}
        <rect
          x={206} y={2}
          width={8} height={8}
          fill="#18A0FB"
          style={{
            opacity: on ? 1 : 0,
            transition: on ? 'opacity 0.15s 0.42s' : 'none',
          }}
        />
      </svg>
    </span>
  )
}

export function Hero() {
  const { t } = useLang()

  const socials = [
    { icon: <IconBehance size={16} />, href: contact.behance.url, label: 'Behance' },
    { icon: <IconLinkedin size={16} />, href: contact.linkedin.url, label: 'LinkedIn' },
  ]

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white">
      <Suspense fallback={null}>
        <HeroCanvas />
      </Suspense>

      {/* Top navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 sm:px-12 py-7">
        <span className="font-mono text-sm text-neutral-900 font-semibold tracking-tight">
          Ronaldo Paulino Filho
        </span>

        <div className="flex items-center gap-4">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200"
            >
              {icon}
            </a>
          ))}

          <a
            href={`${import.meta.env.BASE_URL}Curriculo-Ronaldo-Paulino.pdf`}
            download
            className="h-9 px-4 hidden sm:flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200"
          >
            <FileText size={14} />
            {t.hero.cv}
          </a>

          <a
            href="#projects"
            className="h-9 px-4 flex items-center rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-200"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 sm:px-12 pb-14 sm:pb-16">
        <p className="font-mono text-xs text-neutral-400 mb-3 tracking-wider">
          {t.hero.tagline}
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900" style={{ lineHeight: '0.88' }}>
          {t.hero.heading[0]}<FigmaCursor />
          <br />
          <span className="text-neutral-400">{t.hero.heading[1]}</span>
        </h1>

        <div className="flex items-center gap-3 mt-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-neutral-400">{t.hero.badge}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-14 right-8 sm:right-12 z-10 flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
