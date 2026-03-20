import { useEffect } from 'react'

function useActiveScroll() {
    useEffect(() => {
        let scrollTimeoutId: number | null = null

        const handleScroll = () => {
            document.documentElement.classList.add('is-scrolling')
            document.body.classList.add('is-scrolling')

            if (scrollTimeoutId) {
                window.clearTimeout(scrollTimeoutId)
            }

            scrollTimeoutId = window.setTimeout(() => {
                document.documentElement.classList.remove('is-scrolling')
                document.body.classList.remove('is-scrolling')
            }, 220)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)

            if (scrollTimeoutId) {
                window.clearTimeout(scrollTimeoutId)
            }

            document.documentElement.classList.remove('is-scrolling')
            document.body.classList.remove('is-scrolling')
        }
    }, [])
}

export default useActiveScroll
