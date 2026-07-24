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
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  )
}
