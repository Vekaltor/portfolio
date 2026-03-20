import { useState } from 'react'
import type { Project } from '../../types'
import type { TranslationKey } from '../../data/i18n'
import { PROJECTS } from '../../data/content'
import SliderBtn from './SliderBtn'

export default function ProjectSlider({ t }: { t: (k: TranslationKey) => string }) {
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
            transform:
              state === 'prev'
                ? 'scale(.76) translateX(-340px)'
                : state === 'next'
                  ? 'scale(.76) translateX(340px)'
                  : 'scale(1)',
            zIndex: state === 'active' ? 10 : 1,
            pointerEvents: state === 'active' ? 'all' : 'none',
            boxShadow: state === 'active' ? 'var(--proj-shadow)' : 'none',
          }

          return (
            <div
              key={i}
              className="absolute w-[420px] rounded-xl overflow-hidden transition-all duration-[650ms] will-change-transform"
              style={slideStyle}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{ background: 'var(--bg2)', border: '1px solid var(--border)' }}
              >
                <div
                  className="h-[190px] flex items-center justify-center relative overflow-hidden"
                  style={{ background: p.bg, borderBottom: '1px solid var(--border)' }}
                >
                  <span className="text-[3.2rem] relative z-[1]">{p.emoji}</span>
                  <span
                    className="absolute bottom-3 right-4 font-display font-extrabold text-[var(--text)] opacity-[.06] select-none leading-none"
                    style={{ fontSize: '4.5rem' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div className="px-[1.8rem] py-[1.6rem]">
                  <div className="flex items-start justify-between mb-[.9rem]">
                    <span className="text-[.62rem] font-semibold text-[var(--text3)] uppercase tracking-[.06em]">
                      {t(p.badgeKey as TranslationKey)}
                    </span>
                    <div className="flex gap-3">
                      {p.live && (
                        <a
                          href={p.live}
                          className="text-[.75rem] font-medium text-[var(--text3)] hover:text-[var(--accent)] transition-colors"
                        >
                          ↗ Live
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          className="text-[.75rem] font-medium text-[var(--text3)] hover:text-[var(--accent)] transition-colors"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="text-[1.15rem] font-bold tracking-[-0.03em] mb-[.55rem] text-[var(--text)] leading-[1.2]">
                    {t(p.titleKey as TranslationKey)}
                  </div>

                  <p className="text-[.83rem] text-[var(--text2)] leading-[1.72] mb-[1.1rem]">
                    {t(p.descKey as TranslationKey)}
                  </p>

                  <div className="flex flex-wrap gap-[.4rem]">
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="text-[.62rem] font-medium px-[.6rem] py-[.22rem] rounded-[5px] text-[var(--text3)]"
                        style={{ background: 'var(--bg3)', border: '1px solid var(--border)' }}
                      >
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
            <button
              key={i}
              onClick={() => setActive(i)}
              className="cursor-none transition-all"
              style={{
                width: i === active ? '22px' : '6px',
                height: '6px',
                borderRadius: i === active ? '3px' : '50%',
                background: i === active ? 'var(--accent)' : 'var(--border2)',
              }}
            />
          ))}
        </div>
        <SliderBtn onClick={() => setActive((active + 1) % n)} direction="next" />
      </div>
    </div>
  )
}

