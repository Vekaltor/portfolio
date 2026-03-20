import {useState} from 'react'
import type {TabId} from './work/types'
import WorkHeader from './work/WorkHeader'
import WorkTabs from './work/WorkTabs'
import WorkContent from './work/WorkContent'

export default function Work() {
    const [tab, setTab] = useState<TabId>('projects')

    return (
        <section
            id="work"
            className="relative z-[1] flex min-h-screen flex-col justify-center py-16 md:py-24"
        >
            <div className="mx-auto w-full max-w-[1240px] px-6 md:px-16">
                <WorkHeader/>
                <WorkTabs tab={tab} setTab={setTab}/>
                <WorkContent tab={tab}/>
            </div>
        </section>
    )
}
