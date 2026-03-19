import {type FormEvent, useState} from 'react'
import {useLang} from '../context/LangContext'
import {useReveal} from '../hooks/useReveal'
import type {TranslationKey} from '../data/i18n'

const GH = 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z'
const LI = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'

interface ContactLinkItem {
    href: string
    label: string
    icon: React.ReactNode
    external?: boolean
    download?: boolean
}

function ContactLink({item}: { item: ContactLinkItem }) {
    return (
        <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            download={item.download || undefined}
            className="flex items-center gap-[.85rem] px-4 py-[.85rem] rounded-xl border border-[var(--border)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:translate-x-[6px] transition-all"
            style={{background: 'var(--bg2)'}}
        >
            {item.icon}
            <span className="text-[.84rem] font-medium">{item.label}</span>
        </a>
    )
}

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
                <path d={LI}/>
            </svg>,
            external: true,
        },
        {
            href: 'https://github.com/',
            label: 'GitHub',
            icon: <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d={GH}/>
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

    const NAV_ITEMS: { key: TranslationKey; href: string }[] = [
        {key: 'nav.home', href: '#hero'},
        {key: 'nav.about', href: '#about'},
        {key: 'nav.work', href: '#work'},
        {key: 'nav.test', href: '#testimonials'},
        {key: 'nav.contact', href: '#contact'},
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

            {/* FOOTER */}
            <footer
                className="border-t max-w-[1240px] mx-auto w-full px-16 pt-16"
                style={{borderColor: 'var(--border)'}}
            >
                {/* Top row */}
                <div className="grid grid-cols-2 gap-16 pb-12 mb-10"
                     style={{borderBottom: '1px solid var(--border)'}}>
                    <div>
                        <h3
                            className="font-display font-extrabold tracking-[-0.05em] leading-none mb-3"
                            style={{fontSize: 'clamp(1.8rem, 3vw, 2.8rem)'}}
                            dangerouslySetInnerHTML={{__html: t('footer.title')}}
                        />
                        <p className="text-[.88rem] text-[var(--text2)] leading-[1.75] max-w-[340px]">
                            {t('footer.tagline')}
                        </p>
                    </div>
                    <div className="text-right">
                        <div
                            className="inline-flex items-center gap-2 text-[.74rem] font-semibold text-[var(--accent)] mb-2">
              <span className="w-[6px] h-[6px] rounded-full bg-[var(--accent)]"
                    style={{animation: 'bpulse 2s ease-in-out infinite'}}/>
                            {t('footer.status')}
                        </div>
                        <p className="text-[.8rem] text-[var(--text3)] leading-[1.75]">{t('footer.location')}</p>
                        <p className="text-[.8rem] text-[var(--text3)] mt-[.4rem]">wojcikkamil2002@gmail.com</p>
                    </div>
                </div>

                {/* 3-col */}
                <div className="flex justify-between pb-8 mb-6"
                     style={{borderBottom: '1px solid var(--border)'}}>
                    {/* Name */}
                    <div>
                        <p className="text-[.92rem] font-bold text-[var(--text)] tracking-[-0.02em]">Kamil Wójcik</p>
                        <p className="text-[.74rem] text-[var(--text3)] mt-[.2rem]">{t('f3.role')}</p>
                    </div>

                    {/* Nav */}
                    <div>
                        <p className="text-[.65rem] font-bold tracking-[.14em] text-[var(--text3)] uppercase mb-[.9rem]">
                            {t('f3.menu')}
                        </p>
                        <div className="flex flex-col gap-[.65rem]">
                            {NAV_ITEMS.map(item => (
                                <a key={item.key} href={item.href}
                                   className="text-[.82rem] font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-colors">
                                    {t(item.key)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div>
                        <p className="text-[.65rem] font-bold tracking-[.14em] text-[var(--text3)] uppercase mb-[.9rem]">
                            {t('f3.socials')}
                        </p>
                        <div className="flex flex-col gap-[.65rem]">
                            <FooterSocialLink href="https://github.com/" label="GitHub" path={GH}/>
                            <FooterSocialLink href="https://linkedin.com/" label="LinkedIn" path={LI}/>
                            <a href="/CV_Kamil_Wojcik.pdf" download
                               className="inline-flex items-center gap-[.55rem] text-[.82rem] font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-colors">
                                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                                {t('footer.nav.cv')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Made with */}
                <div className="text-center pb-8">
                    <p className="text-[.8rem] text-[var(--text3)] tracking-[.02em]">{t('footer.made')}</p>
                </div>
            </footer>
        </section>
    )
}

/* ── Helpers ── */
interface FieldProps {
    label: string
    type: string
    placeholder: string
    required?: boolean
}

function Field({label, type, placeholder, required}: FieldProps) {
    return (
        <div className="flex flex-col gap-[.42rem]">
            <label className="text-[.7rem] font-semibold text-[var(--text2)] tracking-[.05em]">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                required={required}
                className="rounded-[10px] px-4 py-[.76rem] text-[.87rem] text-[var(--text)] outline-none border border-[var(--border)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(74,222,128,.1)] cursor-none transition-all"
                style={{background: 'var(--bg2)', fontFamily: 'Inter, sans-serif'}}
            />
        </div>
    )
}

function FooterSocialLink({href, label, path}: { href: string; label: string; path: string }) {
    return (
        <a href={href} target="_blank" rel="noreferrer"
           className="inline-flex items-center gap-[.55rem] text-[.82rem] font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-colors">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d={path}/>
            </svg>
            {label}
        </a>
    )
}
