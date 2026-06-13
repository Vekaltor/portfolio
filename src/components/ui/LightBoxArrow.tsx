interface LightboxArrowProps {
    direction: 'prev' | 'next'
    onClick: () => void
}

export default function LightboxArrow({direction, onClick}: LightboxArrowProps) {
    const isPrev = direction === 'prev'
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={direction}
            className={`cursor-none absolute top-1/2 z-[2] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(12,14,12,.55)] text-white/85 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-[var(--accent)] hover:bg-[rgba(12,14,12,.8)] hover:text-[var(--accent)] active:scale-95 ${
                isPrev ? 'left-2 min-[900px]:left-8' : 'right-2 min-[900px]:right-8'
            }`}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points={isPrev ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}/>
            </svg>
        </button>
    )
}
