import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { IconBehance, IconLinkedin } from '../ui/BrandIcons'
import { AnimatedLines } from '../ui/AnimatedLines'
import { fadeUp } from '../../lib/motion'
import { contact } from '../../data/contact'
import { useLang } from '../../contexts/LanguageContext'

export function Hero() {
  const { t } = useLang()

  const socials = [
    { icon: <IconBehance size={18} />, href: contact.behance.url, label: 'Behance' },
    { icon: <IconLinkedin size={18} />, href: contact.linkedin.url, label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: `mailto:${contact.email}`, label: 'Email' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, var(--accent-glow), transparent 70%)',
        }}
      />

      <AnimatedLines />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-heading) 1px, transparent 1px), linear-gradient(90deg, var(--text-heading) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28 md:py-32 text-center relative">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8"
          style={{
            borderColor: 'var(--accent)',
            color: 'var(--accent-light)',
            backgroundColor: 'var(--accent-glow)',
          }}
        >
          {t.hero.badge}
        </motion.div>

        <motion.h1
          {...fadeUp(1)}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ color: 'var(--text-heading)' }}
        >
          Product Designer <span style={{ color: 'var(--accent-light)' }}>UX</span>
          <br />
          <span style={{ color: 'var(--accent-light)' }}>&amp;</span> Developer
        </motion.h1>

        <motion.p
          {...fadeUp(2)}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text)' }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          {...fadeUp(3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-95 text-center"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#fff',
              boxShadow: '0 0 24px var(--accent-glow)',
            }}
          >
            {t.hero.cta1}
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-xl font-medium text-sm border transition-all duration-200 hover:opacity-80 text-center"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-heading)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        <motion.div {...fadeUp(4)} className="flex items-center justify-center gap-3 sm:gap-4">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-200 hover:opacity-100 opacity-50 hover:scale-105"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text-heading)',
                backgroundColor: 'var(--bg-card)',
              }}
            >
              {icon}
            </a>
          ))}
        </motion.div>

        <motion.div {...fadeUp(5)} className="flex justify-center mt-14 sm:mt-16">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown
              size={20}
              className="animate-bounce opacity-40"
              style={{ color: 'var(--text)' }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
