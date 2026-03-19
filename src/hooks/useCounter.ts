import { useEffect, useState } from 'react'

export function useCounter(target: number, delay = 600): number {
  const [val, setVal] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => {
      let n = 0
      const step = target / 36
      const interval = setInterval(() => {
        n = Math.min(n + step, target)
        setVal(Math.floor(n))
        if (n >= target) clearInterval(interval)
      }, 32)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(t)
  }, [target, delay])

  return val
}
