import {useRef} from 'react'
import useParallaxAnimate from "../../hooks/useParallaxAnimate.hook.ts";

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
            className="relative flex h-[320px] w-[320px] items-center justify-center will-change-transform"
        >
            <div
                className="orb-float absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,.13)_0%,transparent_68%)]"/>

            <div className="ring1 absolute inset-0 rounded-full border border-[rgba(74,222,128,.2)]"/>

            <div
                className="ring2 absolute inset-[-28px] rounded-full border border-dashed border-[rgba(74,222,128,.09)]"/>

            <img
                src="/avatar.jpg"
                alt="Kamil Wójcik"
                className="relative z-[1] h-[272px] w-[272px] rounded-full border-[2.5px] border-[rgba(74,222,128,.28)] object-cover object-top transition-all duration-400 hover:scale-[1.04] hover:shadow-[0_0_56px_rgba(74,222,128,.22)]"
            />
        </div>
    )
}

export default HeroPhoto
