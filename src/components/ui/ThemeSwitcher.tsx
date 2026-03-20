import type { Theme } from '../../types'
import { MoonIcon, SunIcon } from './NavbarIcons.tsx'

interface ThemeSwitcherProps {
    theme: Theme
    toggleTheme: () => void
}

function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { theme, toggleTheme } = props

    const buttonClassName =
        'w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)]'

    return (
        <button onClick={toggleTheme} className={buttonClassName} type="button">
            {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}

export default ThemeSwitcher
