import {createPortal} from 'react-dom'
import {useLang} from '../../hooks/useLang.hook.ts'
import LightboxArrow from "../ui/LightBoxArrow.tsx";
import {useEffect, useRef} from "react";

interface ProjectLightboxProps {
    images: string[]
    title: string
    activeIndex: number
    onClose: () => void
    onPrev: () => void
    onNext: () => void
    onSelect: (index: number) => void
}

export default function ProjectLightbox(props: ProjectLightboxProps) {
    const {images, title, activeIndex, onClose, onPrev, onNext, onSelect} = props
    const {t} = useLang()

    const thumbsRef = useRef<HTMLDivElement>(null)

    // Przewiń pasek miniatur tak, aby aktywna była zawsze widoczna i wycentrowana.
    useEffect(() => {
        const strip = thumbsRef.current
        if (!strip) return
        const active = strip.children[activeIndex] as HTMLElement | undefined
        active?.scrollIntoView({behavior: 'smooth', inline: 'center', block: 'nearest'})
    }, [activeIndex])

    const current = images[activeIndex]
    if (!current) return null

    const hasMany = images.length > 1
    const stop = (e: {stopPropagation: () => void}) => e.stopPropagation()

    return createPortal(
        <div
            className="lb-root fixed inset-0 z-[1000] flex flex-col bg-[rgba(4,6,4,.94)] backdrop-blur-xl"
            onClick={onClose}
        >
            <style>{LIGHTBOX_KEYFRAMES}</style>

            {/* Pasek górny: licznik + zamknięcie */}
            <div className="flex items-center justify-between p-4 min-[900px]:p-6">
                <div className="flex items-center gap-3">
                    <span
                        className="rounded-full border border-[var(--border)] bg-[rgba(12,14,12,.6)] px-3.5 py-1.5 text-[.72rem] font-semibold tabular-nums tracking-wide text-white backdrop-blur-md">
                        <span className="text-[var(--accent)]">{activeIndex + 1}</span>
                        <span className="mx-1 text-white/40">/</span>
                        {images.length}
                    </span>
                </div>
                <button
                    type="button"
                    onClick={(e) => {
                        stop(e)
                        onClose()
                    }}
                    aria-label={t('p.closeBtn')}
                    className="cursor-none group inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(12,14,12,.6)] text-white/80 backdrop-blur-md transition-all duration-200 hover:rotate-90 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>

            {/* Scena ze zdjęciem */}
            <div
                className="relative flex flex-1 items-center justify-center overflow-hidden px-4 min-[900px]:px-24"
                onClick={stop}
            >
                {hasMany && <LightboxArrow direction="prev" onClick={onPrev}/>}

                <figure className="flex max-h-full max-w-full flex-col items-center gap-4">
                    <img
                        key={activeIndex}
                        src={current}
                        alt={`${title} - ${t('p.captionImage')} ${activeIndex + 1}`}
                        className="lb-image max-h-[68vh] max-w-full rounded-[14px] object-contain shadow-[0_30px_90px_rgba(0,0,0,.6)] ring-1 ring-white/5"
                    />
                    <figcaption
                        className="lb-caption rounded-full bg-[rgba(12,14,12,.5)] px-4 py-1.5 text-[.72rem] font-medium tracking-wide text-white/70 backdrop-blur-md">
                        {title}
                    </figcaption>
                </figure>

                {hasMany && <LightboxArrow direction="next" onClick={onNext}/>}
            </div>

            {/* Pasek miniatur */}
            {hasMany && (
                <div
                    ref={thumbsRef}
                    className="flex justify-start gap-2.5 overflow-x-auto px-4 py-4 min-[900px]:justify-center min-[900px]:px-6 min-[900px]:py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    onClick={stop}
                >
                    {images.map((src, i) => {
                        const isActive = i === activeIndex
                        return (
                            <button
                                key={src}
                                type="button"
                                onClick={() => onSelect(i)}
                                className={`relative h-[54px] w-[78px] flex-shrink-0 cursor-none overflow-hidden rounded-[10px] transition-all duration-300 ${
                                    isActive
                                        ? 'opacity-100 ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[rgba(4,6,4,.94)]'
                                        : 'opacity-45 ring-1 ring-[var(--border)] hover:opacity-90 hover:ring-white/30'
                                }`}
                            >
                                <img src={src} alt={`${t('p.captionImage')} ${i + 1}`}
                                     className={`h-full w-full object-cover transition-transform duration-300 ${isActive ? 'scale-105' : ''}`}/>
                            </button>
                        )
                    })}
                </div>
            )}
        </div>,
        document.body
    )
}

const LIGHTBOX_KEYFRAMES = `
@keyframes lbRootIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes lbImageIn { from { opacity: 0; transform: scale(.97); } to { opacity: 1; transform: scale(1); } }
@keyframes lbCaptionIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.lb-root { animation: lbRootIn .22s ease-out; }
.lb-image { animation: lbImageIn .28s cubic-bezier(.22,.61,.36,1); }
.lb-caption { animation: lbCaptionIn .35s ease-out; }
@media (prefers-reduced-motion: reduce) {
  .lb-root, .lb-image, .lb-caption { animation: none; }
}
`
