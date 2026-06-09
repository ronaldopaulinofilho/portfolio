import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Props {
  images: string[]
  initialIndex?: number
  title: string
  onClose: () => void
}

function imgUrl(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}

export function ImageLightbox({ images, initialIndex = 0, title, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex)
  const multi = images.length > 1

  const prev = useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, prev, next])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.94, opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="relative w-full max-w-5xl flex flex-col items-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors p-1"
          aria-label="Fechar"
        >
          <X size={22} />
        </button>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={imgUrl(images[current])}
            alt={`${title} ${current + 1}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.18 }}
            className="w-full rounded-xl object-contain shadow-2xl"
            style={{ maxHeight: '78vh' }}
            loading="lazy"
          />
        </AnimatePresence>

        {/* Navigation arrows — inside on mobile, outside on md+ */}
        {multi && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-12 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all bg-black/30 md:bg-transparent hover:bg-white/10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-12 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all bg-black/30 md:bg-transparent hover:bg-white/10"
              aria-label="Próxima"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dots */}
        {multi && (
          <div className="flex gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  backgroundColor: i === current ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                }}
                aria-label={`Imagem ${i + 1}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
