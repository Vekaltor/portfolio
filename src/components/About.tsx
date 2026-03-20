import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal.hook.ts'
import type { TranslationKey } from '../data/i18n'
import AboutTimeline from './about/AboutTimeline'

export default function About() {
  const { t } = useLang()
  const leftRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 relative z-[1]">
      <div className="max-w-[1240px] mx-auto px-16 w-full">
        <div className="grid gap-20 items-start" style={{ gridTemplateColumns: '1fr 1.8fr' }}>

          {/* LEFT */}
          <div ref={leftRef} className="rvl">
            <p className="text-[.67rem] font-bold tracking-[.18em] text-[var(--accent)] uppercase mb-[.65rem]">
              {t('about.eyebrow')}
            </p>
            <h2 className="font-display font-extrabold tracking-[-0.05em] text-[var(--text)] mb-4"
              style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)' }}>
              {t('about.title')}
            </h2>
            {(['about.p1', 'about.p2', 'about.p3'] as TranslationKey[]).map(k => (
              <p key={k} className="text-[.95rem] text-[var(--text2)] leading-[1.88] mb-[.9rem]"
                dangerouslySetInnerHTML={{ __html: t(k).replace(/<strong>/g, '<strong class="text-[var(--text)] font-semibold">') }} />
            ))}
          </div>

          {/* RIGHT — Timeline */}
          <AboutTimeline t={t} />
        </div>
      </div>
    </section>
  )
}
