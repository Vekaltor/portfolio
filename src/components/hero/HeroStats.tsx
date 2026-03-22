import StatCard from './StatCard'
import {useLang} from "../../hooks/useLang.hook.ts";

interface HeroStatsProps {
    experienceCount: number
    commercialCount: number
}

function HeroStats(props: HeroStatsProps) {
    const { experienceCount, commercialCount } = props
    const { t } = useLang()

    return (
        <div className="flex max-w-full w-full flex-wrap justify-center gap-[.9rem]">
            <StatCard value={`${experienceCount}+`} label={t('stat.exp')} className="s1" />
            <StatCard value={`${commercialCount}+`} label={t('stat.com')} className="s2" />
            <StatCard value={t('stat.certValue')} label={t('stat.certLabel')} className="s3" />
        </div>
    )
}

export default HeroStats
