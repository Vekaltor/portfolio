import type {JSX} from 'react'
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";

type Props = {
    bg: string
    title: string
}

export default function ProjectImagePlaceholder({ bg, title }: Props): JSX.Element {
    const {theme} = useAppPreferences();

    return (
        <div
            className="h-full w-full flex flex-col items-center justify-center gap-3 select-none"
            style={{
                background: `radial-gradient(ellipse at 60% 40%, color-mix(in srgb, var(--accent) ${theme === 'light' ? '32%' : '15%'}, transparent) 0%, transparent 70%),
                 radial-gradient(ellipse at 20% 80%, color-mix(in srgb, var(--accent) ${theme === 'light' ? '20%' : '10%'}, transparent) 0%, transparent 60%)`
            }}
        >
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />

            <div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg2)] shadow-lg"
                style={{ boxShadow: `0 0 24px ${bg}` }}
            >
                <svg
                    width="26" height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--text2)]"
                >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            </div>

            <span className="relative z-10 text-[.72rem] font-semibold tracking-[.08em] uppercase text-[var(--text3)]">
                {title}
            </span>
        </div>
    )
}
