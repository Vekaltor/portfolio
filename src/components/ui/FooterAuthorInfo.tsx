import {useLang} from "../../context/LangContext.tsx";

function FooterAuthorInfo(){
    const {t} = useLang()

    return (
        <div className="pb-8 text-center">
            <p className="text-[.8rem] tracking-[.02em] text-[var(--text3)]">
                {t('footer.made')}
            </p>
        </div>
    )
}

export default FooterAuthorInfo
