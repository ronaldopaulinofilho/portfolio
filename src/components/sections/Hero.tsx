import { motion } from 'framer-motion'
import { ArrowDown, Mail, Sparkles } from 'lucide-react'
import { IconGithub, IconLinkedin } from '../ui/BrandIcons'

const ease = [0.22, 1, 0.36, 1] as const

function fadeUp(i: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }
}

const socials = [
  { icon: <IconGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <IconLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <Mail size={18} />, href: 'mailto:rpfilho2@gmail.com', label: 'Email' },
]

export function Hero() {
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

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--text-heading) 1px, transparent 1px), linear-gradient(90deg, var(--text-heading) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 text-center relative">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8"
          style={{
            borderColor: 'var(--accent)',
            color: 'var(--accent-light)',
            backgroundColor: 'var(--accent-glow)',
          }}
        >
          <Sparkles size={14} />
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          {...fadeUp(1)}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ color: 'var(--text-heading)' }}
        >
          Product Designer
          <br />
          <span style={{ color: 'var(--accent-light)' }}>&amp;</span> Developer
        </motion.h1>

        <motion.p
          {...fadeUp(2)}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text)' }}
        >
          Crio experiências digitais elegantes — da pesquisa de UX ao código em produção.
          Foco em interfaces bonitas, acessíveis e performáticas.
        </motion.p>

        <motion.div
          {...fadeUp(3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl font-medium text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#fff',
              boxShadow: '0 0 24px var(--accent-glow)',
            }}
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-xl font-medium text-sm border transition-all duration-200 hover:opacity-80"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-heading)',
              backgroundColor: 'var(--bg-card)',
            }}
          >
            Entrar em Contato
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(4)}
          className="flex items-center justify-center gap-4"
        >
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200 hover:opacity-100 opacity-50 hover:scale-105"
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

        <motion.div
          {...fadeUp(5)}
          className="flex justify-center mt-16"
        >
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
