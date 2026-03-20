import {useLang} from '../../context/LangContext.tsx'
import type {TranslationKey} from '../../data/i18n.ts'
import type {Project} from '../../types/project.interface.ts'
import type {JSX} from 'react'
import {useState} from "react";
import type {SliderItemComponentProps} from '../ui/BaseSlider.tsx'
import ProjectChips from './ProjectChips.tsx'
import ProjectLinks from './ProjectLinks.tsx'
import ImagePreviewModal from "../ui/ImagePreviewModal.tsx";

type Props = SliderItemComponentProps<Project>

export default function ProjectSlideItem(props: Props): JSX.Element {
    const {
        item: project,
        state,
    } = props

    const {t} = useLang()
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const isActive = state === 'active'
    const title = t(project.titleKey as TranslationKey)

    return (
        <>
            <article
                className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg2)] transition-all duration-300"
                style={{
                    boxShadow: isActive ? 'var(--proj-shadow)' : 'none',
                }}
            >
                <div className="group relative h-[210px] w-full overflow-hidden border-b border-[var(--border)] bg-[var(--bg3)]">
                    <img
                        src={project.previewSrc}
                        alt={title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,10,8,.34),rgba(8,10,8,.08),transparent)] transition-colors duration-300 group-hover:bg-[rgba(8,10,8,.24)]" />

                    <div
                        className="absolute inset-x-0 top-0 h-[6px]"
                        style={{ background: project.bg }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <button
                            type="button"
                            onClick={() => setIsPreviewOpen(true)}
                            className="cursor-none translate-y-[8px] rounded-[10px] border border-[var(--border)] bg-[rgba(12,14,12,.72)] px-4 py-2 text-[.72rem] font-semibold text-[var(--text)] opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                            Podgląd
                        </button>
                    </div>
                </div>

                <div className="px-[1.8rem] py-[1.6rem]">
                    <div className="mb-[1rem] flex items-start justify-between gap-4">
                        <span className="text-[.62rem] font-semibold uppercase tracking-[.06em] text-[var(--text3)]">
                          {t(project.badgeKey as TranslationKey)}
                        </span>

                        <ProjectLinks live={project.live} github={project.github}/>
                    </div>

                    <h3 className="mb-[.7rem] text-[1.15rem] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--text)]">
                        {title}
                    </h3>

                    <p className="mb-[1.15rem] text-[.83rem] leading-[1.72] text-[var(--text2)] line-clamp-[4]">
                        {t(project.descKey as TranslationKey)}
                    </p>

                    <ProjectChips chips={project.chips}/>
                </div>
            </article>

            <ImagePreviewModal
                src={project.previewSrc}
                alt={title}
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
            />
        </>
    )
}
