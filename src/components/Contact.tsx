import {type FormEvent, useState} from 'react'
import {useLang} from '../context/LangContext'
import {useReveal} from '../hooks/useReveal.hook.ts'

import {GITHUB_PATH, LINKEDIN_PATH} from '../data/socialIcons'

import ContactLink from './contact/ContactLink'
import Field from './contact/Field'
import type { ContactLinkItem } from './contact/types'

export default function Contact() {
    const {t, lang} = useLang()
    const leftRef = useReveal<HTMLDivElement>()
    const rightRef = useReveal<HTMLDivElement>()
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSent(true)
        setTimeout(() => setSent(false), 3000)
    }

    const contactLinks: ContactLinkItem[] = [
        {
            href: 'mailto:wojcikkamil2002@gmail.com',
            label: 'wojcikkamil2002@gmail.com',
            icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"
                       strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>,
        },
        {
            href: 'tel:883117883',
            label: '883 117 883',
            icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"
                       strokeLinecap="round" strokeLinejoin="round">
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>,
        },
        {
            href: 'https://linkedin.com/',
            label: 'LinkedIn',
            icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d={LINKEDIN_PATH}/>
            </svg>,
            external: true,
        },
        {
            href: 'https://github.com/',
            label: 'GitHub',
            icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d={GITHUB_PATH}/>
            </svg>,
            external: true,
        },
        {
            href: '/CV_Kamil_Wojcik.pdf',
            label: t('contact.dl'),
            icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"
                       strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>,
            download: true,
        },
    ]

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center relative z-[1] overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{background: 'radial-gradient(ellipse 55% 45% at 50% 85%, rgba(74,222,128,.04), transparent)'}}
            />

            {/* Grid */}
            <div className="grid items-center px-16 py-20 max-w-[1240px] mx-auto w-full flex-1"
                 style={{gridTemplateColumns: '1fr 1fr', gap: '7rem'}}>

                {/* LEFT */}
                <div ref={leftRef} className="rvl">
                    <p className="text-[.67rem] font-bold tracking-[.18em] text-[var(--accent)] uppercase mb-[.65rem]">
                        {t('contact.eyebrow')}
                    </p>
                    <h2
                        className="font-display font-extrabold tracking-[-0.06em] leading-[.9] mb-6"
                        style={{fontSize: 'clamp(2.6rem, 5.5vw, 5rem)'}}
                    >
                        {t('contact.title')}
                        <span style={{color: 'var(--accent)'}}>.</span>
                    </h2>
                    <p className="text-[.94rem] text-[var(--text2)] leading-[1.82] max-w-[360px] mb-8">
                        {t('contact.sub')}
                    </p>
                    <div className="flex flex-col gap-[.7rem]">
                        {contactLinks.map(item => (
                            <ContactLink key={item.label} item={item}/>
                        ))}
                    </div>
                </div>

                {/* RIGHT — Form */}
                <div ref={rightRef} className="rvr d2">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Field label={t('f.name')} type="text" placeholder={t('f.name.ph')} required/>
                            <Field label={t('f.email')} type="email" placeholder={t('f.email.ph')} required/>
                        </div>
                        <Field label={t('f.subject')} type="text" placeholder={t('f.subject.ph')}/>
                        <div className="flex flex-col gap-[.42rem]">
                            <label
                                className="text-[.7rem] font-semibold text-[var(--text2)] tracking-[.05em]">{t('f.msg')}</label>
                            <textarea
                                placeholder={t('f.msg.ph')}
                                required
                                rows={5}
                                className="rounded-[10px] px-4 py-[.76rem] text-[.87rem] text-[var(--text)] outline-none border border-[var(--border)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(74,222,128,.1)] cursor-none transition-all resize-none"
                                style={{background: 'var(--bg2)', fontFamily: 'Inter, sans-serif'}}
                            />
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-[.55rem] text-[.88rem] font-semibold text-[#050a05] py-[.82rem] rounded-[10px] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(74,222,128,.28)] transition-all cursor-none"
                            style={{background: sent ? 'var(--accentd)' : 'var(--accent)'}}
                        >
                            {sent
                                ? `✓ ${lang === 'pl' ? 'Wysłano!' : 'Sent!'}`
                                : t('f.send')}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
