import { useRef } from 'react'
import useParallaxAnimate from '../../hooks/useParallaxAnimate.hook.ts'

function HeroPhoto() {
    const heroPhotoRef = useRef<HTMLDivElement | null>(null)

    useParallaxAnimate({
        wrapper: heroPhotoRef.current,
        element: document.getElementById('hero'),
        offsetX: 16,
        offsetY: 10,
        smoothing: 0.2,
    })

    return (
        <div
            ref={heroPhotoRef}
            className="relative flex h-[220px] w-[220px] items-center justify-center will-change-transform sm:h-[260px] sm:w-[260px] md:h-[320px] md:w-[320px]"
        >
            <div className="orb-float absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,.13)_0%,transparent_68%)]" />

            <div className="ring1 absolute inset-0 rounded-full border border-[rgba(74,222,128,.2)]" />

            <div className="ring2 absolute inset-[-18px] rounded-full border border-dashed border-[rgba(74,222,128,.09)] sm:inset-[-22px] md:inset-[-28px]" />

            <img
                src="/avatar.jpg"
                alt="Kamil Wójcik"
                className="relative z-[1] h-[188px] w-[188px] rounded-full border-[2.5px] border-[rgba(74,222,128,.28)] object-cover object-top transition-all duration-400 hover:scale-[1.04] hover:shadow-[0_0_56px_rgba(74,222,128,.22)] sm:h-[220px] sm:w-[220px] md:h-[272px] md:w-[272px]"
            />
        </div>
    )
}

export default HeroPhoto
