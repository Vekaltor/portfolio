import { useLang } from '../../context/LangContext'

function FooterIntro() {
    const { t } = useLang()

    return (
        <div className="mb-10 grid grid-cols-1 gap-10 border-b border-[var(--border)] pb-12 md:grid-cols-2 md:gap-16">
            <div>
                <h3
                    className="mb-3 font-display text-[clamp(1.8rem,3vw,2.8rem)] font-extrabold leading-none tracking-[-0.05em] text-[var(--text)] last-le"
                    dangerouslySetInnerHTML={{ __html: t('footer.title') }}
                />
                <p className="max-w-[340px] text-[.88rem] leading-[1.75] text-[var(--text2)]">
                    {t('footer.tagline')}
                </p>
            </div>

            <div className="text-left md:text-right">
                <div className="mb-2 inline-flex items-center gap-2 text-[.74rem] font-semibold text-[var(--accent)]">
                    <span className="h-[6px] w-[6px] animate-pulse rounded-full bg-[var(--accent)]" />
                    {t('footer.status')}
                </div>

                <p className="text-[.8rem] leading-[1.75] text-[var(--text3)]">
                    {t('footer.location')}
                </p>

                <a
                    href="mailto:wojcikkamil2002@gmail.com"
                    className="mt-[.4rem] block text-[.8rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)] underline"
                >
                    wojcikkamil2002@gmail.com
                </a>

                <a
                    href="tel:+48883117883"
                    className="mt-[.4rem] block text-[.8rem] text-[var(--text3)] transition-colors hover:text-[var(--accent)] underline"
                >
                    +48 883 117 883
                </a>
            </div>
        </div>
    )
}

export default FooterIntro
