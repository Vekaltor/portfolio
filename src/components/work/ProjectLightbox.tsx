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
    const touchStart = useRef<number | null>(null)

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

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart.current === null) return
        const dx = touchStart.current - e.changedTouches[0].clientX
        touchStart.current = null
        if (Math.abs(dx) > 50) {
            dx > 0 ? onNext() : onPrev()
        }
    }

    const counterStyle = {border: '1px solid var(--lb-ring)', background: 'var(--lb-surface)', color: 'var(--lb-text)'}
    const closeBase = {border: '1px solid var(--lb-ring)', background: 'var(--lb-surface)', color: 'var(--lb-text)'}
    const closeHover = {border: '1px solid var(--accent)', background: 'var(--lb-surface-hover)', color: 'var(--accent)'}

    return createPortal(
        <div
            className="fixed inset-0 z-[1000] flex flex-col backdrop-blur-xl"
            style={{background: 'var(--lb-overlay)'}}
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="flex items-center justify-between p-4 min-[900px]:p-6">
                <span
                    className="rounded-full px-3.5 py-1.5 text-[.72rem] font-semibold tabular-nums tracking-wide backdrop-blur-md"
                    style={counterStyle}
                >
                    <span className="text-[var(--accent)]">{activeIndex + 1}</span>
                    <span className="mx-1" style={{color: 'var(--lb-text-muted)'}}>/</span>
                    {images.length}
                </span>
                <button
                    type="button"
                    onClick={(e) => { stop(e); onClose() }}
                    aria-label={t('p.closeBtn')}
                    className="cursor-none inline-flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 hover:rotate-90"
                    style={closeBase}
                    onMouseEnter={e => Object.assign(e.currentTarget.style, closeHover)}
                    onMouseLeave={e => Object.assign(e.currentTarget.style, closeBase)}
                >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>

            <div
                className="relative flex flex-1 items-center justify-center overflow-hidden px-4 min-[900px]:px-24"
                onClick={stop}
            >
                {hasMany && <LightboxArrow direction="prev" onClick={onPrev}/>}

                <figure className="flex max-h-full max-w-full flex-col items-center gap-3 min-[900px]:gap-4">
                    <img
                        src={current}
                        alt={`${title} - ${t('p.captionImage')} ${activeIndex + 1}`}
                        className="object-contain ring-1 ring-white/5 shadow-[0_20px_60px_rgba(0,0,0,.5)]"
                        style={{maxHeight: '58vh', maxWidth: '100%', borderRadius: '14px'}}
                    />
                    <figcaption
                        className="rounded-full px-4 py-1.5 text-[.68rem] font-medium tracking-wide backdrop-blur-md min-[900px]:text-[.72rem]"
                        style={{background: 'var(--lb-caption-bg)', color: 'var(--lb-caption-text)'}}>
                        {title}
                    </figcaption>
                </figure>

                {hasMany && <LightboxArrow direction="next" onClick={onNext}/>}
            </div>

            {hasMany && (
                <div
                    ref={thumbsRef}
                    className="flex justify-start gap-2 overflow-x-auto px-3 py-3 min-[900px]:justify-center min-[900px]:gap-2.5 min-[900px]:px-6 min-[900px]:py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    onClick={stop}
                >
                    {images.map((src, i) => {
                        const isActive = i === activeIndex
                        return (
                            <button
                                key={src}
                                type="button"
                                onClick={() => onSelect(i)}
                                className={`relative h-[40px] w-[56px] flex-shrink-0 cursor-none overflow-hidden rounded-[8px] transition-all duration-300 min-[900px]:h-[54px] min-[900px]:w-[78px] min-[900px]:rounded-[10px] ${
                                    isActive
                                        ? 'opacity-100 ring-2 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--lb-thumb-offset)]'
                                        : 'opacity-50 ring-1 ring-[var(--lb-ring)] hover:opacity-90 hover:ring-[var(--lb-ring-hover)]'
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
