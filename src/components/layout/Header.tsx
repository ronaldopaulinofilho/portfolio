import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { useLang } from '../../contexts/LanguageContext'
import { cn } from '../../lib/utils'

export function Header() {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, t, toggle: toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.caseStudy, href: '#case-study' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-3 backdrop-blur-xl border-b' : 'py-5'
      )}
      style={{
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--bg) 85%, transparent)'
          : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#hero"
          className="font-semibold text-base sm:text-lg tracking-tight transition-opacity hover:opacity-80"
          style={{ color: 'var(--text-heading)' }}
        >
          Ronaldo Paulino Filho<span style={{ color: 'var(--accent-light)' }}></span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm transition-opacity hover:opacity-100 opacity-70"
                style={{ color: 'var(--text-heading)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="h-9 px-3 rounded-lg flex items-center justify-center border text-xs font-semibold tracking-widest transition-colors"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text)',
              backgroundColor: 'var(--bg-card)',
            }}
            aria-label="Toggle language"
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>

          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors border"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text)',
              backgroundColor: 'var(--bg-card)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setMenuOpen(o => !o)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border transition-colors"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text)',
              backgroundColor: 'var(--bg-card)',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-5 pt-3 border-t mt-2"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-2.5 px-2 text-sm rounded-lg transition-colors hover:opacity-80"
                  style={{ color: 'var(--text-heading)' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
