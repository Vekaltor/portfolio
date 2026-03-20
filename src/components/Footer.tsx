import { useLang } from '../context/LangContext'
import type { TranslationKey } from '../data/i18n'

import { GITHUB_PATH, LINKEDIN_PATH } from '../data/socialIcons'

function FooterSocialLink({
  href,
  label,
  path,
}: {
  href: string
  label: string
  path: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-[.55rem] text-[.82rem] font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
    >
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d={path} />
      </svg>
      {label}
    </a>
  )
}

export default function Footer() {
  const { t } = useLang()

  const NAV_ITEMS: { key: TranslationKey; href: string }[] = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.work', href: '#work' },
    { key: 'nav.test', href: '#testimonials' },
    { key: 'nav.contact', href: '#contact' },
  ]

  return (
    <footer
      className="border-t max-w-[1240px] mx-auto w-full px-16 pt-16"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Top row */}
      <div
        className="grid grid-cols-2 gap-16 pb-12 mb-10"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div>
          <h3
            className="font-display font-extrabold tracking-[-0.05em] leading-none mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
            dangerouslySetInnerHTML={{ __html: t('footer.title') }}
          />
          <p className="text-[.88rem] text-[var(--text2)] leading-[1.75] max-w-[340px]">
            {t('footer.tagline')}
          </p>
        </div>
        <div className="text-right">
          <div
            className="inline-flex items-center gap-2 text-[.74rem] font-semibold text-[var(--accent)] mb-2"
          >
            <span
              className="w-[6px] h-[6px] rounded-full bg-[var(--accent)]"
              style={{ animation: 'bpulse 2s ease-in-out infinite' }}
            />
            {t('footer.status')}
          </div>
          <p className="text-[.8rem] text-[var(--text3)] leading-[1.75]">
            {t('footer.location')}
          </p>
          <p className="text-[.8rem] text-[var(--text3)] mt-[.4rem]">
            wojcikkamil2002@gmail.com
          </p>
        </div>
      </div>

      {/* 3-col */}
      <div
        className="flex justify-between pb-8 mb-6"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        {/* Name */}
        <div>
          <p className="text-[.92rem] font-bold text-[var(--text)] tracking-[-0.02em]">
            Kamil Wójcik
          </p>
          <p className="text-[.74rem] text-[var(--text3)] mt-[.2rem]">
            {t('f3.role')}
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[.65rem] font-bold tracking-[.14em] text-[var(--text3)] uppercase mb-[.9rem]">
            {t('f3.menu')}
          </p>
          <div className="flex flex-col gap-[.65rem]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-[.82rem] font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
              >
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
            <FooterSocialLink
              href="https://github.com/"
              label="GitHub"
              path={GITHUB_PATH}
            />
            <FooterSocialLink
              href="https://linkedin.com/"
              label="LinkedIn"
              path={LINKEDIN_PATH}
            />
            <a
              href="/CV_Kamil_Wojcik.pdf"
              download
              className="inline-flex items-center gap-[.55rem] text-[.82rem] font-medium text-[var(--text2)] hover:text-[var(--accent)] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t('footer.nav.cv')}
            </a>
          </div>
        </div>
      </div>

      {/* Made with */}
      <div className="text-center pb-8">
        <p className="text-[.8rem] text-[var(--text3)] tracking-[.02em]">
          {t('footer.made')}
        </p>
      </div>
    </footer>
  )
}

