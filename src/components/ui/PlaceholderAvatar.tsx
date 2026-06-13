import {useEffect, useRef, useState} from 'react'
import type {JSX} from 'react'

type Props = {
    src: string
    alt: string
    className?: string
}

export default function PersonAvatar({src, alt, className = ''}: Props): JSX.Element {
    const imgRef = useRef<HTMLImageElement>(null)
    const [loaded, setLoaded] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const img = imgRef.current
        if (img?.complete && img.naturalWidth > 0) setLoaded(true)
    }, [])

    if (hasError) {
        return (
            <div
                aria-label={alt}
                className={`flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg3)] ${className}`}
            >
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-[58%] w-[58%] text-[var(--text3)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20 21a8 8 0 0 0-16 0"/>
                    <circle cx="12" cy="8" r="4"/>
                </svg>
            </div>
        )
    }

    return (
        <div className={`relative overflow-hidden rounded-full border border-[var(--border)] bg-[var(--bg3)] ${className}`}>
            <div
                aria-hidden="true"
                className={`sk-shimmer pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
            />
            <img
                ref={imgRef}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => setHasError(true)}
                className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    )
}
