import type {Certificate} from "../types/certificate.interface.ts";

import hackyeahPreview from '@assets/certs/hackyeah-preview.webp'
import efsetPreview from '@assets/certs/efset-preview.webp'
import hackyeahPdf from '@assets/certs/hackyeah.pdf'
import efsetPdf from '@assets/certs/efset.pdf'

export const CERTS: Certificate[] = [
    {
        title: 'cc1.t',
        issuer: 'HackYeah',
        year: '2024',
        href: hackyeahPdf,
        previewSrc: hackyeahPreview,
    },
    {
        title: 'cc2.t',
        issuer: 'EF SET',
        year: '2026',
        href: efsetPdf,
        previewSrc: efsetPreview,
    },
]
