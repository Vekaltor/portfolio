import type {JSX} from 'react'
import {useEffect, useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import {useMediaQuery} from 'react-responsive'

type Props = {
    src?: string
    alt: string
    isOpen: boolean
    onClose: () => void
}

export default function ImagePreviewModal({src, alt, isOpen, onClose}: Props): JSX.Element | null {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})
    const imgRef = useRef<HTMLImageElement>(null)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (!isOpen) return
        setLoaded(false)
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    // If image already decoded in memory (preloaded by CertSlideItem), show instantly
    useEffect(() => {
        if (!isOpen) return
        const img = imgRef.current
        if (img?.complete && img.naturalWidth > 0) setLoaded(true)
    }, [isOpen, src])

    const handleClick = (e: React.MouseEvent) => { e.stopPropagation(); onClose() }

    if (!isOpen) return null

    return createPortal(
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center"
            style={{background: 'rgba(4,5,4,.93)', backdropFilter: 'blur(12px)'}}
            onClick={handleClick}
        >
            <button
                type="button"
                onClick={handleClick}
                className="cursor-none absolute right-5 top-5 z-[2] flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg2)] text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                aria-label="Zamknij"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[var(--border)] bg-[var(--bg2)] px-4 py-1.5 text-[.68rem] font-medium text-[var(--text3)] backdrop-blur-sm">
                {alt}
            </div>

            <div
                className="flex items-center justify-center"
                style={{
                    width: isMobile ? '100vw' : 'auto',
                    height: isMobile ? '100dvh' : 'auto',
                    padding: isMobile ? '3rem 1rem' : '2rem',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    decoding="async"
                    onLoad={() => setLoaded(true)}
                    className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        maxWidth: isMobile ? '100%' : '90vw',
                        maxHeight: isMobile ? '100%' : '90vh',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: isMobile ? '12px' : '16px',
                        boxShadow: '0 32px 80px rgba(0,0,0,.6)',
                    }}
                />
            </div>
        </div>,
        document.body
    )
}
