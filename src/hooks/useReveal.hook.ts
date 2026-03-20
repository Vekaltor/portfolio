import {useEffect, useRef} from 'react'

type UseRevealOptions = {
    once?: boolean
    threshold?: number
    rootMargin?: string
    initiallyVisible?: boolean
    visibleClassName?: string
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(options: UseRevealOptions = {}) {
    const {
        once = true,
        threshold = 0.22,
        rootMargin = '0px 0px -15% 0px',
        initiallyVisible = false,
        visibleClassName = 'on',
    } = options

    const ref = useRef<T | null>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        if (initiallyVisible) {
            const rect = el.getBoundingClientRect()
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0

            if (isVisible) {
                el.classList.add(visibleClassName)

                if (once) {
                    return
                }
            }
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                if (!entry) return

                if (entry.isIntersecting) {
                    el.classList.add(visibleClassName)

                    if (once) {
                        observer.disconnect()
                    }
                } else if (!once) {
                    el.classList.remove(visibleClassName)
                }
            },
            {
                threshold,
                rootMargin,
            }
        )

        observer.observe(el)

        return () => {
            observer.disconnect()
        }
    }, [initiallyVisible, once, rootMargin, threshold, visibleClassName])

    return ref
}
