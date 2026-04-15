import {useEffect, useRef} from 'react'
import {TIMELINE_ITEMS} from '../../constants/content.ts'
import type {TranslationKey} from '../../data/i18n'

import {useLang} from "../../hooks/useLang.hook.ts";

export default function AboutTimeline() {
    const {t} = useLang()

    const timelineRef = useRef<HTMLDivElement>(null)
    const fillRef = useRef<HTMLDivElement>(null)
    const dotRefs = useRef<(HTMLDivElement | null)[]>([])
    const contentRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const updateTimeline = () => {
            const timeline = timelineRef.current
            const fill = fillRef.current

            if (!timeline || !fill) return

            const rect = timeline.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            const startOffset = rect.top - viewportHeight * 0.7
            const totalRange = rect.height + viewportHeight * 0.4
            const progress = Math.max(0, Math.min(1, -startOffset / totalRange))

            fill.style.height = `${progress * 100}%`

            TIMELINE_ITEMS.forEach((_, index) => {
                const dot = dotRefs.current[index]
                const content = contentRefs.current[index]

                if (!dot || !content) return

                const itemTrigger = index / TIMELINE_ITEMS.length + 0.05
                const isActive = progress >= itemTrigger

                if (isActive) {
                    dot.classList.add('lit')
                    content.classList.remove('tl-content-hidden')
                    content.classList.add('tl-content-shown')
                }
            })
        }

        window.addEventListener('scroll', updateTimeline, {passive: true})

        const timeout = window.setTimeout(updateTimeline, 300)

        return () => {
            window.removeEventListener('scroll', updateTimeline)
            window.clearTimeout(timeout)
        }
    }, [])

    const getDateLabel = (date: string) => {
        if (date.endsWith('tl.now')) {
            const [from] = date.split(' - ')
            return `${from} - ${t('tl.now')}`
        }

        return date
    }

    return (
        <div ref={timelineRef} className="relative mt-[2.8rem]">
            {/* Track line */}
            <div className="absolute left-[8px] top-[8px] bottom-0 w-[2px] rounded-[1px] bg-[var(--border)]">
                <div
                    ref={fillRef}
                    className="tl-fill absolute top-0 left-0 h-0 w-full rounded-[1px] bg-[linear-gradient(to_bottom,var(--accent),var(--accentd))]"
                />
            </div>

            {TIMELINE_ITEMS.map((item, index) => (
                <div key={item.id} className="relative flex gap-[1.6rem] pb-[2.8rem]">
                    <div
                        ref={(el) => {
                            dotRefs.current[index] = el
                        }}
                        className="tl-dot relative z-[1] mt-[2px] h-[18px] w-[18px] flex-shrink-0 rounded-full border-2 border-[var(--border2)]"
                        style={{
                            background: item.hollow ? 'var(--bg2)' : 'var(--border2)',
                        }}
                    />

                    <div
                        ref={(el) => {
                            contentRefs.current[index] = el
                        }}
                        className="tl-content-hidden"
                    >
                        <div className="mb-[.3rem] text-[.68rem] font-semibold tracking-[.06em] text-[var(--accent)]">
                            {getDateLabel(item.date)}
                        </div>

                        <div className="text-[1.05rem] font-bold tracking-[-0.02em] text-[var(--text)]">
                            {item.company}
                        </div>

                        <div className="mt-[.2rem] text-[.76rem] text-[var(--text3)]">
                            {t(item.roleKey as TranslationKey)}
                        </div>

                        <p className="mt-[.85rem] text-[.85rem] leading-[1.78] text-[var(--text2)]">
                            {t(item.descKey as TranslationKey)}
                        </p>

                        <div className="mt-[.9rem] flex flex-wrap gap-[.4rem]">
                            {item.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-[5px] border border-[rgba(74,222,128,.2)] bg-[var(--accentbg)] px-[.62rem] py-[.2rem] text-[.64rem] font-medium text-[var(--accent)]"
                                >
                                  {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
