import type {Particle} from "../types/particle.interface.ts";

export function createParticle(width: number, height: number): Particle {
    const particle: Particle = {
        x: 0,
        y: 0,
        size: 0,
        velocityX: 0,
        velocityY: 0,
        opacity: 0,
        opacitySpeed: 0,
        isFadingIn: false,

        reset(canvasWidth, canvasHeight) {
            this.x = Math.random() * canvasWidth
            this.y = Math.random() * canvasHeight
            this.size = Math.random() * 1.5 + 0.3
            this.velocityX = (Math.random() - 0.5) * 0.28
            this.velocityY = (Math.random() - 0.5) * 0.28
            this.opacity = Math.random()
            this.opacitySpeed = Math.random() * 0.003 + 0.0012
            this.isFadingIn = Math.random() > 0.5
        },

        update(canvasWidth, canvasHeight) {
            this.x += this.velocityX
            this.y += this.velocityY

            if (this.isFadingIn) {
                this.opacity += this.opacitySpeed

                if (this.opacity >= 1) {
                    this.isFadingIn = false
                }
            } else {
                this.opacity -= this.opacitySpeed

                if (this.opacity <= 0) {
                    this.reset(canvasWidth, canvasHeight)
                }
            }

            if (this.x < 0) {
                this.x = canvasWidth
            }

            if (this.x > canvasWidth) {
                this.x = 0
            }

            if (this.y < 0) {
                this.y = canvasHeight
            }

            if (this.y > canvasHeight) {
                this.y = 0
            }
        },

        draw(context) {
            context.beginPath()
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            context.fillStyle = `rgba(74, 222, 128, ${this.opacity * 0.55})`
            context.fill()
        },
    }

    particle.reset(width, height)

    return particle
}
