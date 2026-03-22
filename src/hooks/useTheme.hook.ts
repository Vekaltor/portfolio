import {useEffect, useState} from 'react'
import type {Theme} from "../types/theme.type.ts";
import localStorageService from "../helpers/local-storage.service.ts";
import {LocalStorageKeys} from "../types/local-storage-keys.enum.ts";

function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorageService.get<Theme>(LocalStorageKeys.THEME)
        return saved === 'light' || saved === 'dark' ? saved : 'dark'
    })

    const toggleTheme = () => {
        setTheme((prev) => {
            const next: Theme = prev === 'dark' ? 'light' : 'dark'
            localStorageService.save(LocalStorageKeys.THEME, next)
            return next
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return {
        theme,
        setTheme,
        toggleTheme,
    }
}

export default useTheme
