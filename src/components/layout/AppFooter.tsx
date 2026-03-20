import FooterIntro from "../ui/FooterIntro.tsx";
import FooterIdentity from "../ui/FooterIdentity.tsx";
import FooterNav from "../ui/FooterNav.tsx";
import FooterSocials from "../ui/FooterSocials.tsx";
import FooterAuthorInfo from "../ui/FooterAuthorInfo.tsx";

function AppFooter() {

    return (
        <footer className="mx-auto w-full max-w-[1240px] border-t border-[var(--border)] px-6 pt-16 md:px-16">
            <FooterIntro/>
            <div
                className="mb-6 gap-x-12 gap-y-8 flex flex-wrap md:flex-nowrap border-b border-[var(--border)] pb-8 md:flex-row  justify-between">
                <FooterIdentity/>
                <FooterNav/>
                <FooterSocials/>
            </div>
            <FooterAuthorInfo/>
        </footer>
    )
}

export default AppFooter
