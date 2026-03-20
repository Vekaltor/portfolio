import AboutTimeline from './about/AboutTimeline'
import AboutMe from "./about/AboutMe.tsx";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center py-16 md:py-24">
            <div className="max-w-[1240px] mx-auto px-6 md:px-16 w-full">
                <div className="grid gap-x-20  items-start grid-cols-[1fr] md:grid-cols-[1fr_1.8fr]">
                    <AboutMe/>
                    <AboutTimeline/>
                </div>
            </div>
        </section>
    )
}
