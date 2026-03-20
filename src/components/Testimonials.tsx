import { useState } from 'react'
import { useLang } from '../context/LangContext'
import { useReveal } from '../hooks/useReveal.hook.ts'
import { TESTIMONIAL_SLIDES } from '../data/content'
import TestCard from './testimonials/TestCard'
import NavBtn from './testimonials/NavBtn'

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
