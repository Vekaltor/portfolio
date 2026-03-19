import { useEffect, useRef } from 'react'

interface CursorProps {
  customMode: boolean
}

export default function Cursor({ customMode }: CursorProps) {
  const curRef  = useRef<HTMLDivElement>(null)
  const curRRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!customMode) return
    let mx = 0, my = 0, rx = 0, ry = 0, raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      if (curRef.current) {
        curRef.current.style.left  = `${mx}px`
        curRef.current.style.top   = `${my}px`
      }
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      rx += (mx - rx) * 0.28
      ry += (my - ry) * 0.28
      if (curRRef.current) {
        curRRef.current.style.left = `${rx}px`
        curRRef.current.style.top  = `${ry}px`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const addHov = () => document.body.classList.add('hov')
    const rmHov  = () => document.body.classList.remove('hov')
    const els = document.querySelectorAll<HTMLElement>('a, button')
    els.forEach(el => { el.addEventListener('mouseenter', addHov); el.addEventListener('mouseleave', rmHov) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      els.forEach(el => { el.removeEventListener('mouseenter', addHov); el.removeEventListener('mouseleave', rmHov) })
    }
  }, [customMode])

  if (!customMode) return null

  return (
    <>
      <div id="cur"  ref={curRef}  />
      <div id="curR" ref={curRRef} />
    </>
  )
}
