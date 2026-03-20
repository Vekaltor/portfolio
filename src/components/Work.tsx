import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal.hook.ts'
import { LANG_ICONS, FW_ICONS, TOOL_ICONS, LEARN_ICONS } from '../constants/content.ts'
import type { TechIcon } from '../types'
import type { TranslationKey } from '../data/i18n'
import type { TabId } from './work/types'
import IconGrid from './work/IconGrid'
import SectionLabel from './work/SectionLabel'
import ProjectSlider from './work/ProjectSlider'
import CertGrid from './work/CertGrid'

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
