import type {NavItem} from "../types/navbar.type.ts";
import type {FooterNavItem} from "../types/footerNavItem.interface.ts";

export const NAV_ITEMS: readonly NavItem[] = [
    { key: 'about', href: '#about' },
    { key: 'work', href: '#work' },
    { key: 'test', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
]

export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.work', href: '#work' },
    { key: 'nav.test', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
]
