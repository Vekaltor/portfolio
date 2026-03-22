import NavbarMenu from '../ui/NavbarMenu.tsx'
import HeaderControls from "../layout/HeaderControls.tsx";
import {useLang} from "../../hooks/useLang.hook.ts";

interface MobileMenuContentProps {
    onNavigate: () => void
}

function MobileMenuContent(props: MobileMenuContentProps) {
    const { onNavigate } = props
    const { t } = useLang()

    return (
        <div className="relative z-10 flex min-h-dvh flex-col px-6 pb-8 pt-20">
            <div className="mx-auto flex w-full max-w-[420px] flex-1 flex-col justify-between">
                <div>
                    <div className="mb-4">
                    <span className="text-[0.8rem] font-semibold uppercase tracking-[0.24em] text-[var(--text3)]">
                        {t('mobileMenu.navigation')}
                    </span>

                        <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[var(--text2)]">
                            {t('mobileMenu.navigationDesc')}
                        </p>
                    </div>

                    <NavbarMenu onNavigate={onNavigate} />
                </div>

                <div className="my-4 h-px w-full bg-[var(--border)]" />

                <div>
                    <div
                        className="rounded-[28px] border border-[var(--border)] p-4 backdrop-blur-md"
                        style={{
                            background: 'var(--mobile-menu-card)',
                            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                        }}
                    >
                        <div className="mb-4">
                        <span className="text-[0.8rem] font-semibold uppercase tracking-[0.22em] text-[var(--text3)]">
                            {t('mobileMenu.quickActions')}
                        </span>
                        </div>

                        <HeaderControls/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenuContent
