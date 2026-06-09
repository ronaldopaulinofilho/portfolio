import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang } from '../data/translations'

interface LanguageCtx {
  lang: Lang
  t: (typeof translations)[Lang]
  toggle: () => void
}

const LanguageContext = createContext<LanguageCtx>({} as LanguageCtx)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved) return saved
    return navigator.language.startsWith('en') ? 'en' : 'pt'
  })

  const toggle = () =>
    setLang(prev => {
      const next: Lang = prev === 'pt' ? 'en' : 'pt'
      localStorage.setItem('lang', next)
      return next
    })

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
