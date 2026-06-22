import { Mail } from 'lucide-react'
import { IconBehance, IconLinkedin } from '../ui/BrandIcons'
import { contact } from '../../data/contact'
import { useLang } from '../../contexts/LanguageContext'

export function Footer() {
  const { t } = useLang()

  const socials = [
    { icon: <IconBehance size={16} />, href: contact.behance.url, label: 'Behance' },
    { icon: <IconLinkedin size={16} />, href: contact.linkedin.url, label: 'LinkedIn' },
    { icon: <Mail size={16} />, href: `mailto:${contact.email}`, label: 'Email' },
  ]

  return (
    <footer className="border-t border-neutral-100 py-8 px-8 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-neutral-500">{t.footer.available}</span>
        </div>

        <p className="font-mono text-xs text-neutral-300">
          © {new Date().getFullYear()} Ronaldo Paulino Filho
        </p>

        <div className="flex items-center gap-2">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-100 text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
