import type { FooterSocialItem } from "../types/footerSocialItem.interface"
import { getCvHrefHelper } from "../helpers/getCvHref.helper.ts"

export const getFooterSocialItems = (lang: 'pl' | 'en'): FooterSocialItem[] => [
    {
        href: 'https://github.com/Vekaltor',
        label: 'GitHub',
        icon: 'github',
    },
    {
        href: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276',
        label: 'LinkedIn',
        icon: 'linkedin',
    },
    {
        href: getCvHrefHelper(lang),
        label: 'footer.nav.cv',
        icon: 'download',
        isDownload: true,
    },
]
