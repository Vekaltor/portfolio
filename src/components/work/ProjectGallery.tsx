import type {JSX} from 'react'
import {useLang} from '../../hooks/useLang.hook.ts'
import GalleryTile from './GalleryTile.tsx'

interface ProjectGalleryProps {
    images: string[]
    title: string
    onOpen: (index: number) => void
}

export default function ProjectGallery(props: ProjectGalleryProps): JSX.Element {
    const {images, title, onOpen} = props
    const {t} = useLang()

    const alt = (i: number) => `${title} — ${t('p.captionImage')} ${i + 1}`
    const tile = (i: number, sizeClass: string, overlay: 'sm' | 'md' = 'md') => (
        <GalleryTile key={images[i]} src={images[i]} index={i} alt={alt(i)} onOpen={onOpen}
                     sizeClass={sizeClass} overlay={overlay}/>
    )

    return (
        <div className="flex h-full flex-col gap-3 overflow-y-auto pr-1">
            {renderLayout()}
        </div>
    )

    function renderLayout(): JSX.Element {
        const n = images.length

        if (n === 0) {
            return (
                <div
                    className="flex h-full min-h-[200px] items-center justify-center rounded-xl bg-[var(--bg3)] text-[.8rem] text-[var(--text3)]">
                    {t('p.captionImage')}
                </div>
            )
        }

        if (n === 1) {
            return tile(0, 'h-full min-h-[220px]')
        }

        if (n === 2) {
            return (
                <>
                    {tile(0, 'h-[220px]')}
                    {tile(1, 'h-[220px]')}
                </>
            )
        }

        if (n === 3) {
            return (
                <>
                    {tile(0, 'h-[240px]')}
                    <div className="grid grid-cols-2 gap-3">
                        {tile(1, 'h-[150px]')}
                        {tile(2, 'h-[150px]')}
                    </div>
                </>
            )
        }

        return (
            <>
                {tile(0, 'h-[240px]')}
                <div className="grid grid-cols-2 gap-3">
                    {tile(1, 'h-[150px]')}
                    {tile(2, 'h-[150px]')}
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {images.slice(3).map((_, idx) => tile(idx + 3, 'aspect-square', 'sm'))}
                </div>
            </>
        )
    }
}
