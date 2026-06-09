import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { LanguageProvider } from './contexts/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
