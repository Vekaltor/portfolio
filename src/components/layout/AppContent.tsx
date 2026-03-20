import Divider from '../Divider'
import Hero from '../Hero'
import About from '../About'
import SoftSkills from '../SoftSkills'
import Work from '../Work'
import Testimonials from '../Testimonials'
import Contact from '../Contact'

function AppContent() {
    return (
        <main>
            <Hero />
            <Divider />
            <About />
            <Divider />
            <SoftSkills />
            <Divider />
            <Work />
            <Divider />
            <Testimonials />
            <Contact />
        </main>
    )
}

export default AppContent
