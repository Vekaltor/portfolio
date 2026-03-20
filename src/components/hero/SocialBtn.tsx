import type { SocialBtnProps } from './types'

export default function SocialBtn({ href, title, children }: SocialBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className="w-10 h-10 rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text3)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 hover:bg-[var(--accentbg)] hover:shadow-[0_8px_20px_rgba(74,222,128,.15)] transition-all"
    >
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        {children}
      </svg>
    </a>
  )
}

