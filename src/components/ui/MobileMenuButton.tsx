import {classNames} from "../../helpers/classNames.helper.ts";
import CloseIcon from '@assets/icons/close.svg?react'
import MenuIcon from '@assets/icons/menu.svg?react'

interface MobileMenuButtonProps {
    isOpen: boolean
    toggleMenu: () => void
}

function MobileMenuButton(props: MobileMenuButtonProps) {
    const {isOpen, toggleMenu} = props

    return (
        <button
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isOpen}
            className={classNames(
                "flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-[var(--border2)]",
                "text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
            )}
        >
            {isOpen ? <CloseIcon/> : <MenuIcon/>}
        </button>
    )
}


export default MobileMenuButton
