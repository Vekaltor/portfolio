import {useLang} from "../../context/LangContext.tsx";
import {useReveal} from "../../hooks/useReveal.hook.ts";
import ContactLink from "./ContactLink.tsx";
import MailIcon from '@assets/icons/mail.svg?react'
import PhoneIcon from '@assets/icons/phone.svg?react'
import LinkedinIcon from '@assets/icons/linkedin.svg?react'
import GithubIcon from '@assets/icons/github.svg?react'
import DownloadIcon from '@assets/icons/download.svg?react'
import ContactForm from "./ContactForm.tsx";
import type {FormEvent} from "react";

interface ContactIntroProps {
    sent: boolean
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function ContactIntro(props: ContactIntroProps) {
    const {t} = useLang()
    const leftRef = useReveal<HTMLDivElement>()

    return (
        <div ref={leftRef} className="rvl">
            <p className="mb-[.65rem] text-[.67rem] font-bold uppercase tracking-[.18em] text-[var(--accent)]">
                {t('contact.eyebrow')}
            </p>

            <h2 className="mb-6 font-display text-[clamp(2.6rem,5.5vw,5rem)] font-extrabold leading-[.9] tracking-[-0.06em]">
                {t('contact.title')}
                <span className="text-[var(--accent)]">.</span>
            </h2>

            <p className="mb-8 max-w-[360px] text-[.94rem] leading-[1.82] text-[var(--text2)]">
                {t('contact.sub')}
            </p>

            <div className="block min-[980px]:hidden mb-16 min-[980px]:mb-0">
                <ContactForm {...props}/>
            </div>

            <div className="flex flex-col gap-[.7rem]">
                <ContactLink
                    item={{
                        href: 'mailto:wojcikkamil2002@gmail.com',
                        label: 'wojcikkamil2002@gmail.com',
                        icon: <MailIcon className="h-4 w-4"/>,
                    }}
                />

                <ContactLink
                    item={{
                        href: 'tel:883117883',
                        label: '883 117 883',
                        icon: <PhoneIcon className="h-4 w-4"/>,
                    }}
                />

                <ContactLink
                    item={{
                        href: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276/',
                        label: 'LinkedIn',
                        icon: <LinkedinIcon className="h-4 w-4"/>,
                        external: true,
                    }}
                />

                <ContactLink
                    item={{
                        href: 'https://github.com/Vekaltor',
                        label: 'GitHub',
                        icon: <GithubIcon className="h-4 w-4"/>,
                        external: true,
                    }}
                />

                <ContactLink
                    item={{
                        href: '/CV_Kamil_Wojcik.pdf',
                        label: t('contact.dl'),
                        icon: <DownloadIcon className="h-4 w-4 text-[var(--accent)]"/>,
                        download: true,
                    }}
                />
            </div>
        </div>
    )
}

export default ContactIntro
