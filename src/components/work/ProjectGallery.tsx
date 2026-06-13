import type {JSX} from 'react'
import {useLang} from '../../hooks/useLang.hook.ts'
import GalleryTile from './GalleryTile.tsx'
import GalleryOverflowTile from '../ui/GalleryOverflowTile.tsx'
import {useMediaQuery} from "react-responsive";

const MAX_VISIBLE = 6

interface ProjectGalleryProps {
    images: string[]
    title: string
    onOpen: (index: number) => void
}

export default function ProjectGallery({images, title, onOpen}: ProjectGalleryProps): JSX.Element {
    const {t} = useLang()
    const n = images.length
    const hasMore = n > MAX_VISIBLE
    const remaining = n - (MAX_VISIBLE - 1)

    const alt = (i: number) => `${title} — ${t('p.captionImage')} ${i + 1}`

    const isPortrait: boolean = useMediaQuery({query: '(orientation: portrait) and (max-width: 768px)'})
    const secondRowStart = 1
    const secondRowEnd = isPortrait ? 1 : 3

    const thirdRowStart = isPortrait ? 1 : 3
    const thirdRowEnd = hasMore ? 5 : 6

    return (
        <div className="flex h-full flex-col gap-3 overflow-y-auto pr-1">

            {n >= 1 && (
                <GalleryTile src={images[0]} index={0} alt={alt(0)} onOpen={onOpen} sizeClass={n === 1 ? 'h-full min-h-[220px]' : 'h-[240px]'}/>
            )}

            {n === 2 && (
                <GalleryTile src={images[1]} index={1} alt={alt(1)} onOpen={onOpen} sizeClass="h-[220px]"/>
            )}

            {n >= 3 && !isPortrait && (
                <div className="grid grid-cols-2 gap-3">
                    {images.slice(secondRowStart, secondRowEnd).map((src, i) => (
                        <GalleryTile
                            key={src}
                            src={src}
                            index={secondRowStart + i}
                            alt={alt(secondRowStart + i)}
                            onOpen={onOpen}
                            sizeClass="h-[170px]"
                        />
                    ))}
                </div>
            )}

            {n > thirdRowStart && (
                <div className="grid grid-cols-3 gap-3">
                    {images.slice(thirdRowStart, thirdRowEnd).map((src, i) => (
                        <GalleryTile
                            key={src}
                            src={src}
                            index={thirdRowStart + i}
                            alt={alt(thirdRowStart + i)}
                            onOpen={onOpen}
                            sizeClass="aspect-square"
                        />
                    ))}

                    {hasMore && (
                        <GalleryOverflowTile
                            src={images[MAX_VISIBLE - 1]}
                            remaining={remaining}
                            sizeClass="aspect-square"
                            onOpen={() => onOpen(MAX_VISIBLE - 1)}
                        />
                    )}
                </div>
            )}

        </div>
    )
}
