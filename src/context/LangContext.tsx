import {createContext, type ReactNode, useContext, useState} from 'react'
import {type TranslationKey, translations} from '../data/i18n'
import type {Lang} from "../types/lang.type.ts";

interface LangContextValue {
    lang: Lang
    t: (key: TranslationKey) => string
    toggle: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({children}: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>('pl')

    const t = (key: TranslationKey): string => translations[lang][key] ?? key
    const toggle = () => setLang(l => (l === 'pl' ? 'en' : 'pl'))

    return (
        <LangContext.Provider value={{lang, t, toggle}}>
            {children}
        </LangContext.Provider>
    )
}

export function useLang(): LangContextValue {
    const ctx = useContext(LangContext)
    if (!ctx) throw new Error('useLang must be used inside LangProvider')
    return ctx
}
