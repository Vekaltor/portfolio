import type { ContactLinkItem } from './types'

export default function ContactLink({ item }: { item: ContactLinkItem }) {
  return (
    <a
      href={item.href}
      target={item.external ? '_blank' : undefined}
      rel={item.external ? 'noreferrer' : undefined}
      download={item.download || undefined}
      className="flex items-center gap-[.85rem] px-4 py-[.85rem] rounded-xl border border-[var(--border)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:translate-x-[6px] transition-all"
      style={{ background: 'var(--bg2)' }}
    >
      {item.icon}
      <span className="text-[.84rem] font-medium">{item.label}</span>
    </a>
  )
}

