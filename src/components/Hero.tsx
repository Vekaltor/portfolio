import {useLang} from '../context/LangContext'
import {useTyperHook} from '../hooks/useTyper.hook.ts'
import {useCounter} from '../hooks/useCounter.hook.ts'
import HeroContent from './hero/HeroContent'
import HeroPhoto from './hero/HeroPhoto'
import HeroStats from './hero/HeroStats'
import HeroStatusJobBadge from "./hero/HeroStatusJobBadge.tsx";

function Hero() {
    const {lang} = useLang()

    const vocabulary =
        lang === 'pl'
            ? ['Developer', 'w React', 'w Angular']
            : ['Developer', 'in React', 'in Angular']

    const typedText = useTyperHook(vocabulary)
    const experienceCount = useCounter(3, 650)
    const commercialCount = useCounter(2, 780)

    return (
        <section
            id="hero"
            className="relative z-[1] flex min-h-screen items-center pb-16 pt-20 md:pt-28"
        >
            <div className="mx-auto w-full max-w-[1240px] px-6 md:px-16">
                <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-16">
                    <div className="order-2 md:order-1">
                        <HeroContent typedText={typedText} />
                    </div>

                    <div className="order-1 flex flex-col items-center gap-6 md:order-2 md:gap-12">
                        <div className="block md:hidden">
                            <HeroStatusJobBadge/>
                        </div>
                        <HeroPhoto />
                        <HeroStats experienceCount={experienceCount} commercialCount={commercialCount}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
