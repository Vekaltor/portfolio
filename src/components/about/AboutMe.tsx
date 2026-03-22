import {useReveal} from "../../hooks/useReveal.hook.ts";
import type {TranslationKey} from "../../data/i18n.ts";

import {useLang} from "../../hooks/useLang.hook.ts";

function AboutMe() {
    const {t} = useLang();
    const leftRef = useReveal<HTMLDivElement>({
        threshold:0.2,
        rootMargin: '0px 0px -10% 0px'
    })

    return (
        <div ref={leftRef} className="rvl">
            <p className="text-[.67rem] font-bold tracking-[.18em] text-[var(--accent)] uppercase mb-[.65rem]">
                {t('about.eyebrow')}
            </p>

            <h2
                className="font-display font-extrabold tracking-[-0.05em] text-[var(--text)] mb-4"
                style={{fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)'}}
                dangerouslySetInnerHTML={{__html: t('about.title')}}
            />

            {(['about.p1', 'about.p2', 'about.p3'] as TranslationKey[]).map((k) => (
                <p
                    key={k}
                    className="text-[.95rem] text-[var(--text2)] leading-[1.88] mb-[.9rem]"
                    dangerouslySetInnerHTML={{
                        __html: t(k).replace(
                            /<strong>/g,
                            '<strong class="text-[var(--text)] font-semibold">'
                        ),
                    }}
                />
            ))}
        </div>
    )
}

export default AboutMe
