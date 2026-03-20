import { useEffect, useRef } from 'react'
import { TIMELINE_ITEMS } from '../../data/content'
import type { TranslationKey } from '../../data/i18n'
import type { AboutTimelineProps } from './types'

export default function AboutTimeline({ t }: AboutTimelineProps) {
  const tlWrapRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const ctxRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const update = () => {
      const wrap = tlWrapRef.current
      const fill = fillRef.current
      if (!wrap || !fill) return

      const rect = wrap.getBoundingClientRect()
      const vpH = window.innerHeight
      const start = rect.top - vpH * 0.7
      const range = rect.height + vpH * 0.4
      const progress = Math.max(0, Math.min(1, -start / range))

      fill.style.height = `${progress * 100}%`

      dotRefs.current.forEach((dot, i) => {
        const content = ctxRefs.current[i]
        if (!dot || !content) return
        if (progress >= i / TIMELINE_ITEMS.length + 0.05) {
          dot.classList.add('lit')
          content.classList.remove('tl-content-hidden')
          content.classList.add('tl-content-shown')
        }
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    setTimeout(update, 300)
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div ref={tlWrapRef} className="relative mt-[2.8rem]">
      {/* Track line */}
      <div
        className="absolute left-[8px] top-[8px] bottom-0 w-[2px] rounded-[1px]"
        style={{ background: 'var(--border)' }}
      >
        <div
          ref={fillRef}
          className="tl-fill absolute top-0 left-0 w-full h-0 rounded-[1px]"
          style={{ background: 'linear-gradient(to bottom, var(--accent), var(--accentd))' }}
        />
      </div>

      {TIMELINE_ITEMS.map((item, i) => {
        const dateLabel = item.date.includes('tl.now') ? `11/2023 — ${t('tl.now')}` : item.date

        return (
          <div key={item.id} className="flex gap-[1.6rem] pb-[2.8rem] relative">
            <div
              ref={(el) => {
                dotRefs.current[i] = el
              }}
              className="tl-dot w-[18px] h-[18px] rounded-full flex-shrink-0 mt-[2px] relative z-[1]"
              style={{
                background: item.hollow ? 'var(--bg2)' : 'var(--border2)',
                border: `2px solid ${item.hollow ? 'var(--border2)' : 'var(--border2)'}`,
              }}
            />

            <div
              ref={(el) => {
                ctxRefs.current[i] = el
              }}
              className="tl-content-hidden"
            >
              <div className="text-[.68rem] font-semibold text-[var(--accent)] tracking-[.06em] mb-[.3rem]">
                {dateLabel}
              </div>
              <div className="text-[1.05rem] font-bold tracking-[-0.02em] text-[var(--text)]">
                {item.company}
              </div>
              <div className="text-[.76rem] text-[var(--text3)] mt-[.2rem]">
                {t(item.roleKey as TranslationKey)}
              </div>
              <p className="text-[.85rem] text-[var(--text2)] leading-[1.78] mt-[.85rem]">
                {t(item.descKey as TranslationKey)}
              </p>

              <div className="flex flex-wrap gap-[.4rem] mt-[.9rem]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[.64rem] font-medium px-[.62rem] py-[.2rem] rounded-[5px] text-[var(--accent)]"
                    style={{
                      background: 'var(--accentbg)',
                      border: '1px solid rgba(74,222,128,.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

