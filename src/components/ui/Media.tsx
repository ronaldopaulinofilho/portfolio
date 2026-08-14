import { useEffect, useRef, useState } from 'react'

const VIDEO_RE = /\.(mp4|webm)$/i

const isVideo = (src: string) => VIDEO_RE.test(src)

type MediaProps = {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
  controls?: boolean
}

/**
 * Autoplaying muted video that only fetches once it is near the viewport, and
 * pauses when it leaves.
 *
 * `preload="metadata"` is not enough on its own: an `autoplay` video is
 * downloaded eagerly regardless, so several off-screen clips would cost
 * megabytes on first load. We withhold `src` until the observer fires.
 */
function LazyVideo({ src, className, style, controls }: Omit<MediaProps, 'alt'>) {
  const ref = useRef<HTMLVideoElement>(null)
  // No IntersectionObserver (very old browser): load eagerly rather than
  // never — a missing video is worse than an early one.
  const [load, setLoad] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { rootMargin: '250px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  // autoplay only takes effect at load time, so kick playback off explicitly
  // the first time a source is attached.
  useEffect(() => {
    if (load) ref.current?.play().catch(() => {})
  }, [load])

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      className={className}
      style={style}
      autoPlay
      muted
      loop
      playsInline
      controls={controls}
      preload="none"
    />
  )
}

/**
 * Renders a lazy autoplaying <video> for .mp4/.webm sources and a lazy <img>
 * for everything else, so galleries can mix both transparently.
 */
export function Media({ src, alt = '', className, style, controls = false }: MediaProps) {
  if (isVideo(src)) {
    return <LazyVideo src={src} className={className} style={style} controls={controls} />
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
    />
  )
}
