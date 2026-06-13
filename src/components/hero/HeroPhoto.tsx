import {useEffect, useRef, useState} from 'react'
import useParallaxAnimate from '../../hooks/useParallaxAnimate.hook.ts'
import avatar from '@assets/avatar.webp'

function HeroPhoto() {
    const heroPhotoRef = useRef<HTMLDivElement | null>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const [loaded, setLoaded] = useState(false)

    // Avatar is eager — check synchronously if already in memory cache
    useEffect(() => {
        const img = imgRef.current
        if (img?.complete && img.naturalWidth > 0) setLoaded(true)
    }, [])

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
            <div className="orb-float absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(74,222,128,.13)_0%,transparent_68%)]"/>
            <div className="ring1 absolute inset-0 rounded-full border border-[rgba(74,222,128,.2)]"/>
            <div className="ring2 absolute inset-[-18px] rounded-full border border-dashed border-[rgba(74,222,128,.09)] sm:inset-[-22px] md:inset-[-28px]"/>

            <div className="relative z-[1] h-[188px] w-[188px] sm:h-[220px] sm:w-[220px] md:h-[272px] md:w-[272px]">
                <div
                    aria-hidden="true"
                    className={`sk-shimmer pointer-events-none absolute inset-0 rounded-full transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    ref={imgRef}
                    src={avatar}
                    alt="Kamil Wójcik — Frontend Developer"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    onLoad={() => setLoaded(true)}
                    className={`h-full w-full rounded-full border-[2.5px] border-[rgba(74,222,128,.28)] object-cover object-top transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_0_56px_rgba(74,222,128,.22)] ${loaded ? 'opacity-100' : 'opacity-0'}`}
                />
            </div>
        </div>
    )
}

export default HeroPhoto
