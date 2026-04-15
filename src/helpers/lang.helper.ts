import type { Lang } from '../types/lang.type'

export const isLang = (value: unknown): value is Lang =>
    value === 'pl' || value === 'en'

export const readLangFromUrl = (): Lang | null => {
    const params = new URLSearchParams(window.location.search)
    const lang = params.get('lang')
    return isLang(lang) ? lang : null
}

export const removeLangFromUrl = (): void => {
    const url = new URL(window.location.href)
    url.searchParams.delete('lang')
    window.history.replaceState({}, '', url.pathname + url.search + url.hash)
}
