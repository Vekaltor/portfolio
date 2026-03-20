import ThemeSwitcher from '../ui/ThemeSwitcher.tsx'
import LanguageSwitcher from '../ui/LanguageSwitcher.tsx'
import DownloadCvButton from '../ui/DownloadCvButton.tsx'
import CursorSwitcher from "../ui/CursorSwitch.tsx";
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";
import {useLang} from "../../context/LangContext.tsx";
import {useMediaQuery} from "react-responsive";
import {MOBILE_MAX_WIDTH} from "../../constants/breakpoints.ts";


function HeaderControls() {
    const {theme, toggleTheme, customCursor, toggleCursor} = useAppPreferences();
    const {lang, toggle} = useLang()
    const isMobile = useMediaQuery({maxWidth: MOBILE_MAX_WIDTH})

    if (isMobile) {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3 justify-end">
                    <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} isMobile={true}/>
                    <CursorSwitcher customCursor={customCursor} toggleCursor={toggleCursor} isMobile={true}/>
                    <LanguageSwitcher lang={lang} toggle={toggle} isMobile={true}/>
                </div>
                <DownloadCvButton isMobile={true}/>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-[.55rem]">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme}/>
            <CursorSwitcher customCursor={customCursor} toggleCursor={toggleCursor}/>
            <LanguageSwitcher lang={lang} toggle={toggle}/>
            <DownloadCvButton/>
        </div>
    )
}

export default HeaderControls
