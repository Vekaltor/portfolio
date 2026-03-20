import { useEffect } from 'react'

interface UseParallaxAnimateProps {
    wrapper: HTMLDivElement | null
    element: HTMLElement | null
    offsetX?: number
    offsetY?: number
    smoothing?: number
}

function useParallaxAnimate(props: UseParallaxAnimateProps) {
    const {
        wrapper,
        element,
        offsetX = 12,
        offsetY = 8,
        smoothing = 0.12,
    } = props

    useEffect(() => {
        if (!wrapper || !element) {
            return
        }

        if (window.matchMedia('(pointer: coarse)').matches) {
            return
        }

        let animationFrameId = 0

        let targetX = 0
        let targetY = 0
        let currentX = 0
        let currentY = 0

        let heroBounds = element.getBoundingClientRect()

        const updateBounds = () => {
            heroBounds = element.getBoundingClientRect()
        }

        const animate = () => {
            currentX += (targetX - currentX) * smoothing
            currentY += (targetY - currentY) * smoothing

            wrapper.style.transform = `translate(${currentX}px, ${currentY}px)`

            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseEnter = () => {
            updateBounds()
        }

        const handleMouseMove = (event: MouseEvent) => {
            const deltaX =
                (event.clientX - (heroBounds.left + heroBounds.width / 2)) /
                heroBounds.width

            const deltaY =
                (event.clientY - (heroBounds.top + heroBounds.height / 2)) /
                heroBounds.height

            targetX = deltaX * offsetX
            targetY = deltaY * offsetY
        }

        const handleMouseLeave = () => {
            targetX = 0
            targetY = 0
        }

        window.addEventListener('resize', updateBounds)
        element.addEventListener('mouseenter', handleMouseEnter)
        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        animationFrameId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('resize', updateBounds)
            element.removeEventListener('mouseenter', handleMouseEnter)
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)

            cancelAnimationFrame(animationFrameId)
            wrapper.style.transform = ''
        }
    }, [wrapper, element, offsetX, offsetY, smoothing])
}

export default useParallaxAnimate
