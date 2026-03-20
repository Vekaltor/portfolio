import {DownloadIcon} from "./NavbarIcons.tsx";

function DownloadCvButton() {
    return (
        <a
            href="/CV_Kamil_Wojcik.pdf"
            download
            className="inline-flex items-center gap-[.4rem] text-[.78rem] font-semibold bg-[var(--accent)] text-[#050a05] px-4 py-[.42rem] rounded-lg hover:bg-[var(--accentd)] hover:-translate-y-px transition-all"
        >
            <DownloadIcon />
            CV
        </a>
    )
}

export default DownloadCvButton
