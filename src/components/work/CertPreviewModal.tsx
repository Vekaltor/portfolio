import type {JSX} from 'react'
import {useEffect} from "react";
import type {TranslationKey} from '../../data/i18n.ts'
import type {Certificate} from '../../types/certificate.interface.ts'
import {useLang} from '../../context/LangContext.tsx'
import {createPortal} from "react-dom";

type Props = {
    cert: Certificate
    isOpen: boolean
    onClose: () => void
}

export default function CertPreviewModal(props: Props): JSX.Element | null {
    const {
        cert,
        isOpen,
        onClose,
    } = props;
    const {t} = useLang()

    useEffect(() => {
        if (!isOpen) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', onKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return createPortal(
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[rgba(6,8,6,.78)] p-4 backdrop-blur-sm min-[900px]:p-8"
            onClick={onClose}
        >
            <div
                className="relative flex h-[92vh] w-full max-w-[1280px] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg)] shadow-[0_24px_80px_rgba(0,0,0,.45)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="cursor-none absolute right-4 top-4 z-[2] inline-flex items-center rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] px-3 py-2 text-[.74rem] font-medium text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:text-[var(--text)]"
                >
                    Zamknij
                </button>

                <div className="grid h-full w-full min-[980px]:grid-cols-[minmax(0,1.25fr)_minmax(320px,.75fr)]">
                    <div className="min-h-0 bg-[var(--bg3)]">
                        <iframe
                            src={cert.href}
                            title={t(cert.titleKey as TranslationKey)}
                            className="h-full w-full border-0"
                        />
                    </div>

                    <div className="min-h-0 overflow-y-auto border-l border-[var(--border)] p-6 min-[980px]:p-8">
                        <div
                            className="mb-3 text-[.72rem] font-semibold uppercase tracking-[.08em] text-[var(--accent)]">
                            {cert.issuer}
                        </div>

                        <h3 className="mb-3 text-[1.35rem] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)]">
                            {t(cert.titleKey as TranslationKey)}
                        </h3>

                        <div className="mb-6 text-[.78rem] text-[var(--text3)]">
                            {cert.year}
                        </div>

                        <p className="mb-8 text-[.92rem] leading-[1.8] text-[var(--text2)]">
                            {t(cert.subtitleKey as TranslationKey)}
                        </p>

                        <a
                            href={cert.href}
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-none inline-flex items-center rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] px-4 py-3 text-[.8rem] font-semibold text-[var(--text)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                            ↗ {t(cert.linkKey as TranslationKey)}
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
