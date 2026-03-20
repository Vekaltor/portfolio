export interface Particle {
    x: number
    y: number
    size: number
    velocityX: number
    velocityY: number
    opacity: number
    opacitySpeed: number
    isFadingIn: boolean

    reset(width: number, height: number): void

    update(width: number, height: number): void

    draw(context: CanvasRenderingContext2D): void
}
