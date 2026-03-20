import type {ReactNode} from "react";

interface SocialBtnProps {
    href: string
    title: string
    children: ReactNode
    target?: string
}

export default function SocialBtn(props: SocialBtnProps) {
    const {href, title, children, target} = props;
    return (
        <a
            href={href}
            target={target ?? "_blank"}
            rel="noreferrer"
            title={title}
            className="w-10 h-10 rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text3)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 hover:bg-[var(--accentbg)] hover:shadow-[0_8px_20px_rgba(74,222,128,.15)] transition-all"
        >
            {children}
        </a>
    )
}

