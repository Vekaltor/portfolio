import type {JSX} from 'react'
import type {TranslationKey} from '../../data/i18n.ts'
import type {Certificate} from '../../types/certificate.interface.ts'
import type {SliderItemComponentProps} from '../ui/BaseSlider.tsx'
import {useLang} from "../../hooks/useLang.hook.ts";

type Props = SliderItemComponentProps<Certificate>

export default function CertSlideItem(props: Props): JSX.Element {
    const {item: cert, state} = props;
    const {t} = useLang()
    const isActive = state === 'active'

    return (
        <>
            <button
                type="button"
                className="group flex w-full flex-col overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--bg2)] text-left transition-all duration-300"
            >
                <div className="relative mx-auto w-full max-w-[340px] bg-[var(--bg3)]">
                    <div className="relative aspect-[210/297] w-full overflow-hidden">
                        <img
                            src={cert.previewSrc}
                            alt={t(cert.title as TranslationKey)}
                            loading="lazy"
                            className={`h-full w-full object-cover transition-transform duration-500 ${
                                isActive ? 'scale-[1.02]' : 'scale-100'
                            }`}
                        />
                    </div>
                </div>

                <div className="border-t border-[var(--border)] px-4 py-3">
                    <div
                        className="mb-1 text-[.88rem] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text)] transition-colors">
                        {t(cert.title as TranslationKey)}
                    </div>

                    <div
                        className="flex items-center gap-2 text-[.68rem] text-[var(--text3)] transition-colors group-hover:text-[var(--text2)]">
                        <span>{cert.issuer}</span>
                        <span className="opacity-50">•</span>
                        <span>{cert.year}</span>
                    </div>
                </div>
            </button>
        </>
    )
}
