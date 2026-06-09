export const ease = [0.22, 1, 0.36, 1] as const

export function fadeUp(i = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }
}
