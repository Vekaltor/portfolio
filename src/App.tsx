import {useState} from 'react'
import './App.css'
import Divider from "./components/Divider.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import SoftSkills from "./components/SoftSkills.tsx";
import Work from "./components/Work.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Contact from "./components/Contact.tsx";
import Navbar from "./components/Navbar.tsx";
import Cursor from "./components/Cursor.tsx";
import Sparkles from "./components/Sparkles.tsx";
import {LangProvider} from "./context/LangContext.tsx";
import type {Theme} from "./types";

function App() {
    const [theme, setTheme] = useState<Theme>('dark')
    const [customCursor, setCustomCursor] = useState(true)

    const toggleTheme = () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark'
        setTheme(next)
        document.documentElement.setAttribute('data-theme', next)
    }

    const toggleCursor = () => {
        const next = !customCursor
        setCustomCursor(next)
        document.body.classList.toggle('default-cursor', !next)
    }

    return (
        <LangProvider>
            <Sparkles/>
            <Cursor customMode={customCursor}/>
            <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                customCursor={customCursor}
                toggleCursor={toggleCursor}
            />
            <main>
                <Hero/>
                <Divider/>
                <About/>
                <Divider/>
                <SoftSkills/>
                <Divider/>
                <Work/>
                <Divider/>
                <Testimonials/>
                <Contact/>
            </main>
        </LangProvider>
    )
}

export default App
