import type {JSX} from 'react'
import {useEffect} from 'react'
import {createPortal} from 'react-dom'

type Props = {
    src?: string
    alt: string
    isOpen: boolean
    onClose: () => void
}

export default function ImagePreviewModal(props: Props): JSX.Element | null {
    const {
        src,
        alt,
        isOpen,
        onClose,
    } = props;

    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return createPortal(
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(6,8,6,.82)] p-4 backdrop-blur-sm min-[900px]:p-8"
            onClick={onClose}
        >
            <div
                className="relative max-h-[92vh] w-full max-w-[1280px] overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg)] shadow-[0_24px_80px_rgba(0,0,0,.45)]"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="cursor-none absolute right-4 top-4 z-[2] inline-flex items-center rounded-[10px] border border-[var(--border)] bg-[var(--bg2)] px-3 py-2 text-[.74rem] font-medium text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                    Zamknij
                </button>

                <div className="flex max-h-[92vh] items-center justify-center bg-[var(--bg3)] p-4 min-[900px]:p-6">
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-[85vh] w-auto max-w-full object-contain"
                    />
                </div>
            </div>
        </div>,
        document.body
    )
}
