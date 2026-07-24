import { useState, useEffect } from 'react'
import { Home, Briefcase, User, Mail, Layers, MessageSquareQuote } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import { cn } from '../../lib/utils'

const navItems = [
  { icon: Home, href: '#hero', labelKey: 'home' as const },
  { icon: User, href: '#about', labelKey: 'about' as const },
  { icon: Layers, href: '#services', labelKey: 'services' as const },
  { icon: Briefcase, href: '#projects', labelKey: 'projects' as const },
  { icon: MessageSquareQuote, href: '#testimonials', labelKey: 'testimonials' as const },
  { icon: Mail, href: '#contact', labelKey: 'contact' as const },
]

function NavButton({
  icon: Icon,
  href,
  label,
  active,
}: {
  icon: typeof Home
  href: string
  label: string
  active: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative">
      <a
        href={href}
        aria-label={label}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-200',
          active
            ? 'bg-neutral-900 text-white'
            : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100'
        )}
      >
        <Icon size={18} />
      </a>

      {hovered && (
        <div className="hidden md:block absolute left-full ml-3 top-1/2 -translate-y-1/2 pointer-events-none z-50">
          <div className="bg-neutral-900 text-white text-xs font-mono px-2.5 py-1 rounded-lg whitespace-nowrap">
            {label}
          </div>
        </div>
      )}
    </div>
  )
}

export function SideRail() {
  const { t, lang, toggle: toggleLang } = useLang()
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sectionIds = navItems.map(item => item.href.replace('#', ''))

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed z-50 flex items-center gap-1 p-2 bg-white rounded-2xl shadow-xl border border-neutral-100 bottom-3 left-1/2 -translate-x-1/2 flex-row md:bottom-auto md:left-4 md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:flex-col">
      {navItems.map(item => (
        <NavButton
          key={item.href}
          icon={item.icon}
          href={item.href}
          label={t.nav[item.labelKey]}
          active={activeSection === item.href.replace('#', '')}
        />
      ))}

      <div className="h-6 w-px mx-1 md:w-6 md:h-px md:my-1 md:mx-0 bg-neutral-100" />

      <button
        onClick={toggleLang}
        className="w-10 h-7 flex items-center justify-center rounded-lg text-xs font-mono font-medium text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-all duration-200"
        aria-label="Toggle language"
      >
        {lang === 'pt' ? 'EN' : 'PT'}
      </button>
    </nav>
  )
}
