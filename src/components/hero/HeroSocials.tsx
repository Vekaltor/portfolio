import MailIcon from '@assets/icons/mail.svg?react'
import GitHubIcon from '@assets/icons/github.svg?react'
import LinkedinIcon from '@assets/icons/linkedin.svg?react'
import SocialBtn from './SocialBtn'

function HeroSocials() {
    return (
        <div className="hero-init hi5 flex gap-[.65rem] justify-end md:justify-start">
            <SocialBtn href="https://github.com/Vekaltor" title="GitHub">
                <GitHubIcon className="w-4 h-4 stroke-current"/>
            </SocialBtn>

            <SocialBtn href="https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276/" title="LinkedIn">
                <LinkedinIcon className="w-4 h-4 stroke-current"/>
            </SocialBtn>

            <SocialBtn href="mailto:wojcikkamil2002@gmail.com" title="wojcikkamil2002@gmail.com" target="_self">
                <MailIcon className="h-4 w-4 stroke-current"/>
            </SocialBtn>
        </div>
    )
}

export default HeroSocials
