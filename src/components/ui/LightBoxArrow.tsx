
interface LightboxArrowProps {
    direction: 'prev' | 'next'
    onClick: () => void
}

const base: React.CSSProperties = {
    border: '1px solid var(--lb-ring)',
    background: 'var(--lb-surface)',
    color: 'var(--lb-text)',
}

const hovered: React.CSSProperties = {
    border: '1px solid var(--accent)',
    background: 'var(--lb-surface-hover)',
    color: 'var(--accent)',
}

export default function LightboxArrow({direction, onClick}: LightboxArrowProps) {
    const isPrev = direction === 'prev'
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={direction}
            className={`hidden sm:flex cursor-none absolute top-1/2 z-[2] h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 ${
                isPrev ? 'left-2 min-[900px]:left-8' : 'right-2 min-[900px]:right-8'
            }`}
            style={base}
            onMouseEnter={e => Object.assign(e.currentTarget.style, hovered)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, base)}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points={isPrev ? '15 18 9 12 15 6' : '9 18 15 12 9 6'}/>
            </svg>
        </button>
    )
}
