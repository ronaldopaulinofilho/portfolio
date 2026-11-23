import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import { IconBehance, IconLinkedin } from '../ui/BrandIcons'
import { ColorIcon, type IconTone } from '../ui/ColorIcon'
import { contact } from '../../data/contact'
import { useLang } from '../../contexts/LanguageContext'

export function Contact() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const links = [
    {
      tone: 'orange' as IconTone,
      icon: <Mail size={18} />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      tone: 'sky' as IconTone,
      icon: <IconBehance size={18} />,
      label: 'Behance',
      value: contact.behance.display,
      href: contact.behance.url,
    },
    {
      tone: 'blue' as IconTone,
      icon: <IconLinkedin size={18} />,
      label: 'LinkedIn',
      value: contact.linkedin.display,
      href: contact.linkedin.url,
    },
  ]

  return (
    <section id="contact" className="pt-12 pb-24 sm:pt-16 sm:pb-32 px-8 sm:px-12 ambient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 56, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neutral-600 mb-4 tracking-wider">{t.contact.label}</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 max-w-lg">
            {t.contact.heading}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 mt-4 max-w-md">{t.contact.body}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 max-w-lg"
        >
          {links.map(({ tone, icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-5 rounded-2xl ds-card ds-card-interactive"
            >
              <div className="flex items-center gap-4">
                <ColorIcon tone={tone} size="md">
                  {icon}
                </ColorIcon>
                <div>
                  <p className="font-mono text-xs text-neutral-600 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-neutral-900">{value}</p>
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-neutral-400 group-hover:text-neutral-900 transition-colors duration-200"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
