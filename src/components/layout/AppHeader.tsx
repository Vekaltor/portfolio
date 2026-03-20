import Navbar from '../Navbar'
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";

function AppHeader() {
    const {theme, toggleTheme, toggleCursor, customCursor} = useAppPreferences();

    return (
        <header>
            <Navbar
                theme={theme}
                toggleTheme={toggleTheme}
                customCursor={customCursor}
                toggleCursor={toggleCursor}
            />
        </header>
    )
}

export default AppHeader
