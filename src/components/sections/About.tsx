import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '../../contexts/LanguageContext'
import { FigmaLines } from '../ui/FigmaLines'
import { TiltCard } from '../ui/TiltCard'
import { AreaMotif } from '../ui/AreaMotif'

const ease = [0.22, 1, 0.36, 1] as const

export function About() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="pt-12 pb-10 sm:pt-16 sm:pb-14 px-8 sm:px-12 ambient-plain ambient-top-fade">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 56, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease }}
        >
          <p className="font-mono text-xs text-neutral-600 mb-4 tracking-wider">{t.about.label}</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-neutral-900 text-gradient mb-6 max-w-2xl">
            {t.about.heading[0]}
            <br />
            {t.about.heading[1]}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mb-16">
            {t.about.body}
          </p>
        </motion.div>

        {/* Areas grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {t.about.areas.map((area, i) => (
            <TiltCard
              key={area.title}
              index={i}
              className="glass glass-edge glass-interactive rounded-3xl p-7"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{area.description}</p>
                </div>
                <AreaMotif index={i} />
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {t.about.skills.map(skill => (
            <div key={skill.key}>
              <p className="font-mono text-xs text-neutral-600 mb-3">{skill.category}</p>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <FigmaLines key={item}>
                    <span className="text-xs px-3 py-1.5 rounded-full border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900 transition-colors duration-200 cursor-default">
                      {item}
                    </span>
                  </FigmaLines>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-12 pt-12 border-t border-neutral-900/[0.07] flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-xs text-neutral-600 mr-2">indústrias</span>
          {t.about.industries.map(ind => (
            <FigmaLines key={ind}>
              <span className="text-xs px-3 py-1 rounded-full glass-chip text-neutral-600 cursor-default">
                {ind}
              </span>
            </FigmaLines>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
