export default function NavBtn({
  onClick,
  direction,
}: {
  onClick: () => void
  direction: 'prev' | 'next'
}) {
  return (
    <button
      onClick={onClick}
      className="w-[42px] h-[42px] rounded-full border border-[var(--border2)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)] transition-all cursor-none"
    >
      <svg
        width="15"
        height="15"
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

