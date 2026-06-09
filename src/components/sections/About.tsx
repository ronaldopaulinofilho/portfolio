import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Layers, Zap, PenTool } from 'lucide-react'

const skills = [
  {
    category: 'Product Design',
    icon: PenTool,
    items: ['UX Research', 'Figma', 'Design Systems', 'Prototipação', 'Testes de Usabilidade'],
  },
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: Layers,
    items: ['Node.js', 'PostgreSQL', 'REST APIs', 'Docker'],
  },
  {
    category: 'Ferramentas',
    icon: Zap,
    items: ['Git', 'Storybook', 'Vercel', 'Linear', 'Notion'],
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function SkillCard({
  category,
  icon: Icon,
  items,
  index,
}: (typeof skills)[0] & { index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

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
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-16"
      >
        <span
          className="text-sm font-medium tracking-widest uppercase mb-4 block"
          style={{ color: 'var(--accent-light)' }}
        >
          Sobre
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          style={{ color: 'var(--text-heading)' }}
        >
          Design que fala,
          <br />
          código que entrega.
        </h2>
        <p className="text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--text)' }}>
          Sou um profissional que transita entre o design e o desenvolvimento — entendo tanto
          a linguagem do Figma quanto do terminal. Acredito que os melhores produtos nascem
          da interseção entre empatia pelo usuário e excelência técnica.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <SkillCard key={skill.category} {...skill} index={i} />
        ))}
      </div>
    </section>
  )
}
