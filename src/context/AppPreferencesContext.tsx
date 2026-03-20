import type {Theme} from '../types'
import useTheme from "../hooks/useTheme.hook.ts";
import useCursor from "../hooks/useCursor.hook.ts";
import type {Dispatch, ReactNode, SetStateAction} from "react";
import {createContext} from "react";

interface AppUIContextValue {
    theme: Theme
    setTheme: Dispatch<SetStateAction<Theme>>
    toggleTheme: () => void
    customCursor: boolean
    setCustomCursor: Dispatch<SetStateAction<boolean>>
    toggleCursor: () => void
}

interface AppUIProviderProps {
    children: ReactNode
}

export const AppPreferencesContext = createContext<AppUIContextValue | null>(null)

export const AppPreferencesProvider = (props: AppUIProviderProps) => {
    const {children} = props

    const {theme, setTheme, toggleTheme} = useTheme()
    const {customCursor, setCustomCursor, toggleCursor} = useCursor()

    return (
        <AppPreferencesContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
                customCursor,
                setCustomCursor,
                toggleCursor,
            }}
        >
            {children}
        </AppPreferencesContext.Provider>
    )
}
