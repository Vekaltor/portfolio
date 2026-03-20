import {useEffect, useRef} from 'react'
import type {Particle} from "../../types/particle.interface.ts";
import {createParticle} from "../../helpers/createParticle.helper.ts";


function Sparkles() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const context = canvas.getContext('2d')
        if (!context) return

        let canvasWidth = 0
        let canvasHeight = 0
        let animationFrameId = 0

        const particles: Particle[] = []

        const updateCanvasSize = () => {
            canvasWidth = canvas.width = window.innerWidth
            canvasHeight = canvas.height = window.innerHeight
        }

        const renderFrame = () => {
            context.clearRect(0, 0, canvasWidth, canvasHeight)

            particles.forEach((particle) => {
                particle.update(canvasWidth, canvasHeight)
                particle.draw(context)
            })

            animationFrameId = requestAnimationFrame(renderFrame)
        }

        updateCanvasSize()
        window.addEventListener('resize', updateCanvasSize)

        for (let index = 0; index < 75; index += 1) {
            particles.push(createParticle(canvasWidth, canvasHeight))
        }

        animationFrameId = requestAnimationFrame(renderFrame)

        return () => {
            window.removeEventListener('resize', updateCanvasSize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-50"
        />
    )
}

export default Sparkles
