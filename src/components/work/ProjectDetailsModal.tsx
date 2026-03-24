import type {JSX} from 'react'
import {useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import {useMediaQuery} from 'react-responsive'
import type {Project} from '../../types/project.interface.ts'
import type {TranslationKey} from '../../data/i18n.ts'
import {useLang} from '../../hooks/useLang.hook.ts'
import ProjectChips from './ProjectChips.tsx'
import ProjectLinks from './ProjectLinks.tsx'
import ImagePreviewModal from '../ui/ImagePreviewModal.tsx'

type ProjectDetailsModalProps = {
    project: Project
    isOpen: boolean
    onClose: () => void
}

export default function ProjectDetailsModal(props: ProjectDetailsModalProps): JSX.Element | null {
    const {project, isOpen, onClose} = props;
    const {t} = useLang()
    const isPortrait = useMediaQuery({query: '(orientation: portrait) and (max-width: 768px)'})

    const title = t(project.titleKey as TranslationKey)
    const desc = t(project.descKey as TranslationKey)
    const images = Array.isArray(project.previewSrc) ? project.previewSrc : project.previewSrc ? [project.previewSrc] : []

    const [activeIndex, setActiveIndex] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)

    useEffect(() => {
        if (!isOpen) return
        setActiveIndex(0)

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && !lightboxOpen) onClose()
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose, lightboxOpen])

    if (!isOpen) return null

    const Gallery = (
        <div className="flex h-full flex-col gap-3">
            <div
                className="group relative flex-1 cursor-none overflow-hidden rounded-xl bg-[var(--bg3)]"
                onClick={() => setLightboxOpen(true)}
            >
                {images[activeIndex] && (
                    <>
                        <img
                            src={images[activeIndex]}
                            alt={`${title} — zdjęcie ${activeIndex + 1}`}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span
                                className="cursor-none translate-y-[8px] rounded-[10px] border border-[var(--border)] bg-[rgba(12,14,12,.72)] px-4 py-2 text-[.72rem] font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                {t("p.enlargeBtn")}
                            </span>
                        </div>
                    </>
                )}

                {images.length > 1 && (
                    <div
                        className="absolute bottom-3 right-3 rounded-[8px] border border-[var(--border)] bg-[rgba(12,14,12,.72)] px-2 py-1 text-[.65rem] font-medium text-white backdrop-blur-sm">
                        {activeIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {images?.map((src, i) => (
                        <button
                            key={src}
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            className={`h-[56px] w-[80px] flex-shrink-0 cursor-none overflow-hidden rounded-[8px] border transition-all duration-200 ${
                                i === activeIndex
                                    ? 'border-[var(--accent)] opacity-100'
                                    : 'border-[var(--border)] opacity-50 hover:opacity-80'
                            }`}
                        >
                            <img
                                src={src}
                                alt={`miniatura ${i + 1}`}
                                className="h-full w-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )

    const Info = (
        <div className="flex flex-col gap-4 overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
                <span className="text-[.62rem] font-semibold uppercase tracking-[.06em] text-[var(--text3)]">
                    {t(project.badgeKey as TranslationKey)}
                </span>
                <ProjectLinks live={project.live} github={project.github}/>
            </div>

            <div
                className="h-[4px] w-[32px] rounded-full"
                style={{background: project.bg}}
            />

            <h2 className="text-[1.4rem] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--text)]">
                {title}
            </h2>

            <p className="text-[.85rem] leading-[1.75] text-[var(--text2)]">
                {desc}
            </p>

            <ProjectChips chips={project.chips}/>
        </div>
    )

    return createPortal(
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(6,8,6,.82)] p-4 backdrop-blur-sm min-[900px]:p-8"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-[1100px] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg)] shadow-[0_24px_80px_rgba(0,0,0,.45)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="cursor-none absolute right-4 top-4 z-[2] inline-flex items-center rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] px-3 py-2 text-[.74rem] font-medium text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                    {t("p.closeBtn")}
                </button>

                {isPortrait ? (
                    <div className="flex max-h-[92vh] flex-col overflow-y-auto">
                        <div className="h-[45vw] min-h-[220px] max-h-[340px] flex-shrink-0 p-4">
                            {Gallery}
                        </div>
                        <div className="p-6 pt-2">
                            {Info}
                        </div>
                    </div>
                ) : (
                    <div className="grid max-h-[88vh] grid-cols-[1.2fr_1fr]">
                        <div className="max-h-[88vh] p-6">
                            {Gallery}
                        </div>
                        <div className="max-h-[88vh] overflow-y-auto border-l border-[var(--border)] p-8 pt-16">
                            {Info}
                        </div>
                    </div>
                )}
            </div>

            <ImagePreviewModal
                src={images[activeIndex]}
                alt={`${title} - ${t("p.captionImage")} ${activeIndex + 1}`}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
            />
        </div>,
        document.body
    )
}
