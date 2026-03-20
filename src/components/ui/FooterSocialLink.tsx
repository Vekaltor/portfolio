import type {ReactNode} from 'react'

interface FooterSocialLinkProps {
    href: string
    label: ReactNode
    icon: ReactNode
    isDownload?: boolean
}

function FooterSocialLink(props: FooterSocialLinkProps) {
    const {href, label, icon, isDownload = false} = props

    return (
        <a
            href={href}
            {...(isDownload ? {download: true} : {target: '_blank', rel: 'noreferrer'})}
            className="inline-flex items-center gap-[.55rem] text-[.82rem] font-medium text-[var(--text2)] transition-colors hover:text-[var(--accent)]"
        >
            {icon}
            {label}
        </a>
    )
}

export default FooterSocialLink
