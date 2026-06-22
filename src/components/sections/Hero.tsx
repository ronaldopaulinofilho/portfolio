import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ArrowDown } from 'lucide-react'
import { IconBehance, IconLinkedin } from '../ui/BrandIcons'
import { contact } from '../../data/contact'
import { useLang } from '../../contexts/LanguageContext'

function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0xffffff, 1)

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 5)

    const setSize = () => {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    setSize()

    // Torus knot
    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.38, 160, 20)
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x171717,
      roughness: 0.4,
      metalness: 0.3,
    })
    const torusKnot = new THREE.Mesh(knotGeo, knotMat)
    scene.add(torusKnot)

    // Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xe5e5e5,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const wireKnot = new THREE.Mesh(knotGeo, wireMat)
    scene.add(wireKnot)

    // Golden spark particles
    const particleCount = 3000
    const positions = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      const r = 3 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      sizes[i] = Math.random() * 2 + 0.5
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    const particleMat = new THREE.PointsMaterial({
      color: 0xd97706,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xffecd2, 2)
    keyLight.position.set(3, 4, 3)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xfff0e0, 0.8)
    fillLight.position.set(-3, -2, 2)
    scene.add(fillLight)

    let frameId: number
    const startTime = performance.now()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = (performance.now() - startTime) / 1000

      torusKnot.rotation.x = t * 0.2
      torusKnot.rotation.y = t * 0.3
      wireKnot.rotation.x = t * 0.2
      wireKnot.rotation.y = t * 0.3
      particles.rotation.y = t * 0.04
      particles.rotation.x = t * 0.02

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => setSize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      knotGeo.dispose()
      knotMat.dispose()
      wireMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}

export function Hero() {
  const { t } = useLang()

  const socials = [
    { icon: <IconBehance size={16} />, href: contact.behance.url, label: 'Behance' },
    { icon: <IconLinkedin size={16} />, href: contact.linkedin.url, label: 'LinkedIn' },
  ]

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white">
      <HeroCanvas />

      {/* Top navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 sm:px-12 py-7">
        <span className="font-mono text-sm text-neutral-900 font-semibold tracking-tight">
          Ronaldo Paulino Filho
        </span>

        <div className="flex items-center gap-4">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-200 bg-white/80 backdrop-blur-sm text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200"
            >
              {icon}
            </a>
          ))}

          <a
            href="#projects"
            className="h-9 px-4 flex items-center rounded-xl bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors duration-200"
          >
            {t.hero.cta}
          </a>
        </div>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 sm:px-12 pb-14 sm:pb-16">
        <p className="font-mono text-xs text-neutral-400 mb-3 tracking-wider">
          {t.hero.tagline}
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-neutral-900">
          {t.hero.heading[0]}
          <br />
          <span className="text-neutral-400">{t.hero.heading[1]}</span>
        </h1>

        <div className="flex items-center gap-3 mt-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs text-neutral-400">{t.hero.badge}</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-14 right-8 sm:right-12 z-10 flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
