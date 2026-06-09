import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import type { CaseStudy, CaseStudyBlock } from '../../data/caseStudies'
import { useLang } from '../../contexts/LanguageContext'

function imgUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

function Paragraph({ text }: { text: string }) {
  return (
    <>
      {text.split('\n\n').map((para, i) => (
        <p key={i} className={`text-sm leading-relaxed${i > 0 ? ' mt-3' : ''}`} style={{ color: 'var(--text)' }}>
          {para}
        </p>
      ))}
    </>
  )
}

function Block({ block }: { block: CaseStudyBlock }) {
  if (block.type === 'paragraph') return <Paragraph text={block.text} />

  if (block.type === 'subheading') {
    return (
      <h4 className="text-sm font-semibold mt-5 mb-1" style={{ color: 'var(--text-heading)' }}>
        {block.text}
      </h4>
    )
  }

  if (block.type === 'bullets') {
    return (
      <ul className="space-y-2.5 mt-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
            <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--accent)' }} />
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'numbered') {
    return (
      <ol className="space-y-5 mt-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
              style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-light)' }}
            >
              {i + 1}
            </span>
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text-heading)' }}>
                {item.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ol>
    )
  }

  return null
}

interface Props {
  study: CaseStudy
  onClose: () => void
}

export function CaseStudyModal({ study, onClose }: Props) {
  const { lang } = useLang()
  const locale = lang === 'en' ? study.en : study.pt
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 32, opacity: 0 }}
        transition={{ duration: 0.28 }}
        className="w-full max-w-2xl max-h-[90vh] rounded-2xl flex flex-col overflow-hidden border"
        style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between gap-4 px-4 sm:px-7 py-4 sm:py-5 border-b shrink-0"
          style={{ borderColor: 'var(--border)' }}
        >
          <div>
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 inline-block"
              style={{ backgroundColor: 'var(--accent-glow)', color: 'var(--accent-light)' }}
            >
              {study.label}
            </span>
            <h2 className="text-lg font-bold leading-snug" style={{ color: 'var(--text-heading)' }}>
              {locale.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-opacity hover:opacity-70"
            style={{ color: 'var(--text)', backgroundColor: 'var(--bg-secondary)' }}
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable body */}
        <div ref={scrollRef} className="overflow-y-auto flex-1 px-4 sm:px-7 py-5 sm:py-6 space-y-6 sm:space-y-7">
          <Paragraph text={locale.intro} />

          {/* Meta grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: locale.meta.roleLabel, value: locale.meta.role },
              { label: locale.meta.durationLabel, value: locale.meta.duration },
              { label: locale.meta.toolsLabel, value: locale.meta.tools },
              { label: locale.meta.impactLabel, value: locale.meta.impact },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="p-4 rounded-xl border"
                style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
              >
                <p className="text-xs font-semibold mb-1" style={{ color: 'var(--accent-light)' }}>
                  {label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text)' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* Screenshots */}
          <div className="flex gap-2.5 overflow-x-auto pb-1">
            {study.images.map((src, i) => (
              <img
                key={i}
                src={imgUrl(src)}
                alt={`${locale.title} ${i + 1}`}
                className="h-24 rounded-lg object-cover object-top shrink-0 border"
                style={{ borderColor: 'var(--border)' }}
                loading="lazy"
              />
            ))}
          </div>

          {/* Sections */}
          {locale.sections.map(section => (
            <div key={section.title}>
              <h3
                className="flex items-center gap-2 font-semibold text-base mb-4"
                style={{ color: 'var(--text-heading)' }}
              >
                <span>{section.emoji}</span>
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
