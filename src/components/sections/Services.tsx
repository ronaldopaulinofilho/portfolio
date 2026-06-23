import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { PenTool, Layers, Code2 } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'

const ease = [0.22, 1, 0.36, 1] as const

const cardIcons = [PenTool, Layers, Code2]

export function Services() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="pt-4 pb-24 sm:pt-6 sm:pb-32 px-8 sm:px-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 56, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease }}
          className="mb-14"
        >
          <p className="font-mono text-xs text-neutral-400 mb-4 tracking-wider">{t.services.label}</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
            {t.services.heading}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {t.services.cards.map((card, i) => {
            const Icon = cardIcons[i]
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: i * 0.12, ease }}
                className="group bg-white rounded-2xl border border-neutral-100 p-8 flex flex-col gap-5 hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 text-neutral-500 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-xs text-neutral-300">{card.number}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-neutral-900 mb-2">{card.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{card.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {card.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-neutral-50 border border-neutral-100 text-neutral-500 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
