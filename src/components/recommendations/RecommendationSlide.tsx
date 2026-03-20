import RecommendationCard from './RecommendationCard.tsx'
import type {Recommendation} from "../../types/recommendation.interface.ts";

type Props = {
    slide: number
    cards: Recommendation[]
}

export default function RecommendationSlide({slide, cards}: Props) {
    const isSingle = cards.length === 1

    return (
        <div key={slide} className="tslide-enter">
            <div
                className={[
                    'grid gap-6',
                    isSingle ? 'mx-auto max-w-[560px] grid-cols-1' : 'grid-cols-2',
                ].join(' ')}
            >
                {cards.map((card, index) => (
                    <RecommendationCard key={index} card={card}/>
                ))}
            </div>
        </div>
    )
}
