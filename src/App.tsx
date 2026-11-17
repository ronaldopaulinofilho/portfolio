import { useEffect } from 'react'
import { SideRail } from './components/layout/SideRail'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { SectionThread } from './components/ui/SectionThread'
import { DepthSection } from './components/ui/DepthSection'

/**
 * Links como /#case-ds chegam antes de o React desenhar a página, e o navegador
 * não encontra a âncora. Depois de montar, rolamos até ela, com uma folga no topo.
 */
function useScrollToHashOnLoad() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id) return
    const scroll = () => {
      const el = document.getElementById(id)
      if (!el) return
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 24 })
    }
    // A segunda passada corrige o deslocamento das animações de entrada.
    const timers = [400, 1400].map(ms => window.setTimeout(scroll, ms))
    return () => timers.forEach(t => window.clearTimeout(t))
  }, [])
}

export default function App() {
  useScrollToHashOnLoad()
  return (
    <div className="bg-white min-h-screen">
      <SideRail />
      <main>
        <DepthSection><Hero /></DepthSection>
        <DepthSection><About /></DepthSection>
        <SectionThread />
        <DepthSection><Services /></DepthSection>
        <SectionThread />
        <DepthSection><Projects /></DepthSection>
        <SectionThread />
        <DepthSection><Testimonials /></DepthSection>
        <SectionThread />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
