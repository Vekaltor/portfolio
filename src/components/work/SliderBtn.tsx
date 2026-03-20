export default function SliderBtn({
  onClick,
  direction,
}: {
  onClick: () => void
  direction: 'prev' | 'next'
}) {
  return (
    <button
      onClick={onClick}
      className="w-11 h-11 rounded-full border border-[var(--border2)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)] transition-all cursor-none"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === 'prev' ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  )
}

