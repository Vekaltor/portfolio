import {useCallback, useEffect, useState} from 'react'

type UseProjectGalleryParams = {
    total: number
    isOpen: boolean
    onClose: () => void
}

export type ProjectGalleryControls = {
    activeIndex: number
    lightboxOpen: boolean
    open: (index: number) => void
    close: () => void
    next: () => void
    prev: () => void
    select: (index: number) => void
}

export function useProjectGallery(params: UseProjectGalleryParams): ProjectGalleryControls {
    const {total, isOpen, onClose} = params

    const [activeIndex, setActiveIndex] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)

    const open = useCallback((index: number) => {
        setActiveIndex(index)
        setLightboxOpen(true)
    }, [])

    const close = useCallback(() => setLightboxOpen(false), [])

    const select = useCallback((index: number) => {
        if (total === 0) return
        setActiveIndex((index + total) % total)
    }, [total])

    const next = useCallback(() => select(activeIndex + 1), [select, activeIndex])
    const prev = useCallback(() => select(activeIndex - 1), [select, activeIndex])

    useEffect(() => {
        if (!isOpen) return
        setActiveIndex(0)
        setLightboxOpen(false)
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxOpen) {
                if (e.key === 'Escape') close()
                if (e.key === 'ArrowRight') next()
                if (e.key === 'ArrowLeft') prev()
            } else if (e.key === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, lightboxOpen, close, next, prev, onClose])

    return {activeIndex, lightboxOpen, open, close, next, prev, select}
}
