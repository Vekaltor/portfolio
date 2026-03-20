import { CursorCustomIcon, CursorDefaultIcon } from './NavbarIcons.tsx'

interface CursorSwitcherProps {
    customCursor: boolean
    toggleCursor: () => void
}

function CursorSwitcher(props: CursorSwitcherProps) {
    const { customCursor, toggleCursor } = props

    const buttonClassName = customCursor
        ? 'w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none border-[var(--accent)] bg-[var(--accentbg)] text-[var(--accent)]'
        : 'w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)]'

    return (
        <button
            onClick={toggleCursor}
            className={buttonClassName}
            title="Toggle cursor"
            type="button"
        >
            {customCursor ? <CursorCustomIcon /> : <CursorDefaultIcon />}
        </button>
    )
}

export default CursorSwitcher
