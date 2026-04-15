import HeroMainTechnologies from './HeroMainTechnologies.tsx'
import HeroActions from './HeroActions'
import HeroSocials from './HeroSocials'
import {useLang} from "../../hooks/useLang.hook.ts";

interface HeroContentProps {
    typedText: string
}

function HeroContent(props: HeroContentProps) {
    const {typedText} = props
    const {t} = useLang()

    return (
        <div>
            <h1 className="hero-init hi2 mb-[1.4rem] font-display text-[clamp(3.5rem,6.5vw,7rem)] font-extrabold leading-[.9] tracking-[-.06em] text-[var(--text)]">
                Frontend
                <br/>
                <span className="green-gradient">{typedText}</span>
                <span className="typer-cur border-r-[5px] border-[var(--accent)] pr-1 "/>
            </h1>

            <p className="hero-init hi3 mb-[1.4rem] max-w-[440px] text-[.96rem] leading-[1.82] text-[var(--text2)]"
               dangerouslySetInnerHTML={{__html: t('hero.sub')}}
            />

            <HeroMainTechnologies/>
            <HeroActions/>
            <HeroSocials/>
        </div>
    )
}

export default HeroContent
