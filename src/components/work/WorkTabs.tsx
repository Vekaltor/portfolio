import type {TranslationKey} from '../../data/i18n'
import type {Dispatch, SetStateAction} from "react";
import type {TabId} from "../../types/work-tabs-ids.type.ts";
import {useLang} from "../../hooks/useLang.hook.ts";

type Props = {
    tab: TabId
    setTab: Dispatch<SetStateAction<TabId>>
}

const tabs: { id: TabId; labelKey: TranslationKey }[] = [
    {id: 'projects', labelKey: 'tab.proj'},
    {id: 'stack', labelKey: 'tab.stack'},
    {id: 'certs', labelKey: 'tab.certs'},
]

export default function WorkTabs({tab, setTab}: Props) {
    const {t} = useLang()

    return (
        <div className="mb-14 flex w-fit gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg2)] p-[.32rem] flex-wrap">
            {tabs.map((tb) => {
                const isActive = tab === tb.id

                return (
                    <button
                        key={tb.id}
                        type="button"
                        onClick={() => setTab(tb.id)}
                        className={[
                            'cursor-none rounded-[9px] px-[1.35rem] py-[.52rem] text-[.82rem] font-semibold transition-all w-full min-[455px]:w-fit',
                            isActive
                                ? 'bg-[var(--accent)] text-[#050a05]'
                                : 'text-[var(--text2)] hover:bg-[var(--bg3)] hover:text-[var(--text)]',
                        ].join(' ')}
                    >
                        {t(tb.labelKey)}
                    </button>
                )
            })}
        </div>
    )
}
