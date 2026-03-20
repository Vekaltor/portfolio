import type { StatCardProps } from './types'

export default function StatCard({ num, label, cls, sub }: StatCardProps) {
  return (
    <div
      className={`${cls} flex-1 text-center bg-[var(--bg2)] border border-[var(--border)] rounded-xl py-[.9rem] px-2 hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all`}
    >
      <div className="font-display text-[1.75rem] font-extrabold text-[var(--accent)] leading-none">
        {num}
      </div>
      <div className="text-[.58rem] text-[var(--text3)] mt-[.3rem] font-medium uppercase tracking-[.07em]">
        {label}
      </div>
      {sub && (
        <span className="block text-[.54rem] font-bold text-[var(--accent)] tracking-[.05em] uppercase mt-[.2rem] opacity-80">
          {sub}
        </span>
      )}
    </div>
  )
}

