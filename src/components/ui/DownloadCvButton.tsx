import {classNames} from '../../helpers/classNames.helper.ts'
import DownloadIcon from "@assets/icons/download.svg?react"
import {useLang} from "../../context/LangContext.tsx";

interface DownloadCvButtonProps {
    isMobile?: boolean
}

function DownloadCvButton(props: DownloadCvButtonProps) {
    const {isMobile = false} = props
    const {t} = useLang();

    return (
        <a
            href="/CV_Kamil_Wojcik.pdf"
            download
            className={classNames(
                'inline-flex items-center gap-[.4rem] font-semibold rounded-xl transition-all whitespace-nowrap',
                isMobile
                    ? 'h-[46px] px-5 text-[0.9rem] bg-[var(--accent)] text-[#050a05] hover:bg-[var(--accentd)] flex justify-center'
                    : 'px-4 py-[.42rem] text-[.78rem] bg-[var(--accent)] text-[#050a05] hover:bg-[var(--accentd)] hover:-translate-y-px'
            )}
        >
            <DownloadIcon className={classNames(
                isMobile && "w-[18px] h-[18px]"
            )}/>
            {isMobile ? t("menu.longCv") : "CV"}
        </a>
    )
}

export default DownloadCvButton
