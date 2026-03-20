import { DownloadIcon } from './NavbarIcons.tsx'
import { classNames } from '../../helpers/classNames.helper.ts'

interface DownloadCvButtonProps {
    isMobile?: boolean
}

function DownloadCvButton(props: DownloadCvButtonProps) {
    const { isMobile = false } = props

    return (
        <a
            href="/CV_Kamil_Wojcik.pdf"
            download
            className={classNames(
                'inline-flex items-center gap-[.4rem] font-semibold rounded-xl transition-all',
                isMobile
                    ? 'h-[46px] px-5 text-[0.9rem] bg-[var(--accent)] text-[#050a05] hover:bg-[var(--accentd)]'
                    : 'px-4 py-[.42rem] text-[.78rem] bg-[var(--accent)] text-[#050a05] hover:bg-[var(--accentd)] hover:-translate-y-px'
            )}
        >
            <DownloadIcon />
            CV
        </a>
    )
}

export default DownloadCvButton
