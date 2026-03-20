import {useLang} from '../../context/LangContext.tsx'
import {NAV_ITEMS} from '../../constants/navItems.ts'
import type {NavItemKey} from '../../types/navbar.type.ts'
import {classNames} from "../../helpers/classNames.helper.ts";
import {useMediaQuery} from "react-responsive";
import {MOBILE_MAX_WIDTH} from "../../constants/breakpoints.ts";

interface NavbarMenuProps {
    onNavigate: () => void
}

function NavbarMenu(props: NavbarMenuProps) {
    const isMobile = useMediaQuery({maxWidth: MOBILE_MAX_WIDTH})
    const {onNavigate} = props
    const {t} = useLang()

    return (
        <nav aria-label="Main navigation">
            <ul
                className={classNames(
                    'flex',
                    isMobile ? 'flex-col gap-3' : 'items-center gap-8'
                )}
            >
                {NAV_ITEMS.map((item, index) => {
                    return (
                        <li key={item.key}>
                            <a
                                href={item.href}
                                onClick={onNavigate}
                                className={classNames(
                                    'group transition-all',
                                    isMobile
                                        ? 'flex items-center justify-between rounded-[20px] border border-transparent px-4 py-4 hover:border-[var(--border)] hover:bg-[rgba(255,255,255,0.025)]'
                                        : 'text-[.83rem] font-medium text-[var(--text2)] hover:text-[var(--text)]'
                                )}
                            >
                                {isMobile ? (
                                    <>
                                        <span
                                            className="text-[1.9rem] leading-[1.02] font-semibold tracking-[-0.045em] text-[var(--text)]">
                                            {t(`nav.${item.key}` as `nav.${NavItemKey}`)}
                                        </span>

                                        <span
                                            className="text-[0.78rem] font-medium text-[var(--text3)] transition-transform duration-300 group-hover:translate-x-1">
                                            0{index + 1}
                                        </span>
                                    </>
                                ) : (
                                    t(`nav.${item.key}` as `nav.${NavItemKey}`)
                                )}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavbarMenu
