import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'
import { IconLinkedin } from '../ui/BrandIcons'
import { testimonials } from '../../data/testimonials'
import { contact } from '../../data/contact'
import { useLang } from '../../contexts/LanguageContext'
import { ease } from '../../lib/motion'

function initials(name: string) {
  return name
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function TestimonialCard({
  item,
  lang,
  index,
  featured = false,
}: {
  item: (typeof testimonials)[number]
  lang: 'pt' | 'en'
  index: number
  featured?: boolean
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className={
        featured
          ? 'rounded-2xl border border-neutral-100 bg-white p-8 hover:border-neutral-200 hover:shadow-lg transition-all duration-300'
          : 'rounded-2xl border border-neutral-100 bg-white p-7 hover:border-neutral-200 hover:shadow-lg transition-all duration-300'
      }
    >
      <Quote size={featured ? 26 : 20} className="text-neutral-200 mb-4" aria-hidden="true" />

      <blockquote className="space-y-3 mb-6">
        {item.text[lang].split('\n\n').map((para, j) => (
          <p key={j} className={`leading-relaxed text-neutral-600 ${featured ? 'text-[15px]' : 'text-sm'}`}>
            {para}
          </p>
        ))}
      </blockquote>

      <figcaption className="flex items-center gap-3 pt-5 border-t border-neutral-100">
        <span className="w-10 h-10 shrink-0 rounded-full bg-neutral-100 flex items-center justify-center font-mono text-xs font-semibold text-neutral-600">
          {initials(item.name)}
        </span>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
          <p className="text-xs text-neutral-500">{item.role[lang]}</p>
          <p className="text-xs text-neutral-400">{item.relation[lang]}</p>
        </div>
      </figcaption>
    </motion.figure>
  )
}

export function Testimonials() {
  const { t, lang } = useLang()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" className="pt-4 pb-24 sm:pt-6 sm:pb-32 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 56, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs text-neutral-400 mb-4 tracking-wider">{t.testimonials.label}</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
              {t.testimonials.heading}
            </h2>
          </div>

          <a
            href={contact.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200"
          >
            <IconLinkedin size={14} />
            {t.testimonials.linkedin}
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 items-start">
          <div className="flex flex-col gap-5">
            <TestimonialCard item={testimonials[2]} lang={lang} index={0} />
            <TestimonialCard item={testimonials[1]} lang={lang} index={1} />
          </div>
          <TestimonialCard item={testimonials[0]} lang={lang} index={2} featured />
        </div>
      </div>
    </section>
  )
}
