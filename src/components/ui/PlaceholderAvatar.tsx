import { useState } from 'react'
import type { JSX } from 'react'

type Props = {
    src: string
    alt: string
    className?: string
}

export default function PersonAvatar({ src, alt, className = '' }: Props): JSX.Element {
    const [hasError, setHasError] = useState(false)

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
                    <path d="M20 21a8 8 0 0 0-16 0" />
                    <circle cx="12" cy="8" r="4" />
                </svg>
            </div>
        )
    }

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setHasError(true)}
            className={`rounded-full border border-[var(--border)] bg-[var(--bg3)] object-cover ${className}`}
        />
    )
}
