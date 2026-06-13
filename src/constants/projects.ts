import type {Project} from "../types/project.interface.ts";

import inz_01 from '@assets/projects/no-code/01.png'
import inz_02 from '@assets/projects/no-code/02.png'
import inz_03 from '@assets/projects/no-code/03.png'
import inz_04 from '@assets/projects/no-code/04.png'
import inz_05 from '@assets/projects/no-code/05.png'
import inz_06 from '@assets/projects/no-code/06.png'
import inz_07 from '@assets/projects/no-code/07.png'
import inz_08 from '@assets/projects/no-code/08.png'
import finTrack_01 from '@assets/projects/fin-track/01.png'
import ravintola_01 from '@assets/projects/ravintola/01.png'
import chat_01 from '@assets/projects/chat/01.png'
import blogger_01 from '@assets/projects/blogger/01.png'
import newsApp_01 from '@assets/projects/news-app/01.png'

export const PROJECTS: Project[] = [
    {
        bg: 'rgba(79,70,229,.18)',
        badgeKey: 'p1.b',
        titleKey: 'p1.t',
        descKey: 'p1.d',
        chips: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Spring Boot', 'Java', 'MySQL'],
        previewSrc: [inz_01,inz_02,inz_03,inz_04,inz_05,inz_06,inz_07,inz_08],
    },
    {
        bg: 'rgba(225,29,72,.16)',
        badgeKey: 'p7.b',
        titleKey: 'p7.t',
        descKey: 'p7.d',
        chips: ['Angular 21', 'TypeScript', 'NgRx', 'RxJS', 'Tailwind CSS', 'Signals', 'Vitest'],
        github: 'https://github.com/Vekaltor/fin-track',
        previewSrc: [finTrack_01],
    },
    {
        bg: 'rgba(34,197,94,.16)',
        badgeKey: 'p2.b',
        titleKey: 'p2.t',
        descKey: 'p2.d',
        chips: ['React', 'JavaScript', 'Recharts', 'Redux Toolkit', 'REST API', 'Admin Panel'],
        github: 'https://github.com/Vekaltor/ravintola',
        live: 'https://ravintola.toadres.pl',
        previewSrc: [ravintola_01],
    },
    {
        bg: 'rgba(124,58,237,.16)',
        badgeKey: 'p5.b',
        titleKey: 'p5.t',
        descKey: 'p5.d',
        chips: ['React', 'TypeScript', 'Socket.io', 'Redux Toolkit', 'MongoDB', 'Redis', 'styled-components'],
        github: 'https://github.com/Vekaltor/react-chat',
        previewSrc: [chat_01],
    },
    {
        bg: 'rgba(124,58,237,.10)',
        badgeKey: 'p6.b',
        titleKey: 'p6.t',
        descKey: 'p6.d',
        chips: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'Redis', 'JWT', 'nodemailer'],
        github: 'https://github.com/Vekaltor/react-chat-api',
    },
    {
        bg: 'rgba(225,29,72,.16)',
        badgeKey: 'p4.b',
        titleKey: 'p4.t',
        descKey: 'p4.d',
        chips: ['Angular', 'TypeScript', 'PrimeFlex', 'Responsive UI', 'Fast Learning'],
        github: 'https://github.com/Vekaltor/blogger',
        previewSrc: [blogger_01],
        live: 'https://vekaltor.github.io/blogger/',
    },
    {
        bg: 'rgba(37,99,235,.16)',
        badgeKey: 'p3.b',
        titleKey: 'p3.t',
        descKey: 'p3.d',
        chips: ['React', 'Redux Toolkit', 'REST API', 'News API', 'Responsive UI'],
        github: 'https://github.com/Vekaltor/news-app',
        previewSrc: [newsApp_01],
        live: 'https://vekaltor.github.io/news-app',
    },
]
