import type { TranslationKey } from '../../data/i18n'
import type { Recommendation } from '../../types/recommendation.interface.ts'
import PersonAvatar from "../ui/PlaceholderAvatar.tsx";
import {useLang} from "../../hooks/useLang.hook.ts";

interface RecommendationCardProps {
    card: Recommendation
}

export default function RecommendationCard(props: RecommendationCardProps) {
    const { t } = useLang()
    const { card } = props

    return (
        <article className="flex flex-col rounded-[16px] border border-[var(--border)] bg-[var(--bg2)] p-8 transition-all hover:-translate-y-[3px] hover:border-[var(--border2)]">
            <p className="relative mb-6 flex-1 pt-7 text-[.9rem] leading-[1.86] text-[var(--text2)]">
                <span className="absolute left-0 top-[-0.2rem] font-display text-[2.8rem] leading-none opacity-50 text-[var(--accent)]">
                  &quot;
                </span>
                {t(card.quoteKey as TranslationKey)}
            </p>

            <div className="flex items-center gap-[.9rem]">
                <PersonAvatar
                    src={card.avatarSrc}
                    alt={card.name}
                    className="h-11 w-11 flex-shrink-0"
                />

                <div className="min-w-0">
                    <div className="text-[.84rem] font-semibold text-[var(--text)]">
                        {card.name}
                    </div>

                    <div className="mt-[.1rem] text-[.7rem] text-[var(--text3)]">
                        {t(card.roleKey as TranslationKey)}
                    </div>

                    <a
                        href={card.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-[.2rem] inline-block text-[.64rem] text-[var(--accent)] transition-opacity hover:opacity-70 cursor-none"
                    >
                        LinkedIn ↗
                    </a>
                </div>
            </div>
        </article>
    )
}
