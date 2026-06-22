import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'
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
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    const scene = new THREE.Scene()

    // Environment map — gives metallic materials something to reflect
    const pmrem = new THREE.PMREMGenerator(renderer)
    pmrem.compileEquirectangularShader()
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    pmrem.dispose()

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

    // Abstract composition: smooth sweep curve + straight line segments
    const group = new THREE.Group()
    group.scale.setScalar(2.3)
    scene.add(group)

    // Abstract smoke: large wavy displaced surface with multi-frequency undulations
    const uSeg = 90, vSeg = 70
    const knotGeo = new THREE.BufferGeometry()
    const verts: number[] = [], uvArr: number[] = [], idxArr: number[] = []
    for (let j = 0; j <= vSeg; j++) {
      for (let i = 0; i <= uSeg; i++) {
        const u = i / uSeg, v = j / vSeg
        const x = (u - 0.5) * 3.6
        const z = (v - 0.5) * 2.8
        const y = Math.sin(x * 1.1 + z * 0.7) * 0.55
                + Math.sin(x * 2.4 - z * 1.5) * 0.28
                + Math.cos(x * 0.7 + z * 2.2) * 0.22
                + Math.sin(x * 3.6 - z * 0.9) * 0.11
        verts.push(x, y, z)
        uvArr.push(u, v)
      }
    }
    for (let j = 0; j < vSeg; j++) {
      for (let i = 0; i < uSeg; i++) {
        const a = j * (uSeg + 1) + i
        const b = a + 1, c = (j + 1) * (uSeg + 1) + i, d = c + 1
        idxArr.push(a, b, d, a, d, c)
      }
    }
    knotGeo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    knotGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvArr, 2))
    knotGeo.setIndex(idxArr)
    knotGeo.computeVertexNormals()
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0xEEEEEE,
      roughness: 0.04,
      metalness: 0.96,
    })
    group.add(new THREE.Mesh(knotGeo, knotMat))

    // Wireframe overlay — adds surface texture on top of the metallic tube
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xc0c0c0,
      wireframe: true,
      transparent: true,
      opacity: 0.62,
    })
    group.add(new THREE.Mesh(knotGeo, wireMat))

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

    // Lights — metallic chrome setup
    const ambient = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xfff8f0, 3.0)
    keyLight.position.set(4, 5, 3)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xe0ecff, 1.6)
    fillLight.position.set(-4, -1, 2)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xc0d8ff, 1.8)
    rimLight.position.set(-1, 3, -4)
    scene.add(rimLight)

    // Mouse parallax
    const mouse = { x: 0, y: 0 }
    const influence = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', onMouseMove)

    // Diagonal tilt bias — stays constant, parallax + drift animate on top
    const TILT_X = Math.PI * 0.28
    const TILT_Z = Math.PI * 0.15

    let frameId: number
    const startTime = performance.now()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = (performance.now() - startTime) / 1000

      const driftX = t * 0.022
      const driftY = t * 0.032

      influence.x += (mouse.y * 0.7 - influence.x) * 0.07
      influence.y += (mouse.x * 0.7 - influence.y) * 0.07

      group.rotation.x = TILT_X + driftX + influence.x
      group.rotation.y = driftY + influence.y
      group.rotation.z = TILT_Z

      particles.rotation.y = driftY * 0.4 + mouse.x * 0.1
      particles.rotation.x = driftX * 0.4 + mouse.y * 0.05

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => setSize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
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

const NODES: [number, number][] = [[28, 148], [72, 72], [138, 108], [186, 28]]
const PATH = `M${NODES.map(([x, y]) => `${x} ${y}`).join(' L')}`
const PATH_LEN = 340

function FigmaCursor() {
  const [on, setOn] = useState(false)

  return (
    <span
      className="relative inline-block cursor-default select-none"
      style={{ width: 16, height: 22, verticalAlign: 'middle', marginLeft: 10, position: 'relative', top: -20 }}
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
    >
      {/* Figma arrow cursor — accurate shape with drop shadow */}
      <svg width="16" height="22" viewBox="0 0 12 19" fill="none" aria-hidden="true"
        style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.35))' }}>
        <path
          d="M0.5 0.5 L0.5 15.5 L4.1 12 L7 17.8 L9.2 16.9 L6.3 11.1 L11.5 11.1 Z"
          fill="white"
          stroke="#111111"
          strokeWidth="1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Vector drawing lines — appear on hover, extend upward into the canvas */}
      <svg
        aria-hidden="true"
        viewBox="0 0 220 170"
        width="220"
        height="170"
        fill="none"
        style={{
          position: 'absolute',
          bottom: 'calc(100% + 6px)',
          left: -40,
          pointerEvents: 'none',
          opacity: on ? 1 : 0,
          transition: 'opacity 0.15s ease',
          zIndex: 20,
        }}
      >
        {/* Blue path */}
        <path
          d={PATH}
          stroke="#18A0FB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: PATH_LEN,
            strokeDashoffset: on ? 0 : PATH_LEN,
            transition: on ? 'stroke-dashoffset 0.45s ease-out' : 'none',
          }}
        />

        {/* Dashed preview from last node */}
        <line
          x1="186" y1="28" x2="210" y2="6"
          stroke="#18A0FB"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          strokeLinecap="round"
          style={{
            opacity: on ? 0.55 : 0,
            transition: on ? 'opacity 0.2s 0.4s' : 'none',
          }}
        />

        {/* Anchor nodes (hollow) */}
        {NODES.map(([x, y], i) => (
          <rect
            key={i}
            x={x - 4} y={y - 4}
            width={8} height={8}
            fill="white"
            stroke="#18A0FB"
            strokeWidth="1.5"
            style={{
              opacity: on ? 1 : 0,
              transition: on ? `opacity 0.15s ${i * 0.07}s` : 'none',
            }}
          />
        ))}

        {/* Active node at preview end (filled) */}
        <rect
          x={206} y={2}
          width={8} height={8}
          fill="#18A0FB"
          style={{
            opacity: on ? 1 : 0,
            transition: on ? 'opacity 0.15s 0.42s' : 'none',
          }}
        />
      </svg>
    </span>
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
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900" style={{ lineHeight: '0.88' }}>
          {t.hero.heading[0]}<FigmaCursor />
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
