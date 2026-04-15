import MoonIcon from '@assets/icons/moon.svg?react'
import SunIcon from '@assets/icons/sun.svg?react'
import type {Theme} from "../../types/theme.type.ts";

interface ThemeSwitcherProps {
    theme: Theme
    toggleTheme: () => void
    isMobile?: boolean
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { theme, toggleTheme, isMobile } = props

    const buttonClassName =
        'w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)]'

    const mobileIconClass = isMobile ? "min-w-5 !w-5 !h-5" : ""
    const mobileButtonClass = isMobile ? "min-w-[50px] w-[50px] h-[50px]" : ""

    return (
        <button onClick={toggleTheme} className={buttonClassName + " " + mobileButtonClass} type="button">
            {theme === 'light'
                ? <MoonIcon className={mobileIconClass}/>
                : <SunIcon className={mobileIconClass}/>
            }
        </button>
    )
}

export default ThemeSwitcher
