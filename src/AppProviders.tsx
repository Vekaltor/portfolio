import type {ReactNode} from 'react'
import {LangProvider} from './context/LangContext.tsx'
import {AppPreferencesProvider} from "./context/AppPreferencesContext.tsx";

interface AppProvidersProps {
    children: ReactNode
}

function AppProviders(props: AppProvidersProps) {
    const {children} = props

    return (
        <LangProvider>
            <AppPreferencesProvider>
                {children}
            </AppPreferencesProvider>
        </LangProvider>
    )
}

export default AppProviders
