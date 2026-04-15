import {createContext, type ReactNode, useEffect, useState} from 'react'
import {type TranslationKey, translations} from '../data/i18n'
import type {Lang} from "../types/lang.type.ts";
import localStorageService from "../helpers/localStorage.service.ts";
import {LocalStorageKeys} from "../types/localStorageKeys.enum.ts";
import {isLang, readLangFromUrl, removeLangFromUrl} from "../helpers/lang.helper.ts";

export interface LangContextValue {
    lang: Lang
    t: (key: TranslationKey) => string
    toggle: () => void
}

export const LangContext = createContext<LangContextValue | null>(null)

const getInitialLang = (): Lang => {
    const urlLang = readLangFromUrl()
    if (urlLang) return urlLang

    const stored = localStorageService.get<Lang>(LocalStorageKeys.LANG)
    if (isLang(stored)) return stored

    return 'pl'
}

export function LangProvider({children}: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(getInitialLang)

    const t = (key: TranslationKey): string => translations[lang][key] ?? key

    const toggle = () => setLang(l => {
        const next: Lang = l === 'pl' ? 'en' : 'pl'
        localStorageService.save(LocalStorageKeys.LANG, next)
        return next
    })

    useEffect(() => {
        removeLangFromUrl()
    }, [])

    useEffect(() => {
        localStorageService.save(LocalStorageKeys.LANG, lang)
        document.documentElement.lang = lang
    }, [lang])

    return (
        <LangContext.Provider value={{lang, t, toggle}}>
            {children}
        </LangContext.Provider>
    )
}
