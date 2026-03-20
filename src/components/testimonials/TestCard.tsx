import type {TranslationKey} from '../../data/i18n'
import type {TestimonialCard} from "../../types/testimonialCard.interface.ts";

export default function TestCard({
                                     card,
                                     t,
                                 }: {
    card: TestimonialCard
    t: (k: TranslationKey) => string
}) {
    return (
        <div
            className="rounded-[var(--r,16px)] p-8 flex flex-col border border-[var(--border)] hover:border-[var(--border2)] hover:-translate-y-[3px] transition-all"
            style={{background: 'var(--bg2)'}}
        >
            <p className="text-[.9rem] text-[var(--text2)] leading-[1.86] flex-1 mb-6 relative pt-7">
        <span
            className="absolute top-[-0.2rem] left-0 font-display text-[2.8rem] leading-none opacity-50"
            style={{color: 'var(--accent)'}}
        >
          &quot;
        </span>
                {t(card.quoteKey as TranslationKey)}
            </p>

            <div className="flex items-center gap-[.9rem]">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-[1.1rem] border border-[var(--border)] flex-shrink-0"
                    style={{background: 'var(--bg3)'}}
                >
                    {card.avatar}
                </div>

                <div>
                    <div className="text-[.84rem] font-semibold text-[var(--text)]">Imię Nazwisko</div>
                    <div className="text-[.7rem] text-[var(--text3)] mt-[.1rem]">
                        {t(card.roleKey as TranslationKey)}
                    </div>

                    <a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[.64rem] text-[var(--accent)] mt-[.2rem] inline-block hover:opacity-70 transition-opacity"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </div>
        </div>
    )
}

