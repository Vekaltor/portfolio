import type {Lang} from "../types/lang.type.ts";


const CV_MAP: Record<Lang, string> = {
    pl: '/Kamil_Wojcik_Frontend_Developer_CV_PL.pdf',
    en: '/Kamil_Wojcik_Frontend_Developer_CV_EN.pdf',
}

export function getCvHrefHelper(lang: Lang): string {
    return CV_MAP[lang] ?? CV_MAP.en
}
