import type {JSX} from 'react'
import LazyImage from './LazyImage.tsx'

interface GalleryOverflowTileProps {
    src: string
    remaining: number
    sizeClass?: string
    onOpen: () => void
}

export default function GalleryOverflowTile({src, remaining, sizeClass = '', onOpen}: GalleryOverflowTileProps): JSX.Element {
    return (
        <button
            type="button"
            onClick={onOpen}
            aria-label={`Pokaż ${remaining} więcej zdjęć`}
            className={`group relative w-full cursor-none overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg3)] transition-all duration-200 hover:border-[var(--accent)] ${sizeClass}`}
        >
            <LazyImage
                src={src}
                alt=""
                loading="eager"
                wrapperClass="h-full w-full"
                imgClass="h-full w-full object-cover brightness-50 transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[1.05rem] font-bold text-white drop-shadow-md">
                    +{remaining}
                </span>
            </div>
        </button>
    )
}
