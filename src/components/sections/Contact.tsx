import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { IconGithub, IconLinkedin } from '../ui/BrandIcons'

const ease = [0.22, 1, 0.36, 1] as const

const links = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'rpfilho2@gmail.com',
    href: 'mailto:rpfilho2@gmail.com',
  },
  {
    icon: <IconGithub size={18} />,
    label: 'GitHub',
    value: 'github.com/',
    href: 'https://github.com/',
  },
  {
    icon: <IconLinkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/',
    href: 'https://linkedin.com/',
  },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="text-center mb-12"
      >
        <span
          className="text-sm font-medium tracking-widest uppercase mb-4 block"
          style={{ color: 'var(--accent-light)' }}
        >
          Contato
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-5"
          style={{ color: 'var(--text-heading)' }}
        >
          Vamos construir algo juntos?
        </h2>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text)' }}>
          Estou disponível para projetos freelance, colaborações e oportunidades full-time.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="max-w-lg mx-auto flex flex-col gap-3"
      >
        {links.map(({ icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-2xl border group transition-all duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            onMouseEnter={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor =
                'color-mix(in srgb, var(--accent) 40%, var(--border))'
            }}
            onMouseLeave={e => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-light)' }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: 'var(--text)' }}>
                  {label}
                </p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-heading)' }}>
                  {value}
                </p>
              </div>
            </div>
            <ArrowUpRight
              size={18}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: 'var(--accent-light)' }}
            />
          </a>
        ))}
      </motion.div>
    </section>
  )
}
