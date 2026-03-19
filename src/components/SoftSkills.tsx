import { useLang } from '../context/LangContext'

export default function SoftSkills() {
  const { t } = useLang()
  const words = t('ss').split(' · ')
  const repeated = [...words, ...words, ...words, ...words]

  return (
    <div
      className="overflow-hidden relative z-[1]"
      style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="py-[1.2rem] overflow-hidden">
        <div className="ss-track">
          {repeated.map((word, i) => (
            <span key={i}
              className="inline-flex items-center gap-4 px-8 whitespace-nowrap font-display font-bold text-[1.55rem] text-[var(--text3)] tracking-[-0.025em] hover:text-[var(--text2)] transition-colors cursor-default">
              {word}
              <span className="text-[var(--accent)] text-[.85rem]"> ·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
