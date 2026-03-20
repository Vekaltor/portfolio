import CursorCustomIcon from '@assets/icons/cursorCustom.svg?react'
import CursorDefaultIcon from '@assets/icons/cursorDefault.svg?react'

interface CursorSwitcherProps {
    customCursor: boolean
    toggleCursor: () => void
    isMobile?: boolean
}

function CursorSwitcher(props: CursorSwitcherProps) {
    const {customCursor, toggleCursor, isMobile} = props

    const buttonClassName = customCursor
        ? 'w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none border-[var(--accent)] bg-[var(--accentbg)] text-[var(--accent)]'
        : 'w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)]'

    const mobileIconClass = isMobile ? "!w-5 !h-5" : ""
    const mobileButtonClass = isMobile ? "w-[54px] h-[54px]" : ""

    return (
        <button
            onClick={toggleCursor}
            className={buttonClassName + " " + mobileButtonClass}
            title="Toggle cursor"
            type="button"
        >
            {customCursor
                ? <CursorCustomIcon className={mobileIconClass}/>
                : <CursorDefaultIcon className={mobileIconClass}/>
            }
        </button>
    )
}

export default CursorSwitcher
