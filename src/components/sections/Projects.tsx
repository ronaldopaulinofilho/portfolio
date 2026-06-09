import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight, ZoomIn, ArrowRight } from 'lucide-react'
import { IconGithub } from '../ui/BrandIcons'
import { ImageLightbox } from '../ui/ImageLightbox'
import { CaseStudyModal } from '../ui/CaseStudyModal'
import { projects, typeColors } from '../../data/projects'
import { designSystemCase } from '../../data/caseStudies'
import { SectionHeader } from '../ui/SectionHeader'
import { ease } from '../../lib/motion'
import { useLang } from '../../contexts/LanguageContext'
import type { Project } from '../../types'
import { cn } from '../../lib/utils'

function imgUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

function CaseStudyCard({ onOpen }: { onOpen: () => void }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { lang } = useLang()
  const study = designSystemCase
  const locale = lang === 'en' ? study.en : study.pt

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease }}
      id="case-study"
      className="col-span-full rounded-2xl border overflow-hidden flex flex-col md:flex-row"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        boxShadow: '0 0 0 1px color-mix(in srgb, var(--accent) 15%, transparent)',
      }}
    >
      {/* Content */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between gap-5">
        <div>
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-light)' }}
          >
            {study.label}
          </span>
          <h3 className="font-bold text-xl leading-snug mb-3" style={{ color: 'var(--text-heading)' }}>
            {locale.title}
          </h3>
          <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'var(--text)' }}>
            {locale.subtitle}
          </p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'var(--text)' }}>
          <span>
            <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>{locale.meta.roleLabel} </span>
            Lead Product Designer
          </span>
          <span>
            <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>{locale.meta.durationLabel} </span>
            {locale.meta.duration}
          </span>
          <span>
            <span className="font-semibold" style={{ color: 'var(--accent-light)' }}>Stack </span>
            Figma · Figma Make · React · Vue.js · Storybook
          </span>
        </div>

        <button
          onClick={onOpen}
          className="self-start flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-opacity hover:opacity-75"
          style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-light)' }}
        >
          {locale.readMore}
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Image panel */}
      <div
        className="md:w-80 h-56 md:h-auto relative overflow-hidden cursor-pointer group shrink-0"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        onClick={onOpen}
      >
        <img
          src={imgUrl(study.images[0])}
          alt={locale.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn size={26} className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 drop-shadow-lg" />
        </div>
        {/* Mini thumbnails */}
        <div className="absolute bottom-0 left-0 right-0 flex gap-1.5 p-2.5 bg-gradient-to-t from-black/50">
          {study.images.slice(1).map((src, i) => (
            <img
              key={i}
              src={imgUrl(src)}
              alt=""
              className="h-9 w-14 rounded object-cover object-top opacity-80 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ProjectCard({
  project,
  index,
  demo,
  code,
  onImageClick,
}: {
  project: Project
  index: number
  demo: string
  code: string
  onImageClick: () => void
}) {
  const { lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const color = typeColors[project.type]
  const description = lang === 'en' ? project.descriptionEn : project.description
  const hasImages = !!(project.images?.length || project.image)

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
      <div
        className={cn('h-52 relative overflow-hidden', hasImages && 'cursor-zoom-in')}
        style={{ backgroundColor: 'var(--bg-secondary)' }}
        onClick={hasImages ? onImageClick : undefined}
      >
        {project.image ? (
          <>
            <img
              src={imgUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 drop-shadow-lg" />
            </div>
            {project.images && project.images.length > 1 && (
              <span
                className="absolute bottom-3 left-3 text-xs px-2 py-0.5 rounded-full font-medium text-white"
                style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
              >
                1 / {project.images.length}
              </span>
            )}
          </>
        ) : (
          <>
            <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at 30% 50%, ${color}, transparent 70%)` }} />
            <ArrowUpRight size={40} className="absolute inset-0 m-auto opacity-10 group-hover:opacity-25 transition-opacity" style={{ color }} />
          </>
        )}
        <span
          className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40`, backdropFilter: 'blur(8px)' }}
        >
          {project.type}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-semibold text-lg mb-2 transition-colors group-hover:opacity-80" style={{ color: 'var(--text-heading)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text)' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-md border" style={{ borderColor: 'var(--border)', color: 'var(--text)', backgroundColor: 'var(--bg-secondary)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70" style={{ color: 'var(--accent-light)' }}>
              <ExternalLink size={14} />
              {demo}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70" style={{ color: 'var(--text)' }}>
              <IconGithub size={14} />
              {code}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const { t } = useLang()
  const [filter, setFilter] = useState<Project['type'] | 'all'>('all')
  const [lightbox, setLightbox] = useState<{ project: Project } | null>(null)
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filterLabels: { value: Project['type'] | 'all'; label: string }[] = [
    { value: 'all', label: t.projects.filters.all },
    { value: 'design', label: t.projects.filters.design },
    { value: 'dev', label: t.projects.filters.dev },
  ]

  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter)
  const showCaseStudy = filter === 'all' || filter === 'design'

  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease }}
        className="mb-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader label={t.projects.label}>{t.projects.heading}</SectionHeader>

          <div
            className="flex items-center gap-1 p-1 rounded-xl border self-start"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
          >
            {filterLabels.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={cn('px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200')}
                style={filter === value ? { backgroundColor: 'var(--accent)', color: '#fff' } : { color: 'var(--text)' }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {showCaseStudy && <CaseStudyCard onOpen={() => setCaseStudyOpen(true)} />}
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            demo={t.projects.demo}
            code={t.projects.code}
            onImageClick={() => setLightbox({ project })}
          />
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <ImageLightbox
            images={lightbox.project.images ?? (lightbox.project.image ? [lightbox.project.image] : [])}
            title={lightbox.project.title}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {caseStudyOpen && (
          <CaseStudyModal study={designSystemCase} onClose={() => setCaseStudyOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}
