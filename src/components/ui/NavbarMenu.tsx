import {useLang} from '../../context/LangContext.tsx'
import {NAV_ITEMS} from '../../constants/navItems.ts'
import type {NavItemKey} from '../../types/navbar.type.ts'

interface NavbarMenuProps {
    onNavigate: () => void
}

function NavbarMenu(props: NavbarMenuProps) {
    const {onNavigate} = props
    const {t} = useLang()

    return (
        <nav aria-label="Main navigation">
            <ul className="flex flex-col gap-5 md:flex-row md:gap-8">
                {NAV_ITEMS.map((item) => {
                    return (
                        <li key={item.key}>
                            <a
                                href={item.href}
                                onClick={onNavigate}
                                className="text-[.83rem] font-medium text-[var(--text2)] hover:text-[var(--text)] transition-colors"
                            >
                                {t(`nav.${item.key}` as `nav.${NavItemKey}`)}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavbarMenu
