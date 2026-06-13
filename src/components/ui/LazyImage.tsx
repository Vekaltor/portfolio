import {useEffect, useRef, useState} from 'react'

interface LazyImageProps {
    src: string
    alt: string
    wrapperClass?: string
    imgClass?: string
    style?: React.CSSProperties
    loading?: 'lazy' | 'eager'
    fetchPriority?: 'high' | 'low' | 'auto'
    aspectRatio?: string
}

export default function LazyImage({
    src,
    alt,
    wrapperClass = '',
    imgClass = '',
    style,
    loading = 'lazy',
    fetchPriority,
    aspectRatio,
}: LazyImageProps) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)

    const [shouldLoad, setShouldLoad] = useState(loading === 'eager')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (shouldLoad) return
        const el = wrapperRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoad(true)
                    observer.disconnect()
                }
            },
            {rootMargin: '200px 0px'}
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [shouldLoad])

    useEffect(() => {
        if (!shouldLoad) return
        const img = imgRef.current
        if (img?.complete && img.naturalWidth > 0) setLoaded(true)
    }, [shouldLoad])

    return (
        <div ref={wrapperRef} className={`relative ${wrapperClass}`} style={aspectRatio ? {aspectRatio} : undefined}>
            <div
                aria-hidden="true"
                className={`sk-shimmer pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
            >
                <svg
                    width="28" height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--sk-icon)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                </svg>
            </div>
            <img
                ref={imgRef}
                src={shouldLoad ? src : undefined}
                alt={alt}
                decoding="async"
                loading="lazy"
                fetchPriority={fetchPriority}
                onLoad={() => setLoaded(true)}
                className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClass}`}
                style={style}
            />
        </div>
    )
}
