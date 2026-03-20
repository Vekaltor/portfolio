import ProjectSlider from './ProjectSlider'
import TechStack from "./TechStack.tsx";
import CertSlider from "./CertSlider.tsx";
import type {TabId} from "../../types/work-tabs-ids.type.ts";

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
