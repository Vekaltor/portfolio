import {useState} from 'react'
import {useLang} from '../context/LangContext'
import {TESTIMONIAL_SLIDES} from '../constants/content.ts'
import RecommendationHeader from "./recommendations/RecommendationHeader.tsx";
import RecommendationSlide from "./recommendations/RecommendationSlide.tsx";
import RecommendationControls from "./recommendations/RecommendationControls.tsx";


export default function Recommendations() {
    const {t} = useLang()
    const [slide, setSlide] = useState(0)

    const total = TESTIMONIAL_SLIDES.length
    const currentSlide = TESTIMONIAL_SLIDES[slide]

    const goPrev = () => {
        setSlide((prev) => (prev - 1 + total) % total)
    }

    const goNext = () => {
        setSlide((prev) => (prev + 1) % total)
    }

    return (
        <section
            id="testimonials"
            className="relative z-[1] flex min-h-screen flex-col justify-center py-24"
        >
            <div className="mx-auto w-full max-w-[1240px] px-16">
                <RecommendationHeader/>

                <RecommendationSlide
                    slide={slide}
                    cards={currentSlide}
                    t={t}
                />

                <RecommendationControls
                    total={total}
                    active={slide}
                    onPrev={goPrev}
                    onNext={goNext}
                    onSelect={setSlide}
                />
            </div>
        </section>
    )
}
