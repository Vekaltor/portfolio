import DownloadIcon from '@assets/icons/download.svg?react'
import GithubIcon from '@assets/icons/github.svg?react'
import LinkedinIcon from '@assets/icons/linkedin.svg?react'
import FooterSocialLink from './FooterSocialLink'
import type {FooterSocialItem} from "../../types/footerSocialItem.interface.ts";
import { getFooterSocialItems } from "../../constants/socialItems"
import type {JSX} from "react";
import {useLang} from "../../hooks/useLang.hook.ts";


function FooterSocials() {
    const {t, lang} = useLang()

    const getIcon = (icon: FooterSocialItem['icon']): JSX.Element => {
        if (icon === 'github') {
            return <GithubIcon className="h-[15px] w-[15px] fill-current"/>
        }

        if (icon === 'linkedin') {
            return <LinkedinIcon className="h-[15px] w-[15px] fill-current"/>
        }

        return <DownloadIcon className="h-[15px] w-[15px] stroke-current"/>
    }

    const items = getFooterSocialItems(lang)

    return (
        <div>
            <p className="mb-[.9rem] text-[.65rem] font-bold uppercase tracking-[.14em] text-[var(--text3)]">
                {t('f3.socials')}
            </p>

            <div className="flex flex-col gap-[.65rem]">
                {items.map((item) => {
                    return (
                        <FooterSocialLink
                            key={`${item.icon}-${item.href}`}
                            href={item.href}
                            label={item.label === 'footer.nav.cv' ? t('footer.nav.cv') : item.label}
                            icon={getIcon(item.icon)}
                            isDownload={item.isDownload}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default FooterSocials
