import {useEffect, useState} from "react";
import NavbarLogo from "../ui/NavbarLogo.tsx";
import NavbarMenu from "../ui/NavbarMenu.tsx";
import HeaderControls from "./HeaderControls.tsx";
import MobileMenuButton from "../ui/MobileMenuButton.tsx";
import MobileMenuPanel from "./MobileMenuPanel.tsx";

function AppHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const isHeaderElevated = isScrolled || isMobileMenuOpen

    const toggleMobileMenu = () => setIsMobileMenuOpen((prevState) => !prevState)
    const closeMobileMenu = () => setIsMobileMenuOpen(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, {passive: true})
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', isMobileMenuOpen)
        return () => document.body.classList.remove('overflow-hidden')
    }, [isMobileMenuOpen])

    return (
        <>
            <header
                style={{borderColor: isHeaderElevated ? 'var(--border)' : 'transparent'}}
                className="fixed top-0 left-0 right-0 z-[1000] border-b transition-all duration-400"
            >
                <div
                    style={
                        isHeaderElevated
                            ? {
                                background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
                                backdropFilter: 'blur(24px)',
                            } : {}
                    }
                    className="grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_auto_1fr] items-center px-6 py-[1.1rem] md:px-16 gap-x-4"
                >
                    <div className="justify-self-start">
                        <NavbarLogo/>
                    </div>

                    <div className="hidden md:block justify-self-center">
                        <NavbarMenu onNavigate={closeMobileMenu}/>
                    </div>

                    <div className="hidden md:flex justify-self-end">
                        <HeaderControls/>
                    </div>

                    <div className="md:hidden justify-self-end">
                        <MobileMenuButton
                            isOpen={isMobileMenuOpen}
                            toggleMenu={toggleMobileMenu}
                        />
                    </div>
                </div>
            </header>

            <MobileMenuPanel
                isOpen={isMobileMenuOpen}
                onNavigate={closeMobileMenu}
            />
        </>
    )
}

export default AppHeader
