import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
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
    group.scale.setScalar(2.9)
    group.position.set(canvas.clientWidth > 900 ? 1.6 : 0, 0.2, 0)
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
      color: 0xBFC3CA,
      roughness: 0.12,
      metalness: 0.95,
    })
    group.add(new THREE.Mesh(knotGeo, knotMat))

    // Wireframe overlay — adds surface texture on top of the metallic tube
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x6b7280,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    })
    group.add(new THREE.Mesh(knotGeo, wireMat))

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

    // Scroll: a malha recua e esmaece conforme o Hero sai da tela
    const baseScale = group.scale.x
    const basePos = group.position.clone()
    let scrollTarget = 0
    let scrollSmooth = 0
    const onScroll = () => {
      scrollTarget = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // Diagonal tilt bias — stays constant, parallax + drift animate on top
    const TILT_X = Math.PI * 0.28
    const TILT_Z = Math.PI * 0.15

    let frameId: number
    const startTime = performance.now()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const t = (performance.now() - startTime) / 1000

      const driftX = t * 0.14
      const driftY = t * 0.20

      influence.x += (mouse.y * 0.7 - influence.x) * 0.1
      influence.y += (mouse.x * 0.7 - influence.y) * 0.1

      group.rotation.x = TILT_X + driftX + influence.x
      group.rotation.y = driftY + influence.y
      group.rotation.z = TILT_Z


      scrollSmooth += (scrollTarget - scrollSmooth) * 0.1
      group.scale.setScalar(baseScale * (1 - scrollSmooth * 0.55))
      group.position.set(basePos.x, basePos.y + scrollSmooth * 0.6, basePos.z - scrollSmooth * 3)
      canvas.style.opacity = String(1 - scrollSmooth * 0.85)

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => setSize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      renderer.dispose()
      knotGeo.dispose()
      knotMat.dispose()
      wireMat.dispose()
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
