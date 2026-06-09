import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Zap, PenTool } from 'lucide-react'
import { ease } from '../../lib/motion'
import { SectionHeader } from '../ui/SectionHeader'
import { useLang } from '../../contexts/LanguageContext'
import type { LucideIcon } from 'lucide-react'

const skillIcons: Record<string, LucideIcon> = {
  design: PenTool,
  frontend: Code2,
  tools: Zap,
}

function AreaCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      className="p-6 rounded-2xl border"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div
        className="w-1 h-6 rounded-full mb-4"
        style={{ backgroundColor: 'var(--accent)' }}
      />
      <h3 className="font-semibold text-sm mb-2" style={{ color: 'var(--accent-light)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
        {description}
      </p>
    </motion.div>
  )
}

function SkillCard({
  category,
  items,
  iconKey,
  index,
}: {
  category: string
  items: readonly string[]
  iconKey: string
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = skillIcons[iconKey]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease }}
      className="p-6 rounded-2xl border transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-light)' }}
      >
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-base mb-3" style={{ color: 'var(--text-heading)' }}>
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map(item => (
          <li
            key={item}
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text)',
              backgroundColor: 'var(--bg-secondary)',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function About() {
  const { t } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="pt-12 pb-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-12"
      >
        <SectionHeader label={t.about.label} className="mb-6">
          {t.about.heading[0]}
          <br />
          {t.about.heading[1]}
        </SectionHeader>
        <p className="text-lg max-w-3xl leading-relaxed mt-6 mx-auto text-center" style={{ color: 'var(--text)' }}>
          {t.about.body}
        </p>
      </motion.div>

      {/* Frentes de atuação */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {t.about.areas.map((area, i) => (
          <AreaCard key={area.title} title={area.title} description={area.description} index={i} />
        ))}
      </div>

      {/* Skills */}
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        {t.about.skills.map((skill, i) => (
          <SkillCard
            key={skill.key}
            category={skill.category}
            items={skill.items}
            iconKey={skill.key}
            index={i}
          />
        ))}
      </div>

      {/* Fechamento */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease }}
        className="text-sm leading-relaxed"
        style={{ color: 'var(--text)' }}
      >
        {t.about.closing}
      </motion.p>
    </section>
  )
}
