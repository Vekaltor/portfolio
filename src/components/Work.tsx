import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import { LANG_ICONS, FW_ICONS, TOOL_ICONS, LEARN_ICONS, PROJECTS, CERTS } from '../data/content'
import type { TechIcon, Project, Certificate } from '../types'
import type { TranslationKey } from '../data/i18n'

type TabId = 'projects' | 'stack' | 'certs'

/* ── Icon grid ── */
function IconGrid({ items, dim = false }: { items: TechIcon[]; dim?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-6 items-start">
      {items.map(item => (
        <div key={item.name} className="flex flex-col items-center gap-[.6rem] cursor-default w-[68px] group">
          <img
            src={item.src} alt={item.name} loading="lazy"
            className="w-12 h-12 object-contain transition-all duration-300 group-hover:-translate-y-[6px] group-hover:scale-[1.15] group-hover:drop-shadow-[0_6px_14px_rgba(74,222,128,.3)]"
            style={{ filter: dim ? 'grayscale(.55) brightness(.65)' : item.invert ? 'invert(1)' : 'brightness(.85) saturate(.9)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = item.invert ? 'invert(1)' : 'brightness(1) saturate(1)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = dim ? 'grayscale(.55) brightness(.65)' : item.invert ? 'invert(1)' : 'brightness(.85) saturate(.9)' }}
          />
          <span className="text-[.68rem] font-semibold text-[var(--text3)] tracking-[.02em] whitespace-nowrap text-center group-hover:text-[var(--text)] transition-colors">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[.85rem] text-[.65rem] font-bold tracking-[.16em] text-[var(--text3)] uppercase mb-[1.4rem]">
      {children}
      <span className="flex-1 h-px" style={{ background: 'var(--border)' }} />
    </div>
  )
}

/* ── Project slider ── */
function ProjectSlider({ t }: { t: (k: TranslationKey) => string }) {
  const [active, setActive] = useState(1)
  const n = PROJECTS.length

  const getState = (i: number) => {
    if (i === active) return 'active'
    if (i === (active - 1 + n) % n) return 'prev'
    return 'next'
  }

  return (
    <div>
      <div className="relative h-[480px] flex items-center justify-center overflow-visible">
        {PROJECTS.map((p: Project, i: number) => {
          const state = getState(i)
          const slideStyle: React.CSSProperties = {
            opacity: state === 'active' ? 1 : 0.18,
            transform: state === 'prev' ? 'scale(.76) translateX(-340px)' : state === 'next' ? 'scale(.76) translateX(340px)' : 'scale(1)',
            zIndex: state === 'active' ? 10 : 1,
            pointerEvents: state === 'active' ? 'all' : 'none',
            boxShadow: state === 'active' ? 'var(--proj-shadow)' : 'none',
          }
          return (
            <div key={i}
              className="absolute w-[420px] rounded-xl overflow-hidden transition-all duration-[650ms] will-change-transform"
              style={slideStyle}>
              <div className="rounded-xl overflow-hidden" style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
                <div className="h-[190px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: p.bg, borderBottom: '1px solid var(--border)' }}>
                  <span className="text-[3.2rem] relative z-[1]">{p.emoji}</span>
                  <span className="absolute bottom-3 right-4 font-display font-extrabold text-[var(--text)] opacity-[.06] select-none leading-none"
                    style={{ fontSize: '4.5rem' }}>
                    0{i + 1}
                  </span>
                </div>
                <div className="px-[1.8rem] py-[1.6rem]">
                  <div className="flex items-start justify-between mb-[.9rem]">
                    <span className="text-[.62rem] font-semibold text-[var(--text3)] uppercase tracking-[.06em]">
                      {t(p.badgeKey as TranslationKey)}
                    </span>
                    <div className="flex gap-3">
                      {p.live && <a href={p.live} className="text-[.75rem] font-medium text-[var(--text3)] hover:text-[var(--accent)] transition-colors">↗ Live</a>}
                      {p.github && <a href={p.github} className="text-[.75rem] font-medium text-[var(--text3)] hover:text-[var(--accent)] transition-colors">GitHub</a>}
                    </div>
                  </div>
                  <div className="text-[1.15rem] font-bold tracking-[-0.03em] mb-[.55rem] text-[var(--text)] leading-[1.2]">
                    {t(p.titleKey as TranslationKey)}
                  </div>
                  <p className="text-[.83rem] text-[var(--text2)] leading-[1.72] mb-[1.1rem]">
                    {t(p.descKey as TranslationKey)}
                  </p>
                  <div className="flex flex-wrap gap-[.4rem]">
                    {p.chips.map(c => (
                      <span key={c} className="text-[.62rem] font-medium px-[.6rem] py-[.22rem] rounded-[5px] text-[var(--text3)]"
                        style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-center gap-5 mt-7">
        <SliderBtn onClick={() => setActive((active - 1 + n) % n)} direction="prev" />
        <div className="flex gap-2">
          {PROJECTS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="cursor-none transition-all"
              style={{
                width: i === active ? '22px' : '6px', height: '6px',
                borderRadius: i === active ? '3px' : '50%',
                background: i === active ? 'var(--accent)' : 'var(--border2)',
              }} />
          ))}
        </div>
        <SliderBtn onClick={() => setActive((active + 1) % n)} direction="next" />
      </div>
    </div>
  )
}

function SliderBtn({ onClick, direction }: { onClick: () => void; direction: 'prev' | 'next' }) {
  return (
    <button onClick={onClick}
      className="w-11 h-11 rounded-full border border-[var(--border2)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)] transition-all cursor-none">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'prev' ? <polyline points="15 18 9 12 15 6"/> : <polyline points="9 18 15 12 9 6"/>}
      </svg>
    </button>
  )
}

/* ── Cert grid ── */
function CertGrid({ t }: { t: (k: TranslationKey) => string }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {CERTS.map((c: Certificate, i: number) => (
        <div key={i}
          className="rounded-xl p-[1.6rem] flex flex-col gap-[.85rem] border border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-[3px] transition-all cursor-default"
          style={{ background: 'var(--bg2)' }}>
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
          <a href={c.href}
            className="inline-flex items-center gap-[.35rem] text-[.74rem] font-semibold text-[var(--accent)] hover:gap-[.55rem] transition-all self-start">
            ↗ {t(c.linkKey as TranslationKey)}
          </a>
        </div>
      ))}
    </div>
  )
}

/* ── Main component ── */
export default function Work() {
  const { t } = useLang()
  const [tab, setTab] = useState<TabId>('projects')
  const headRef = useReveal<HTMLDivElement>()

  const tabs: { id: TabId; labelKey: TranslationKey }[] = [
    { id: 'projects', labelKey: 'tab.proj' },
    { id: 'stack',    labelKey: 'tab.stack' },
    { id: 'certs',    labelKey: 'tab.certs' },
  ]

  return (
    <section id="work" className="min-h-screen flex flex-col justify-center py-24 relative z-[1]">
      <div className="max-w-[1240px] mx-auto px-16 w-full">
        <div ref={headRef} className="rv mb-10">
          <p className="text-[.67rem] font-bold tracking-[.18em] text-[var(--accent)] uppercase mb-[.65rem]">
            {t('work.eyebrow')}
          </p>
          <h2 className="font-display font-extrabold tracking-[-0.05em] text-[var(--text)]"
            style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)' }}>
            {t('work.title')}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-14 p-[.32rem] w-fit rounded-xl"
          style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}>
          {tabs.map(tb => (
            <button key={tb.id} onClick={() => setTab(tb.id)}
              className={`text-[.82rem] font-semibold px-[1.35rem] py-[.52rem] rounded-[9px] transition-all cursor-none ${
                tab === tb.id
                  ? 'bg-[var(--accent)] text-[#050a05]'
                  : 'text-[var(--text2)] hover:text-[var(--text)] hover:bg-[var(--bg3)]'
              }`}>
              {t(tb.labelKey)}
            </button>
          ))}
        </div>

        {tab === 'projects' && <ProjectSlider t={t} />}

        {tab === 'stack' && (
          <div>
            {([
              { key: 'stack.cat.lang', icons: LANG_ICONS },
              { key: 'stack.cat.fw',   icons: FW_ICONS },
              { key: 'stack.cat.tools',icons: TOOL_ICONS },
            ] as { key: TranslationKey; icons: TechIcon[] }[]).map(({ key, icons }) => (
              <div key={key} className="mb-10">
                <SectionLabel>{t(key)}</SectionLabel>
                <IconGrid items={icons} />
              </div>
            ))}
            <div className="mt-10 pt-8" style={{ borderTop: '1px solid var(--border2)' }}>
              <SectionLabel>{t('stack.cat.learn')}</SectionLabel>
              <IconGrid items={LEARN_ICONS} dim />
              <p className="mt-8 text-center text-[.9rem] text-[var(--text3)] italic leading-[1.7]"
                dangerouslySetInnerHTML={{ __html: t('stack.motivational') }} />
            </div>
          </div>
        )}

        {tab === 'certs' && <CertGrid t={t} />}
      </div>
    </section>
  )
}
