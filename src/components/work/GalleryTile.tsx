import type {JSX} from 'react'
import {useLang} from '../../hooks/useLang.hook.ts'

interface GalleryTileProps {
    src: string
    index: number
    alt: string
    onOpen: (index: number) => void
    sizeClass?: string
}

export default function GalleryTile(props: GalleryTileProps): JSX.Element {
    const {src, index, alt, onOpen, sizeClass = ''} = props
    const {t} = useLang()

    return (
        <button
            type="button"
            onClick={() => onOpen(index)}
            className={`group relative w-full cursor-none overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg3)] transition-all duration-200 hover:border-[var(--accent)] ${sizeClass}`}
        >
            <img
                src={src}
                alt={alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div
                className="absolute inset-0 flex items-center justify-center bg-[rgba(6,8,6,0)] transition-all duration-300 group-hover:bg-[rgba(6,8,6,.35)]">
                <span
                    className={`cursor-none translate-y-[8px] rounded-[8px] border border-[var(--border)] bg-[rgba(12,14,12,.72)] font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 px-4 py-2 text-[.72rem]`}>
                    {t('p.enlargeBtn')}
                </span>
            </div>
        </button>
    )
}
