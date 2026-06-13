import type {Lang} from "../types/lang.type.ts";
import cvPl from '@assets/cv/cv_pl.pdf'
import cvEn from '@assets/cv/cv_en.pdf'

const CV_MAP: Record<Lang, string> = {
    pl: cvPl,
    en: cvEn,
}

export function getCvHrefHelper(lang: Lang): string {
    return CV_MAP[lang] ?? CV_MAP.en
}
