export type NavItem = {
    key: 'about' | 'work' | 'test' | 'contact'
    href: string
}

export type NavItemKey = NavItem['key']
