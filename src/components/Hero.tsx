import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import { useTyperHook } from '../hooks/useTyper.hook.ts'
import { useCounter } from '../hooks/useCounter.hook.ts'
import { HERO_PILLS } from '../data/content'
import SocialBtn from './hero/SocialBtn'
import StatCard from './hero/StatCard'

export default function Hero() {
  const { t, lang } = useLang()
  const photoWrapRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  const vocab = lang === 'pl'
    ? ['Developer', 'w React', 'w Angular', 'Full-Stack']
    : ['Developer', 'in React', 'in Angular', 'Full-Stack']

  const typed = useTyperHook(vocab)
  const exp    = useCounter(3, 650)
  const com    = useCounter(2, 780)

  useEffect(() => {
    const hero = heroRef.current
    const wrap = photoWrapRef.current
    if (!hero || !wrap) return

    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width  / 2)) / r.width
      const dy = (e.clientY - (r.top  + r.height / 2)) / r.height
      wrap.style.transform = `translate(${dx * 12}px, ${dy * 8}px)`
    }
    const onLeave = () => { wrap.style.transform = '' }

    hero.addEventListener('mousemove', onMove)
    hero.addEventListener('mouseleave', onLeave)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      hero.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const PILL_CLASSES = ['p1', 'p2', 'p3', 'p4', 'p5'] as const

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center pt-28 pb-16 relative z-[1]"
    >
      <div className="max-w-[1240px] mx-auto px-16 w-full">
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Badge */}
            <div className="badge-el inline-flex items-center gap-2 rounded-full px-[.85rem] py-[.26rem] mb-[1.4rem] border"
              style={{ background: 'var(--accentbg)', borderColor: 'rgba(74,222,128,.25)' }}>
              <span className="w-[6px] h-[6px] rounded-full bg-[var(--accent)]"
                style={{ animation: 'bpulse 2s ease-in-out infinite' }} />
              <span className="text-[.67rem] font-semibold text-[var(--accent)] uppercase tracking-[.08em]">
                {t('hero.badge')}
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-init hi2 font-display font-extrabold leading-[.9] mb-[1.4rem]"
              style={{ fontSize: 'clamp(3.5rem, 6.5vw, 7rem)', letterSpacing: '-.06em' }}>
              Frontend<br />
              <span className="green-gradient">{typed}</span>
              <span className="typer-cur border-r-[3px] border-[var(--accent)] pr-1" />
            </h1>

            {/* Sub */}
            <p className="hero-init hi3 text-[.96rem] text-[var(--text2)] leading-[1.82] max-w-[440px] mb-[1.4rem]">
              {t('hero.sub')}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-[.6rem] mb-8">
              {HERO_PILLS.map((pill, i) => (
                <span key={pill.name}
                  className={`${PILL_CLASSES[i]} inline-flex items-center gap-[.55rem] text-[.9rem] font-semibold px-4 py-[.45rem] rounded-full border border-[var(--border2)] text-[var(--text2)] bg-[var(--bg2)] hover:border-[var(--accent)] hover:text-[var(--text)] hover:bg-[var(--accentbg)] transition-all cursor-none`}>
                  <img src={pill.src} alt={pill.name} className="w-5 h-5 object-contain"
                    style={pill.invert ? { filter: 'invert(1)' } : undefined} />
                  {pill.name}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-init hi4 flex gap-[.85rem] flex-wrap mb-8">
              <a href="#work"
                className="inline-flex items-center gap-2 text-[.88rem] font-semibold bg-[var(--accent)] text-[#050a05] px-[1.55rem] py-[.72rem] rounded-[10px] hover:bg-[var(--accentd)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(74,222,128,.28)] transition-all">
                {t('hero.cta1')}
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 text-[.88rem] font-medium border-[1.5px] border-[var(--border2)] text-[var(--text2)] px-[1.55rem] py-[.72rem] rounded-[10px] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all">
                {t('hero.cta2')}
              </a>
            </div>

            {/* Socials */}
            <div className="hero-init hi5 flex gap-[.65rem]">
              <SocialBtn href="https://github.com/" title="GitHub">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
              </SocialBtn>
              <SocialBtn href="https://linkedin.com/" title="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </SocialBtn>
              <a href="mailto:wojcikkamil2002@gmail.com"
                className="w-10 h-10 rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text3)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 hover:bg-[var(--accentbg)] transition-all">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Photo ── */}
          <div className="hero-init-r flex flex-col items-center gap-6">
            <div className="relative w-[320px] h-[320px] flex items-center justify-center"
              ref={photoWrapRef} style={{ transition: 'transform .1s linear' }}>
              <div className="absolute inset-0 rounded-full orb-float"
                style={{ background: 'radial-gradient(circle, rgba(74,222,128,.13) 0%, transparent 68%)' }} />
              <div className="absolute inset-0 rounded-full ring1 border border-[rgba(74,222,128,.2)]" />
              <div className="absolute rounded-full ring2 border border-dashed border-[rgba(74,222,128,.09)]"
                style={{ inset: '-28px' }} />
              <img src="/avatar.jpg" alt="Kamil Wójcik"
                className="w-[272px] h-[272px] rounded-full object-cover object-top relative z-[1] hover:scale-[1.04] hover:shadow-[0_0_56px_rgba(74,222,128,.22)] transition-all duration-400"
                style={{ border: '2.5px solid rgba(74,222,128,.28)' }} />
            </div>

            {/* Stats */}
            <div className="flex gap-[.9rem] w-full justify-center">
              <StatCard num={`${exp}+`} label={t('stat.exp')} cls="s1" />
              <StatCard num={`${com}+`} label={t('stat.com')} cls="s2" />
              <StatCard num="🏆" label="HackYeah" sub="2024 Finalist" cls="s3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
