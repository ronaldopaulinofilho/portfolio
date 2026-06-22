import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ExternalLink, ArrowUpRight, ZoomIn, ArrowRight } from 'lucide-react'
import { IconGithub } from '../ui/BrandIcons'
import { ImageLightbox } from '../ui/ImageLightbox'
import { CaseStudyModal } from '../ui/CaseStudyModal'
import { projects } from '../../data/projects'
import { designSystemCase } from '../../data/caseStudies'
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
      className="col-span-full rounded-2xl border border-neutral-100 overflow-hidden flex flex-col md:flex-row bg-white hover:border-neutral-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex-1 p-7 flex flex-col justify-between gap-5">
        <div>
          <span className="font-mono text-xs text-neutral-400 block mb-3">{study.label}</span>
          <h3 className="font-bold text-xl leading-snug mb-3 text-neutral-900">{locale.title}</h3>
          <p className="text-sm leading-relaxed max-w-lg text-neutral-500">{locale.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-neutral-500">
          <span>
            <span className="font-semibold text-neutral-900">{locale.meta.roleLabel} </span>
            Lead Product Designer
          </span>
          <span>
            <span className="font-semibold text-neutral-900">{locale.meta.durationLabel} </span>
            {locale.meta.duration}
          </span>
          <span>
            <span className="font-semibold text-neutral-900">Stack </span>
            Figma · React · Vue.js · Storybook
          </span>
        </div>

        <button
          onClick={onOpen}
          className="self-start flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200"
        >
          {locale.readMore}
          <ArrowRight size={14} />
        </button>
      </div>

      <div
        className="md:w-80 h-56 md:h-auto relative overflow-hidden cursor-pointer group shrink-0 bg-neutral-50"
        onClick={onOpen}
      >
        <img
          src={imgUrl(study.images[0])}
          alt={locale.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
          <ZoomIn size={26} className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 drop-shadow-lg" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex gap-1.5 p-2.5 bg-gradient-to-t from-black/30">
          {study.images.slice(1).map((src, i) => (
            <img
              key={i}
              src={imgUrl(src)}
              alt=""
              className="h-9 w-14 rounded object-cover object-top opacity-70 hover:opacity-100 transition-opacity"
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
  const description = lang === 'en' ? project.descriptionEn : project.description
  const hasImages = !!(project.images?.length || project.image)

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="group flex flex-col rounded-2xl border border-neutral-100 overflow-hidden bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-300"
    >
      <div
        className={cn('h-52 relative overflow-hidden bg-neutral-50', hasImages && 'cursor-zoom-in')}
        onClick={hasImages ? onImageClick : undefined}
      >
        {project.image ? (
          <>
            <img
              src={imgUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 drop-shadow-lg" />
            </div>
            {project.images && project.images.length > 1 && (
              <span className="absolute bottom-3 left-3 font-mono text-xs px-2 py-0.5 rounded-full text-white bg-black/40 backdrop-blur-sm">
                1 / {project.images.length}
              </span>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowUpRight size={36} className="text-neutral-200 group-hover:text-neutral-400 transition-colors duration-300" />
          </div>
        )}
        <span className="absolute top-3 right-3 font-mono text-xs px-2.5 py-1 rounded-full bg-white/90 border border-neutral-100 text-neutral-500 backdrop-blur-sm">
          {project.type}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-semibold text-lg mb-2 text-neutral-900">{project.title}</h3>
        <p className="text-sm leading-relaxed mb-4 flex-1 text-neutral-500">{description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="font-mono text-xs px-2.5 py-1 rounded-md border border-neutral-100 text-neutral-500 bg-neutral-50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-neutral-900 hover:opacity-60 transition-opacity">
              <ExternalLink size={14} />
              {demo}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
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
    <section id="projects" className="py-24 sm:py-32 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-neutral-400 mb-4 tracking-wider">{t.projects.label}</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
                {t.projects.heading}
              </h2>
            </div>

            <div className="flex items-center gap-1 p-1 rounded-xl border border-neutral-100 bg-neutral-50 self-start">
              {filterLabels.map(({ value, label }) => (
                <button
                  key={value}
                  onClick={() => setFilter(value)}
                  className={cn(
                    'px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                    filter === value
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-500 hover:text-neutral-900'
                  )}
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
      </div>
    </section>
  )
}
