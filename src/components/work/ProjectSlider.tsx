import {PROJECTS} from '../../constants/content.ts'
import BaseSlider from '../ui/BaseSlider.tsx'
import ProjectSlideItem from './ProjectSlideItem.tsx'
import type {Project} from '../../types/project.interface.ts'

export default function ProjectSlider() {
    return (
        <BaseSlider<Project>
            items={PROJECTS}
            initialIndex={0}
            heightClassName="h-[480px]"
            slideWidthClassName="w-full max-w-[420px]"
            getItemKey={(project, index) => `${project.titleKey}-${index}`}
            ItemComponent={ProjectSlideItem}
        />
    )
}
