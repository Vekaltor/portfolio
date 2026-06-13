import { lazy, Suspense } from 'react'
import Divider from '../ui/Divider.tsx'
import Hero from '../Hero'
import About from '../About'

// Sekcje below-fold ładowane leniwie — nie blokują pierwszego renderowania
const Work            = lazy(() => import('../Work'))
const Recommendations = lazy(() => import('../Recommendations'))
const SoftSkills      = lazy(() => import('../SoftSkills'))
const Contact         = lazy(() => import('../Contact'))

function AppContent() {
    return (
        <main className="overflow-hidden w-full max-w-[100svw]">
            <Hero/>
            <Divider/>
            <About/>
            <Divider/>
            <Suspense>
                <Work/>
            </Suspense>
            <Divider/>
            <Suspense>
                <Recommendations/>
            </Suspense>
            <Divider/>
            <Suspense>
                <SoftSkills/>
            </Suspense>
            <Divider/>
            <Suspense>
                <Contact/>
            </Suspense>
        </main>
    )
}

export default AppContent
