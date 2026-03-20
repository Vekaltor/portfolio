import { useLang } from '../../context/LangContext'

function FooterIdentity() {
    const { t } = useLang()

    return (
        <div>
            <p className="text-[.92rem] font-bold tracking-[-0.02em] text-[var(--text)]">
                Kamil Wójcik
            </p>
            <p className="mt-[.2rem] text-[.74rem] text-[var(--text3)]">
                <span className="text-[var(--text2)]"># </span>Frontend Developer
            </p>
            <p className="mt-[.2rem] text-[.74rem] text-[var(--text3)]">
                <span className="text-[var(--text2)]"># </span>React Developer
            </p>
            <p className="mt-[.2rem] text-[.74rem] text-[var(--text3)]">
                <span className="text-[var(--text2)]"># </span>Angular Developer
            </p>
        </div>
    )
}

export default FooterIdentity
