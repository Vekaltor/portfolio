import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal'
import { TESTIMONIAL_SLIDES } from '../data/content'
import type { TestimonialCard } from '../types'
import type { TranslationKey } from '../data/i18n'

function TestCard({ card, t }: { card: TestimonialCard; t: (k: TranslationKey) => string }) {
  return (
    <div
      className="rounded-[var(--r,16px)] p-8 flex flex-col border border-[var(--border)] hover:border-[var(--border2)] hover:-translate-y-[3px] transition-all"
      style={{ background: 'var(--bg2)' }}
    >
      <p className="text-[.9rem] text-[var(--text2)] leading-[1.86] flex-1 mb-6 relative pt-7">
        <span
          className="absolute top-[-0.2rem] left-0 font-display text-[2.8rem] leading-none opacity-50"
          style={{ color: 'var(--accent)' }}
        >
          "
        </span>
        {t(card.quoteKey as TranslationKey)}
      </p>
      <div className="flex items-center gap-[.9rem]">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-[1.1rem] border border-[var(--border)] flex-shrink-0"
          style={{ background: 'var(--bg3)' }}
        >
          {card.avatar}
        </div>
        <div>
          <div className="text-[.84rem] font-semibold text-[var(--text)]">Imię Nazwisko</div>
          <div className="text-[.7rem] text-[var(--text3)] mt-[.1rem]">{t(card.roleKey as TranslationKey)}</div>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-[.64rem] text-[var(--accent)] mt-[.2rem] inline-block hover:opacity-70 transition-opacity"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { t } = useLang()
  const [slide, setSlide] = useState(0)
  const headRef = useReveal<HTMLDivElement>()
  const total = TESTIMONIAL_SLIDES.length

  return (
    <section id="testimonials" className="min-h-screen flex flex-col justify-center py-24 relative z-[1]">
      <div className="max-w-[1240px] mx-auto px-16 w-full">
        <div ref={headRef} className="rv mb-12">
          <p className="text-[.67rem] font-bold tracking-[.18em] text-[var(--accent)] uppercase mb-[.65rem]">
            {t('test.eyebrow')}
          </p>
          <h2
            className="font-display font-extrabold tracking-[-0.05em] text-[var(--text)]"
            style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)' }}
          >
            {t('test.title')}
          </h2>
        </div>

        {/* Slide content */}
        <div key={slide} className="tslide-enter">
          <div
            className={`grid gap-6 ${TESTIMONIAL_SLIDES[slide].length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
            style={TESTIMONIAL_SLIDES[slide].length === 1 ? { maxWidth: '560px', margin: '0 auto' } : undefined}
          >
            {TESTIMONIAL_SLIDES[slide].map((card, i) => (
              <TestCard key={i} card={card} t={t} />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <NavBtn onClick={() => setSlide((slide - 1 + total) % total)} direction="prev" />
          <div className="flex gap-2">
            {TESTIMONIAL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className="cursor-none transition-all"
                style={{
                  width: i === slide ? '20px' : '6px',
                  height: '6px',
                  borderRadius: i === slide ? '3px' : '50%',
                  background: i === slide ? 'var(--accent)' : 'var(--border2)',
                }}
              />
            ))}
          </div>
          <NavBtn onClick={() => setSlide((slide + 1) % total)} direction="next" />
        </div>
      </div>
    </section>
  )
}

function NavBtn({ onClick, direction }: { onClick: () => void; direction: 'prev' | 'next' }) {
  return (
    <button
      onClick={onClick}
      className="w-[42px] h-[42px] rounded-full border border-[var(--border2)] bg-[var(--bg2)] flex items-center justify-center text-[var(--text2)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accentbg)] transition-all cursor-none"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {direction === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  )
}
