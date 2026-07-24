const VIDEO_RE = /\.(mp4|webm)$/i

export const isVideo = (src: string) => VIDEO_RE.test(src)

/**
 * Renders an autoplaying silent looping <video> for .mp4/.webm sources and a
 * lazy <img> for everything else, so galleries can mix both transparently.
 */
export function Media({
  src,
  alt = '',
  className,
  style,
  controls = false,
}: {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
  controls?: boolean
}) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        className={className}
        style={style}
        autoPlay
        muted
        loop
        playsInline
        controls={controls}
        preload="metadata"
      />
    )
  }
  return <img src={src} alt={alt} loading="lazy" className={className} style={style} />
}
