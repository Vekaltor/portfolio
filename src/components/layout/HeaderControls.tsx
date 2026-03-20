import ThemeSwitcher from '../ui/ThemeSwitcher.tsx'
import LanguageSwitcher from '../ui/LanguageSwitcher.tsx'
import DownloadCvButton from '../ui/DownloadCvButton.tsx'
import CursorSwitcher from "../ui/CursorSwitch.tsx";
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";
import {useLang} from "../../context/LangContext.tsx";
import {classNames} from "../../helpers/classNames.helper.ts";
import {useMediaQuery} from "react-responsive";
import {MOBILE_MAX_WIDTH} from "../../constants/breakpoints.ts";


function HeaderControls() {
    const {theme, toggleTheme, customCursor, toggleCursor} = useAppPreferences();
    const {lang, toggle} = useLang()
    const isMobile = useMediaQuery({maxWidth: MOBILE_MAX_WIDTH})

    return (
        <div
            className={classNames(
                'flex items-center',
                isMobile ? 'flex-wrap gap-3' : 'gap-[.55rem]'
            )}
        >
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
            <CursorSwitcher customCursor={customCursor} toggleCursor={toggleCursor} />
            <LanguageSwitcher lang={lang} toggle={toggle} />
            <DownloadCvButton isMobile={isMobile} />
        </div>
    )
}

export default HeaderControls
