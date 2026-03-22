import {useReveal} from '../../hooks/useReveal.hook.ts'
import {useLang} from "../../hooks/useLang.hook.ts";

export default function RecommendationHeader() {
    const {t} = useLang()
    const headRef = useReveal<HTMLDivElement>()

    return (
        <div ref={headRef} className="rv mb-12">
            <p className="mb-[.65rem] text-[.67rem] font-bold uppercase tracking-[.18em] text-[var(--accent)]">
                {t('test.eyebrow')}
            </p>

            <h2 className="font-display text-[clamp(2.2rem,3.8vw,3.2rem)] font-extrabold tracking-[-0.05em] text-[var(--text)]"
                dangerouslySetInnerHTML={{__html: t('test.title')}}/>
        </div>
    )
}
