import { useLang } from '../../context/LangContext'

function HeroActions() {
    const { t } = useLang()

    return (
        <div className="hero-init hi4 mb-8 flex flex-wrap gap-[.85rem] justify-end md:justify-start">
            <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--accent)] px-[1.55rem] py-[.72rem] text-[.88rem] font-semibold text-[#050a05] transition-all hover:-translate-y-0.5 hover:bg-[var(--accentd)] hover:shadow-[0_12px_30px_rgba(74,222,128,.28)]"
            >
                {t('hero.cta1')}
            </a>

            <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-[var(--border2)] px-[1.55rem] py-[.72rem] text-[.88rem] font-medium text-[var(--text2)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
                {t('hero.cta2')}
            </a>
        </div>
    )
}

export default HeroActions
