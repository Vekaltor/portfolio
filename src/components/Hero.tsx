import {useLang} from '../context/LangContext'
import {useTyperHook} from '../hooks/useTyper.hook.ts'
import {useCounter} from '../hooks/useCounter.hook.ts'
import HeroContent from './hero/HeroContent'
import HeroPhoto from './hero/HeroPhoto'
import HeroStats from './hero/HeroStats'

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
            className="relative z-[1] flex min-h-screen items-center pb-16 pt-28"
        >
            <div className="mx-auto w-full max-w-[1240px] px-16">
                <div className="grid grid-cols-2 items-center gap-16">
                    <HeroContent typedText={typedText}/>

                    <div className="flex flex-col items-center gap-24">
                        <HeroPhoto/>
                        <HeroStats experienceCount={experienceCount} commercialCount={commercialCount}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
