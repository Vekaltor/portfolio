import Divider from '../ui/Divider.tsx'
import Hero from '../Hero'
import About from '../About'
import SoftSkills from '../SoftSkills'
import Work from '../Work'
import Testimonials from '../Testimonials'
import Contact from '../Contact'

function AppContent() {
    return (
        <main className="overflow-hidden w-full max-w-[100svw]">
            <Hero/>
            <Divider/>
            <About/>
            <Divider/>
            <Work/>
            <Divider/>
            <Testimonials/>
            <Divider/>
            <SoftSkills/>
            <Divider/>
            <Contact/>
        </main>
    )
}

export default AppContent
