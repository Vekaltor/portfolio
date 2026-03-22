import type {JSX} from 'react'
import {useState} from 'react'
import type {TranslationKey} from '../../data/i18n.ts'
import type {Certificate} from '../../types/certificate.interface.ts'
import type {SliderItemComponentProps} from '../ui/BaseSlider.tsx'
import CertPreviewModal from './CertPreviewModal.tsx'
import {useLang} from "../../hooks/useLang.hook.ts";

type Props = SliderItemComponentProps<Certificate>

export default function CertSlideItem(props: Props): JSX.Element {
    const {item: cert, state} = props;
    const {t} = useLang()
    const isActive = state === 'active'
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                type="button"
                // onClick={() => setIsOpen(true)}
                className="group flex w-full flex-col overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--bg2)] text-left transition-all duration-300"
            >
                <div className="relative mx-auto w-full max-w-[340px] bg-[var(--bg3)]">
                    <div className="relative aspect-[210/297] w-full overflow-hidden">
                        <img
                            src={cert.previewSrc}
                            alt={t(cert.titleKey as TranslationKey)}
                            loading="lazy"
                            className={`h-full w-full object-cover transition-transform duration-500 ${
                                isActive ? 'scale-[1.02]' : 'scale-100'
                            }`}
                        />

                        {/*<div*/}
                        {/*    className="absolute inset-0 bg-[rgba(8,10,8,0)] transition-all duration-300 group-hover:bg-[rgba(8,10,8,.48)]"/>*/}

                        {/*<div className="absolute inset-0 flex items-center justify-center">*/}
                        {/*  <span*/}
                        {/*      className="translate-y-[8px] rounded-[10px] border border-[rgba(255,255,255,.16)] bg-[rgba(12,14,12,.74)] px-4 py-2 text-[.72rem] font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-[rgba(74,222,128,.35)]">*/}
                        {/*    Zobacz certyfikat*/}
                        {/*  </span>*/}
                        {/*</div>*/}
                    </div>
                </div>

                <div className="border-t border-[var(--border)] px-4 py-3">
                    <div
                        className="mb-1 text-[.88rem] font-semibold leading-[1.3] tracking-[-0.02em] text-[var(--text)] transition-colors">
                        {t(cert.titleKey as TranslationKey)}
                    </div>

                    <div
                        className="flex items-center gap-2 text-[.68rem] text-[var(--text3)] transition-colors group-hover:text-[var(--text2)]">
                        <span>{cert.issuer}</span>
                        <span className="opacity-50">•</span>
                        <span>{cert.year}</span>
                    </div>
                </div>
            </button>

            <CertPreviewModal
                cert={cert}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )
}
