import ThemeSwitcher from '../ui/ThemeSwitcher.tsx'
import LanguageSwitcher from '../ui/LanguageSwitcher.tsx'
import DownloadCvButton from '../ui/DownloadCvButton.tsx'
import CursorSwitcher from "../ui/CursorSwitch.tsx";
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";
import {useLang} from "../../context/LangContext.tsx";


function HeaderControls() {
    const {theme, toggleTheme, customCursor, toggleCursor} = useAppPreferences();
    const {lang, toggle} = useLang()

    return (
        <div className="flex gap-[.55rem] items-center justify-self-end">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme}/>
            <CursorSwitcher customCursor={customCursor} toggleCursor={toggleCursor}/>
            <LanguageSwitcher lang={lang} toggle={toggle}/>
            <DownloadCvButton/>
        </div>
    )
}

export default HeaderControls
