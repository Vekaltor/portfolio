import { useEffect, useState } from 'react'
import { useLang } from '../context/LangContext'
import type { Theme } from '../types'

interface NavbarProps {
  theme: Theme
  toggleTheme: () => void
  customCursor: boolean
  toggleCursor: () => void
}

const NAV_KEYS = ['about', 'work', 'test', 'contact'] as const
type NavKey = typeof NAV_KEYS[number]

export default function Navbar({ theme, toggleTheme, customCursor, toggleCursor }: NavbarProps) {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const baseNav = 'fixed top-0 left-0 right-0 z-[800] flex items-center justify-between px-16 py-[1.1rem] border-b transition-all duration-400'
  const scrolledStyle = scrolled
    ? { background: 'color-mix(in srgb, var(--bg) 80%, transparent)', backdropFilter: 'blur(24px)', borderColor: 'var(--border)' }
    : { borderColor: 'transparent' }

  const iconBtn = (active = false) =>
    `w-[34px] h-[34px] rounded-lg border flex items-center justify-center transition-all cursor-none ${
      active
        ? 'border-[var(--accent)] bg-[var(--accentbg)] text-[var(--accent)]'
        : 'border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)]'
    }`

  return (
    <nav className={baseNav} style={scrolledStyle}>
      <a href="#hero" className="font-display font-extrabold text-[1.1rem] tracking-[-0.04em] text-[var(--text)]">
        Kamil<em className="not-italic text-[var(--accent)]">.</em>
      </a>

      <div className="hidden md:flex gap-8">
        {NAV_KEYS.map(k => (
          <a key={k} href={`#${k === 'test' ? 'testimonials' : k}`}
            className="text-[.83rem] font-medium text-[var(--text2)] hover:text-[var(--text)] transition-colors">
            {t(`nav.${k}` as `nav.${NavKey}`)}
          </a>
        ))}
      </div>

      <div className="flex gap-[.55rem] items-center">
        {/* Theme */}
        <button onClick={toggleTheme} className={iconBtn()}>
          {theme === 'dark'
            ? <MoonIcon />
            : <SunIcon />}
        </button>

        {/* Cursor toggle */}
        <button onClick={toggleCursor} className={iconBtn(!customCursor)} title="Toggle cursor">
          {customCursor ? <CursorCustomIcon /> : <CursorDefaultIcon />}
        </button>

        {/* Language */}
        <button onClick={toggle}
          className="text-[.7rem] font-bold tracking-[.06em] h-[34px] px-[.85rem] rounded-lg border border-[var(--border2)] text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-none">
          {lang === 'pl' ? 'EN' : 'PL'}
        </button>

        {/* CV */}
        <a href="/CV_Kamil_Wojcik.pdf" download
          className="inline-flex items-center gap-[.4rem] text-[.78rem] font-semibold bg-[var(--accent)] text-[#050a05] px-4 py-[.42rem] rounded-lg hover:bg-[var(--accentd)] hover:-translate-y-px transition-all">
          <DownloadIcon />
          CV
        </a>
      </div>
    </nav>
  )
}

/* ── Icon components ── */
const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
)
const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
)
const CursorCustomIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l7.07 17 2.51-7.39L21 11.07z"/>
  </svg>
)
const CursorDefaultIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7" strokeDasharray="2 2"/>
  </svg>
)
const DownloadIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#050a05" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)
