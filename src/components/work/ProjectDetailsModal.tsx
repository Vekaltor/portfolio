import type {JSX} from 'react'
import {createPortal} from 'react-dom'
import {useMediaQuery} from 'react-responsive'
import type {Project} from '../../types/project.interface.ts'
import type {TranslationKey} from '../../data/i18n.ts'
import {useLang} from '../../hooks/useLang.hook.ts'
import {useProjectGallery} from '../../hooks/useProjectGallery.hook.ts'
import ProjectGallery from './ProjectGallery.tsx'
import ProjectLightbox from './ProjectLightbox.tsx'
import ProjectInfo from './ProjectInfo.tsx'

interface ProjectDetailsModalProps {
    project: Project
    isOpen: boolean
    onClose: () => void
}

const toImages = (src: Project['previewSrc']): string[] =>
    Array.isArray(src) ? src : src ? [src] : []

export default function ProjectDetailsModal(props: ProjectDetailsModalProps): JSX.Element | null {
    const {project, isOpen, onClose} = props
    const {t} = useLang()
    const isPortrait = useMediaQuery({query: '(orientation: portrait) and (max-width: 768px)'})

    const images = toImages(project.previewSrc)
    const title = t(project.titleKey as TranslationKey)
    const gallery = useProjectGallery({total: images.length, isOpen, onClose})

    if (!isOpen) return null

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
                    {t('p.closeBtn')}
                </button>

                {isPortrait ? (
                    <div className="flex max-h-[92vh] flex-col overflow-y-auto">
                        <div className="min-h-[220px] flex-shrink-0 p-4 pt-12 h-fit">
                            <ProjectGallery images={images} title={title} onOpen={gallery.open}/>
                        </div>
                        <div className="p-6 pt-2">
                            <ProjectInfo project={project}/>
                        </div>
                    </div>
                ) : (
                    <div className="grid max-h-[88vh] grid-cols-[1.2fr_1fr]">
                        <div className="max-h-[88vh] p-6 pt-16 h-fit">
                            <ProjectGallery images={images} title={title} onOpen={gallery.open}/>
                        </div>
                        <div className="max-h-[88vh] overflow-y-auto border-l border-[var(--border)] p-8 pt-16">
                            <ProjectInfo project={project}/>
                        </div>
                    </div>
                )}
            </div>

            {gallery.lightboxOpen && (
                <ProjectLightbox
                    images={images}
                    title={title}
                    activeIndex={gallery.activeIndex}
                    onClose={gallery.close}
                    onPrev={gallery.prev}
                    onNext={gallery.next}
                    onSelect={gallery.select}
                />
            )}
        </div>,
        document.body
    )
}
