import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type TranslationKey } from '../data/i18n'
import type { Lang } from '../types'

interface LangContextValue {
  lang: Lang
  t: (key: TranslationKey) => string
  toggle: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('pl')

  const t = (key: TranslationKey): string => translations[lang][key] ?? key
  const toggle = () => setLang(l => (l === 'pl' ? 'en' : 'pl'))

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
