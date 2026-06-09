import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { IconGithub } from '../ui/BrandIcons'
import { projects } from '../../data/projects'
import type { Project } from '../../types'
import { cn } from '../../lib/utils'

const ease = [0.22, 1, 0.36, 1] as const

const filterLabels: { value: Project['type'] | 'all'; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'design', label: 'Design' },
  { value: 'dev', label: 'Dev' },
  { value: 'fullstack', label: 'Full-stack' },
]

const typeColors: Record<Project['type'], string> = {
  design: '#f59e0b',
  dev: '#3b82f6',
  fullstack: '#a78bfa',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
      onMouseEnter={e => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px var(--accent-glow)'
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'color-mix(in srgb, var(--accent) 40%, var(--border))'
      }}
      onMouseLeave={e => {
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
        ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
      }}
    >
      {/* Thumbnail */}
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${typeColors[project.type]}, transparent 70%)`,
          }}
        />
        <ArrowUpRight
          size={40}
          className="opacity-10 group-hover:opacity-25 transition-opacity"
          style={{ color: typeColors[project.type] }}
        />
        <span
          className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-medium"
          style={{
            backgroundColor: `${typeColors[project.type]}20`,
            color: typeColors[project.type],
            border: `1px solid ${typeColors[project.type]}40`,
          }}
        >
          {project.type}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-semibold text-lg mb-2 transition-colors group-hover:opacity-80"
          style={{ color: 'var(--text-heading)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md border"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text)',
                backgroundColor: 'var(--bg-secondary)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: 'var(--accent-light)' }}
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--text)' }}
            >
              <IconGithub size={14} />
              Código
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Project['type'] | 'all'>('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter)

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-12"
      >
        <span
          className="text-sm font-medium tracking-widest uppercase mb-4 block"
          style={{ color: 'var(--accent-light)' }}
        >
          Projetos
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: 'var(--text-heading)' }}
          >
            Trabalhos selecionados
          </h2>

          <div
            className="flex items-center gap-1 p-1 rounded-xl border self-start"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
          >
            {filterLabels.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={cn('px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200')}
                style={
                  filter === value
                    ? { backgroundColor: 'var(--accent)', color: '#fff' }
                    : { color: 'var(--text)' }
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
