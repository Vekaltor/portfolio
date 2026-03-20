import { useEffect, useRef } from 'react'
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";

function Cursor() {
    const { customCursor } = useAppPreferences()

    const cursorDotRef = useRef<HTMLDivElement | null>(null)
    const cursorRingRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!customCursor) {
            return
        }

        let mouseX = 0
        let mouseY = 0
        let ringX = 0
        let ringY = 0
        let animationFrameId = 0

        const handleMouseMove = (event: MouseEvent) => {
            mouseX = event.clientX
            mouseY = event.clientY

            if (cursorDotRef.current && "style" in cursorDotRef.current) {
                cursorDotRef.current.style.left = `${mouseX}px`
                cursorDotRef.current.style.top = `${mouseY}px`
            }
        }

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.28
            ringY += (mouseY - ringY) * 0.28

            if (cursorRingRef.current && "style" in cursorRingRef.current) {
                cursorRingRef.current.style.left = `${ringX}px`
                cursorRingRef.current.style.top = `${ringY}px`
            }

            animationFrameId = requestAnimationFrame(animateRing)
        }

        const handleInteractiveEnter = () => document.body.classList.add('hov')
        const handleInteractiveLeave = () => document.body.classList.remove('hov')

        const interactiveElements = document.querySelectorAll<HTMLElement>('a, button')

        document.addEventListener('mousemove', handleMouseMove)
        animationFrameId = requestAnimationFrame(animateRing)

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleInteractiveEnter)
            element.addEventListener('mouseleave', handleInteractiveLeave)
        })

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)

            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleInteractiveEnter)
                element.removeEventListener('mouseleave', handleInteractiveLeave)
            })

            document.body.classList.remove('hov')
        }
    }, [customCursor])

    if (!customCursor) return null

    return (
        <>
            <div id="cur" ref={cursorDotRef} />
            <div id="curR" ref={cursorRingRef} />
        </>
    )
}

export default Cursor
