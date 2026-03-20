import {useReveal} from '../../hooks/useReveal.hook.ts'
import {CERTS} from '../../constants/content.ts'
import type {Certificate} from '../../types/certificate.interface.ts'
import BaseSlider from '../ui/BaseSlider.tsx'
import CertSlideItem from './CertSlideItem.tsx'

export default function CertSlider() {
    const sliderRef = useReveal<HTMLDivElement>({
        once: true,
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
    })

    return (
        <div ref={sliderRef} className="rv">
            <BaseSlider<Certificate>
                items={CERTS}
                heightClassName="h-[600px]"
                slideWidthClassName="w-[340px]"
                getItemKey={(cert, index) => `${cert.issuer}-${cert.year}-${index}`}
                ItemComponent={CertSlideItem}
            />
        </div>
    )
}
