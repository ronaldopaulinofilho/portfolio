import { SideRail } from './components/layout/SideRail'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-white min-h-screen">
        <SideRail />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
