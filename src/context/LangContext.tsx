import {createContext, type ReactNode, useState} from 'react'
import {type TranslationKey, translations} from '../data/i18n'
import type {Lang} from "../types/lang.type.ts";
import localStorageService from "../helpers/localStorage.service.ts";
import {LocalStorageKeys} from "../types/localStorageKeys.enum.ts";

export interface LangContextValue {
    lang: Lang
    t: (key: TranslationKey) => string
    toggle: () => void
}

export const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({children}: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorageService.get<Lang>(LocalStorageKeys.LANG)
        return saved === 'en' || saved === 'pl' ? saved : 'pl'
    })

    const t = (key: TranslationKey): string => translations[lang][key] ?? key

    const toggle = () => setLang(l => {
        const next: Lang = l === 'pl' ? 'en' : 'pl'
        localStorageService.save(LocalStorageKeys.LANG, next)
        return next
    })

    return (
        <LangContext.Provider value={{lang, t, toggle}}>
            {children}
        </LangContext.Provider>
    )
}
