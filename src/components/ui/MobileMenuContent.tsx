import {useLang} from '../../context/LangContext.tsx'
import NavbarMenu from '../ui/NavbarMenu.tsx'
import HeaderControls from "../layout/HeaderControls.tsx";

interface MobileMenuContentProps {
    onNavigate: () => void
}

function MobileMenuContent(props: MobileMenuContentProps) {
    const {onNavigate} = props
    const {t} = useLang()

    return (
        <div className="relative z-10 flex min-h-dvh flex-col px-6 pb-8 pt-28">
            <div className="mx-auto flex w-full max-w-[420px] flex-1 flex-col">
                <div className="mb-8">
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--text3)]">
                        {t('mobileMenu.navigation')}
                    </span>

                    <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[var(--text2)]">
                        {t('mobileMenu.navigationDesc')}
                    </p>
                </div>

                <div className="flex-1">
                    <NavbarMenu onNavigate={onNavigate} isMobile/>
                </div>

                <div className="my-8 h-px w-full bg-[color:var(--border)]"/>

                <div
                    className="rounded-[28px] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    <div className="mb-4">
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--text3)]">
                            {t('mobileMenu.quickActions')}
                        </span>
                    </div>

                    <HeaderControls/>
                </div>
            </div>
        </div>
    )
}

export default MobileMenuContent
