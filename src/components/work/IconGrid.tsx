import type { TechIcon } from '../../types'

export default function IconGrid({
  items,
  dim = false,
}: {
  items: TechIcon[]
  dim?: boolean
}) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-6 items-start">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center gap-[.6rem] cursor-default w-[68px] group"
        >
          <img
            src={item.src}
            alt={item.name}
            loading="lazy"
            className="w-12 h-12 object-contain transition-all duration-300 group-hover:-translate-y-[6px] group-hover:scale-[1.15] group-hover:drop-shadow-[0_6px_14px_rgba(74,222,128,.3)]"
            style={{
              filter: dim
                ? 'grayscale(.55) brightness(.65)'
                : item.invert
                  ? 'invert(1)'
                  : 'brightness(.85) saturate(.9)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLImageElement).style.filter = item.invert
                ? 'invert(1)'
                : 'brightness(1) saturate(1)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLImageElement).style.filter = dim
                ? 'grayscale(.55) brightness(.65)'
                : item.invert
                  ? 'invert(1)'
                  : 'brightness(.85) saturate(.9)'
            }}
          />
          <span className="text-[.68rem] font-semibold text-[var(--text3)] tracking-[.02em] whitespace-nowrap text-center group-hover:text-[var(--text)] transition-colors">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

