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
    <footer className="border-t py-10 mt-20" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--text)' }}>
          © {new Date().getFullYear()} Ronaldo Paulino Filho — {t.footer.made}
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:opacity-100 opacity-60"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
