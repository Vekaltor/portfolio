import type {JSX} from 'react'
import type {Project} from '../../types/project.interface.ts'
import type {TranslationKey} from '../../data/i18n.ts'
import {useLang} from '../../hooks/useLang.hook.ts'
import ProjectLinks from './ProjectLinks.tsx'

interface ProjectInfoProps {
    project: Project
}

export default function ProjectInfo({project}: ProjectInfoProps): JSX.Element {
    const {t} = useLang()
    const title = t(project.titleKey as TranslationKey)
    const desc = t(project.descKey as TranslationKey)

    return (
        <div className="flex flex-col gap-4 overflow-y-auto pr-2">
            <div className="flex items-start justify-between gap-4">
                <span className="text-[.62rem] font-semibold uppercase tracking-[.06em] text-[var(--text3)]">
                    {t(project.badgeKey as TranslationKey)}
                </span>
                <ProjectLinks live={project.live} github={project.github}/>
            </div>

            <div className="h-[4px] w-[32px] rounded-full" style={{background: project.bg}}/>

            <h2 className="text-[1.4rem] font-bold leading-[1.2] tracking-[-0.03em] text-[var(--text)]">
                {title}
            </h2>

            <p className="text-[.85rem] leading-[1.75] text-[var(--text2)]">
                {desc}
            </p>
        </div>
    )
}
