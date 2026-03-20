import { useEffect, useState } from 'react'
import type {Theme} from "../types/theme.type.ts";

function useTheme() {
    const [theme, setTheme] = useState<Theme>('dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return {
        theme,
        setTheme,
        toggleTheme,
    }
}

export default useTheme
