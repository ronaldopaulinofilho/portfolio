import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PenTool, Layers, Code2 } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import { TiltCard } from '../ui/TiltCard'

const ease = [0.22, 1, 0.36, 1] as const

const cardIcons = [PenTool, Layers, Code2]

export function Services() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="pt-4 pb-24 sm:pt-6 sm:pb-32 px-8 sm:px-12 ambient">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 56, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neutral-600 mb-4 tracking-wider">{t.services.label}</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            {t.services.heading}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {t.services.cards.map((card, i) => {
            const Icon = cardIcons[i]
            return (
              <TiltCard
                key={card.title}
                index={i}
                className="group glass glass-interactive rounded-3xl p-8 flex flex-col gap-5"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-2xl glass-chip glass-chip-hover text-neutral-600">
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{card.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {card.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg glass-chip text-neutral-600 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
