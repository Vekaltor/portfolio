import type {JSX} from 'react'
import type {ContactLinkItem} from "../../types/contactLinkItem.interface.ts";

type Props = {
    item: ContactLinkItem
}

export default function ContactLink({item}: Props): JSX.Element {
    return (
        <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            download={item.download || undefined}
            aria-label={item.label}
            className="cursor-none flex items-center gap-[.85rem] rounded-xl border border-[var(--border)] bg-[var(--bg2)] px-4 py-[.85rem] text-[var(--text2)] transition-all hover:translate-x-[6px] hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <span className="flex h-4 w-4 items-center justify-center flex-shrink-0">
            {item.icon}
          </span>

            <span className="text-[.84rem] font-medium">
            {item.label}
          </span>
        </a>
    )
}
