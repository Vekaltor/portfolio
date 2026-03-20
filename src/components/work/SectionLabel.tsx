import type { ReactNode } from 'react'

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-[.85rem] text-[.65rem] font-bold tracking-[.16em] text-[var(--text3)] uppercase mb-[1.4rem]">
      {children}
      <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}

