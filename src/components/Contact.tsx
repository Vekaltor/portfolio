import {FormEvent, useState} from 'react'
import ContactIntro from "./contact/ContactIntro.tsx";
import ContactForm from "./contact/ContactForm.tsx";



export default function Contact() {
    const [sent, setSent] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setSent(true)

        window.setTimeout(() => {
            setSent(false)
        }, 3000)
    }

    return (
        <section
            id="contact"
            className="relative z-[1] flex min-h-screen flex-col justify-center py-16 md:py-24"
        >
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_85%,rgba(74,222,128,.04),transparent)]"/>

            <div
                className="mx-auto grid w-full items-center max-w-[1240px] flex-1 grid-cols-1 gap-16 px-6 md:px-16 min-[980px]:grid-cols-2 min-[980px]:gap-[7rem]">
                <ContactIntro/>
                <div className="hidden min-[980px]:block">
                    <ContactForm sent={sent} onSubmit={handleSubmit}/>
                </div>
            </div>
        </section>
    )
}
