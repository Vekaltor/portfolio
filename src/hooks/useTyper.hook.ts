import { useEffect, useState } from 'react'

export function useTyperHook(vocab: string[]): string {
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const word = vocab[idx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (display.length < word.length) {
        timeout = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), 88)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1900)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 52)
      } else {
        // Avoid synchronous setState inside effect; schedule on next tick.
        timeout = setTimeout(() => {
          setDeleting(false)
          setIdx(prev => (prev + 1) % vocab.length)
        }, 0)
      }
    }
    return () => clearTimeout(timeout)
  }, [display, deleting, idx, vocab])

  return display
}
