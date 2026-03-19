import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; sz: number
  vx: number; vy: number; a: number; da: number; up: boolean
  reset(w: number, h: number): void
  update(w: number, h: number): void
  draw(ctx: CanvasRenderingContext2D): void
}

function makeParticle(w: number, h: number): Particle {
  const p: Particle = {
    x: 0, y: 0, sz: 0, vx: 0, vy: 0, a: 0, da: 0, up: false,
    reset(pw, ph) {
      this.x = Math.random() * pw; this.y = Math.random() * ph
      this.sz = Math.random() * 1.5 + 0.3
      this.vx = (Math.random() - 0.5) * 0.28
      this.vy = (Math.random() - 0.5) * 0.28
      this.a = Math.random(); this.da = Math.random() * 0.003 + 0.0012
      this.up = Math.random() > 0.5
    },
    update(pw, ph) {
      this.x += this.vx; this.y += this.vy
      this.up ? (this.a += this.da, this.a >= 1 && (this.up = false)) : (this.a -= this.da, this.a <= 0 && this.reset(pw, ph))
      if (this.x < 0) this.x = pw; if (this.x > pw) this.x = 0
      if (this.y < 0) this.y = ph; if (this.y > ph) this.y = 0
    },
    draw(ctx) {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.sz, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(74,222,128,${this.a * 0.55})`
      ctx.fill()
    },
  }
  p.reset(w, h)
  return p
}

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let w = 0, h = 0, particles: Particle[] = []
    let raf: number

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 75; i++) particles.push(makeParticle(w, h))

    const loop = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => { p.update(w, h); p.draw(ctx) })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  )
}
