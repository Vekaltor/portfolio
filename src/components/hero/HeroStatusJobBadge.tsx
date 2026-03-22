import {useLang} from "../../hooks/useLang.hook.ts";

function HeroStatusJobBadge() {
    const { t } = useLang()

    return (
        <div className="badge-el md:mb-[1.4rem] inline-flex items-center gap-2 rounded-full border border-[rgba(74,222,128,.25)] bg-[var(--accentbg)] px-[.85rem] py-[.26rem]">
            <span className="h-[6px] min-w-[6px] w-[6px] animate-pulse rounded-full bg-[var(--accent)]" />
            <span className="text-[.67rem] font-semibold uppercase tracking-[.08em] text-[var(--accent)] whitespace-nowrap">
                {t('hero.badge')}
            </span>
        </div>
    )
}

export default HeroStatusJobBadge
