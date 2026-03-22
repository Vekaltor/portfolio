import {FOOTER_NAV_ITEMS} from "../../constants/navItems.ts";
import {useLang} from "../../hooks/useLang.hook.ts";


function FooterNav() {
    const {t} = useLang()

    return (
        <div>
            <p className="mb-[.9rem] text-[.65rem] font-bold uppercase tracking-[.14em] text-[var(--text3)]">
                {t('f3.menu')}
            </p>

            <div className="flex flex-col gap-[.65rem]">
                {FOOTER_NAV_ITEMS.map((item) => {
                    return (
                        <a
                            key={item.key}
                            href={item.href}
                            className="text-[.82rem] font-medium text-[var(--text2)] transition-colors hover:text-[var(--accent)]"
                        >
                            {t(item.key)}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterNav
