interface LanguageSwitcherProps {
    lang: 'pl' | 'en'
    toggle: () => void
}

function LanguageSwitcher(props: LanguageSwitcherProps) {
    const {lang, toggle} = props

    return (
        <button
            onClick={toggle}
            type="button"
            className="text-[.7rem] font-bold tracking-[.06em] h-[34px] px-[.85rem] rounded-lg border border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-none"
        >
            {lang === 'pl' ? 'EN' : 'PL'}
        </button>
    )
}

export default LanguageSwitcher
