import {useContext} from "react";
import {AppPreferencesContext} from "../context/AppPreferencesContext.tsx";

function useAppPreferences() {
    const context = useContext(AppPreferencesContext)

    if (!context) {
        throw new Error('useAppPreferences must be used within AppPreferencesProvider')
    }

    return context
}

export default useAppPreferences;
