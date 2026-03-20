import {classNames} from '../../helpers/classNames.helper.ts'
import MobileMenuContent from "../ui/MobileMenuContent.tsx";

interface MobileMenuPanelProps {
    isOpen: boolean
    onNavigate: () => void
}

function MobileMenuPanel(props: MobileMenuPanelProps) {
    const {isOpen, onNavigate} = props

    return (
        <div
            className={classNames(
                'fixed inset-0 z-[950] md:hidden transition-opacity duration-300',
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            )}
            aria-hidden={!isOpen}
        >
            <div className="absolute inset-0 bg-[rgba(2,4,3,0.10)]"/>

            <div
                className={classNames(
                    'absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.18,1,0.32,1)]',
                    isOpen ? 'opacity-100 backdrop-blur-[12px]' : 'opacity-0 backdrop-blur-0'
                )}
            >
                <div className="absolute inset-0 bg-[rgba(2,4,3,0.14)]"/>
            </div>

            <div
                className={classNames(
                    'absolute inset-y-0 right-0 h-[115vh] w-[170vw]',
                    'bg-[rgba(4,7,6,0.74)]',
                    'rounded-l-[50%]',
                    'shadow-[-50px_0_140px_rgba(0,0,0,0.24)]',
                    'origin-right',
                    'transition-all duration-[1650ms] ease-[cubic-bezier(0.18,1,0.32,1)]',
                    isOpen
                        ? 'translate-x-[6vw] scale-x-[1.02] scale-y-[1.01]'
                        : 'translate-x-[126%] scale-x-[0.68] scale-y-[0.84]'
                )}
            />

            <div
                className={classNames(
                    'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    isOpen ? 'translate-x-0 opacity-100 delay-150' : 'translate-x-10 opacity-0'
                )}
            >
                <MobileMenuContent onNavigate={onNavigate}/>
            </div>
        </div>
    )
}

export default MobileMenuPanel
