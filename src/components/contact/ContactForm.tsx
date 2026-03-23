import {useReveal} from "../../hooks/useReveal.hook.ts"
import {useLang} from "../../hooks/useLang.hook.ts"
import {useForm} from "react-hook-form"
import emailjs from "@emailjs/browser"
import {useState} from "react"
import Field from "./Field.tsx"
import {contactSchema} from "../../constants/contact.schema.ts"
import type {ContactFormData} from "../../constants/contact.schema.ts"
import {yupResolver} from "@hookform/resolvers/yup"


function ContactForm() {
    const {t, lang} = useLang()
    const rightRef = useReveal<HTMLDivElement>()
    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const {register, handleSubmit, formState: {errors}, reset} = (useForm as any)({
        resolver: yupResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setSending(true)
        setError(null)
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject ?? '',
                    message: data.message,
                    time: new Date().toLocaleString('pl-PL'),
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            setSent(true)
            reset()
        } catch {
            setError(lang === 'pl' ? 'Błąd wysyłania. Spróbuj ponownie.' : 'Send failed. Please try again.')
        } finally {
            setSending(false)
        }
    }

    return (
        <div ref={rightRef} className="rvr d2 self-end">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
                    <Field
                        label={t('f.name')}
                        type="text"
                        placeholder={t('f.name.ph')}
                        error={errors.name?.message}
                        {...register("name")}
                    />
                    <Field
                        label={t('f.email')}
                        type="text"
                        placeholder={t('f.email.ph')}
                        error={errors.email?.message}
                        {...register('email')}
                    />
                </div>

                <Field
                    label={t('f.subject')}
                    type="text"
                    placeholder={t('f.subject.ph')}
                    {...register('subject')}
                />

                <div className="flex flex-col gap-[.42rem]">
                    <label className="text-[.7rem] font-semibold tracking-[.05em] text-[var(--text2)]">
                        {t('f.msg')}
                    </label>
                    <textarea
                        placeholder={t('f.msg.ph')}
                        rows={5}
                        {...register('message')}
                        className="resize-none rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] px-4 py-[.76rem] font-sans text-[.87rem] text-[var(--text)] outline-none transition-all focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(74,222,128,.1)] cursor-none"
                    />
                    {errors.message && (
                        <span className="text-red-400 text-[.75rem]">{errors.message.message}</span>
                    )}
                </div>

                {error && <span className="text-red-400 text-[.75rem]">{error}</span>}

                <button
                    type="submit"
                    disabled={sending || sent}
                    className="cursor-none flex items-center justify-center gap-[.55rem] rounded-[10px] py-[.82rem] text-[.88rem] font-semibold text-[#050a05] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(74,222,128,.28)] disabled:opacity-70"
                    style={{background: sent ? 'var(--accentd)' : 'var(--accent)'}}
                >
                    {sending
                        ? (lang === 'pl' ? 'Wysyłanie...' : 'Sending...')
                        : sent
                            ? `✓ ${lang === 'pl' ? 'Wysłano!' : 'Sent!'}`
                            : t('f.send')
                    }
                </button>
            </form>
        </div>
    )
}

export default ContactForm
