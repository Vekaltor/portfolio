import type { Certificate } from '../../types'
import type { TranslationKey } from '../../data/i18n'
import { CERTS } from '../../data/content'

export default function CertGrid({ t }: { t: (k: TranslationKey) => string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {CERTS.map((c: Certificate, i: number) => (
        <div
          key={i}
          className="rounded-xl p-[1.6rem] flex flex-col gap-[.85rem] border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-[3px] transition-all cursor-default"
          style={{ background: 'var(--bg2)' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[1.6rem] leading-none">{c.icon}</span>
            <span className="text-[.68rem] text-[var(--text3)] font-medium">{c.year}</span>
          </div>

          <div className="inline-flex items-center gap-[.35rem] text-[.62rem] font-semibold text-[var(--accent)] uppercase tracking-[.06em]">
            <span className="w-[5px] h-[5px] rounded-full bg-[var(--accent)] flex-shrink-0" />
            {c.issuer}
          </div>

          <div className="text-[.92rem] font-bold text-[var(--text)] tracking-[-0.02em] leading-[1.3]">
            {t(c.titleKey as TranslationKey)}
          </div>
          <div className="text-[.77rem] text-[var(--text2)] leading-[1.6] flex-1">
            {t(c.subtitleKey as TranslationKey)}
          </div>

          <a
            href={c.href}
            className="inline-flex items-center gap-[.35rem] text-[.74rem] font-semibold text-[var(--accent)] hover:gap-[.55rem] transition-all self-start"
          >
            ↗ {t(c.linkKey as TranslationKey)}
          </a>
        </div>
      ))}
    </div>
  )
}

