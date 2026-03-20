import type {TabId} from './types'
import ProjectSlider from './ProjectSlider'
import TechStack from "./TechStack.tsx";
import CertSlider from "./CertSlider.tsx";

type Props = {
    tab: TabId
}

export default function WorkContent({tab}: Props) {
    if (tab === 'projects') {
        return <ProjectSlider/>
    }

    if (tab === 'certs') {
        return <CertSlider/>
    }

    return <TechStack/>
}
