import SectionLabel from "./SectionLabel.tsx";
import IconGrid from "./IconGrid.tsx";
import {FW_ICONS, LANG_ICONS, LEARN_ICONS, TOOL_ICONS} from "../../constants/content.ts";
import type {TechIcon} from "../../types/techIcon.interface.ts";
import type {TranslationKey} from "../../data/i18n.ts";
import {useLang} from "../../hooks/useLang.hook.ts";

const STACK_SECTIONS: { key: TranslationKey; icons: TechIcon[] }[] = [
    {key: 'stack.cat.lang', icons: LANG_ICONS},
    {key: 'stack.cat.fw', icons: FW_ICONS},
    {key: 'stack.cat.tools', icons: TOOL_ICONS},
    {key: 'stack.cat.learn', icons: LEARN_ICONS},
]

export default function TechStack() {
    const {t} = useLang();

    return (
        <div>
            {STACK_SECTIONS.map(({key, icons}) => (
                <div className="mb-10" key={key}>
                    <SectionLabel>{t(key)}</SectionLabel>
                    <IconGrid items={icons}/>
                </div>
            ))}

            <p
                className="mt-24 text-center text-[.9rem] italic leading-[1.7] text-[var(--text3)]"
                dangerouslySetInnerHTML={{__html: t('stack.motivational')}}
            />
        </div>
    )
}
