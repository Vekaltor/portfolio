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
import ProjectChips from "./ProjectChips.tsx";
import {classNames} from "../../helpers/classNames.helper.ts";

interface ProjectDetailsModalProps {
    project: Project
    isOpen: boolean
    onClose: () => void
}

export default function ProjectDetailsModal(props: ProjectDetailsModalProps): JSX.Element | null {
    const {project, isOpen, onClose} = props
    const {t} = useLang()
    const isPortrait = useMediaQuery({query: '(orientation: portrait) and (max-width: 768px)'})

    const images = project.previewSrc ?? []
    const title = t(project.titleKey as TranslationKey)
    const gallery = useProjectGallery({total: images.length, isOpen, onClose})
    const showGallery = images.length > 0


    if (!isOpen) return null

    return createPortal(
        <div
            className={classNames(
                "fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(6,8,6,.82)] p-4 backdrop-blur-sm min-[900px]:p-8",
                isPortrait && "pt-24"
            )}
            onClick={onClose}
        >
            <div
                className={classNames(
                    "relative w-full max-w-[1100px] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg)] shadow-[0_24px_80px_rgba(0,0,0,.45)]",
                    isPortrait ? "max-h-[100%]" : "max-h-[80%]"
                )}
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
                    <div className="flex flex-col h-fit overflow-y-auto p-4 max-h-[80vh]">
                        <div className="pt-8 space-y-4">
                            <ProjectInfo project={project}/>
                            <ProjectChips chips={project.chips}/>
                        </div>
                        {showGallery && (
                            <div className="pt-6 h-fit">
                                <ProjectGallery images={images} title={title} onOpen={gallery.open}/>
                            </div>
                        )}
                    </div>
                ) : (
                    <div
                        className={classNames(
                            "grid",
                            showGallery && "grid-cols-[1fr_1fr]"
                        )}>
                        {showGallery && (
                            <div className="p-6 pt-16 h-fit">
                                <ProjectGallery images={images} title={title} onOpen={gallery.open}/>
                            </div>
                        )}
                        <div
                            className="flex flex-col p-8 pt-16 border-l border-[var(--border)] space-y-4 max-h-[70svh]">
                            <ProjectInfo project={project}/>
                            <ProjectChips chips={project.chips}/>
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
