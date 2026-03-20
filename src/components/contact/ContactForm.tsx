import {FormEvent} from "react";
import {useLang} from "../../context/LangContext.tsx";
import {useReveal} from "../../hooks/useReveal.hook.ts";
import Field from "./Field.tsx";

interface ContactFormProps {
    sent: boolean
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function ContactForm(props: ContactFormProps) {
    const { sent, onSubmit } = props
    const { t, lang } = useLang()
    const rightRef = useReveal<HTMLDivElement>()

    return (
        <div ref={rightRef} className="rvr d2 self-end">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
                    <Field label={t('f.name')} type="text" placeholder={t('f.name.ph')} required />
                    <Field label={t('f.email')} type="email" placeholder={t('f.email.ph')} required />
                </div>

                <Field label={t('f.subject')} type="text" placeholder={t('f.subject.ph')} />

                <div className="flex flex-col gap-[.42rem]">
                    <label className="text-[.7rem] font-semibold tracking-[.05em] text-[var(--text2)]">
                        {t('f.msg')}
                    </label>

                    <textarea
                        placeholder={t('f.msg.ph')}
                        required
                        rows={5}
                        className="resize-none rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] px-4 py-[.76rem] font-sans text-[.87rem] text-[var(--text)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(74,222,128,.1)] cursor-none"
                    />
                </div>

                <button
                    type="submit"
                    className="cursor-none flex items-center justify-center gap-[.55rem] rounded-[10px] py-[.82rem] text-[.88rem] font-semibold text-[#050a05] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(74,222,128,.28)]"
                    style={{ background: sent ? 'var(--accentd)' : 'var(--accent)' }}
                >
                    {sent ? `✓ ${lang === 'pl' ? 'Wysłano!' : 'Sent!'}` : t('f.send')}
                </button>
            </form>
        </div>
    )
}

export default ContactForm
