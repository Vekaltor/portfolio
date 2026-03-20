import {useEffect, useMemo, useState} from 'react'
import RecommendationSlide from "./recommendations/RecommendationSlide.tsx";
import RecommendationControls from "./recommendations/RecommendationControls.tsx";
import {useReveal} from "../hooks/useReveal.hook.ts";
import {useMediaQuery} from "react-responsive";
import {TESTIMONIALS} from "../constants/content.ts";
import RecommendationHeader from "./recommendations/RecommendationHeader.tsx";
import {chunkArray} from "../helpers/chunkArray.ts";


export default function Recommendations() {
    const headRef = useReveal<HTMLDivElement>()
    const isDesktop = useMediaQuery({minWidth: 900})
    const [slide, setSlide] = useState(0)

    const itemsPerSlide = isDesktop ? 2 : 1

    const slides = useMemo(() => {
        return chunkArray(TESTIMONIALS, itemsPerSlide)
    }, [itemsPerSlide])

    useEffect(() => {
        if (slide > slides.length - 1) {
            setSlide(Math.max(0, slides.length - 1))
        }
    }, [slide, slides.length])

    const total = slides.length
    const currentSlide = slides[slide] ?? []

    const goPrev = () => setSlide((prev) => (prev - 1 + total) % total)
    const goNext = () => setSlide((prev) => (prev + 1) % total)

    return (
        <section
            id="testimonials"
            className="relative z-[1] flex min-h-screen flex-col justify-center py-16 md:py-24"
        >
            <div className="mx-auto w-full max-w-[1240px] px-6 md:px-16">
                <div ref={headRef}>
                    <RecommendationHeader />
                </div>

                <RecommendationSlide
                    slide={slide}
                    cards={currentSlide}
                />

                {total > 1 && (
                    <RecommendationControls
                        total={total}
                        active={slide}
                        onPrev={goPrev}
                        onNext={goNext}
                        onSelect={setSlide}
                    />
                )}
            </div>
        </section>
    )
}
