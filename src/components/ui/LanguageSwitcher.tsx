import {classNames} from "../../helpers/classNames.helper.ts";

interface LanguageSwitcherProps {
    lang: 'pl' | 'en'
    toggle: () => void
    isMobile?: boolean
}

function LanguageSwitcher(props: LanguageSwitcherProps) {
    const {lang, toggle, isMobile} = props

    return (
        <button
            onClick={toggle}
            type="button"
            className={classNames(
                "text-[.7rem] font-bold tracking-[.06em] h-[34px] px-[.85rem] rounded-lg border",
                "border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)]",
                "hover:text-[var(--accent)] transition-all cursor-none",
                isMobile && "!h-[54px] !px-[1.7rem] !text-[1rem]"
            )}
        >
            {lang === 'pl' ? 'EN' : 'PL'}
        </button>
    )
}

export default LanguageSwitcher
