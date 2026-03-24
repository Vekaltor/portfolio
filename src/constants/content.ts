import type {TechIcon} from "../types/techIcon.interface.ts";
import type {TimelineItem} from "../types/timeLineItem.interface.ts";
import type {Project} from "../types/project.interface.ts";
import type {Certificate} from "../types/certificate.interface.ts";
import type {Recommendation} from "../types/recommendation.interface.ts";

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'
const icon = (src: string, name: string, invert = false): TechIcon => ({src: `${BASE}${src}`, name, invert})

export const LANG_ICONS: TechIcon[] = [
    icon('typescript/typescript-original.svg', 'TypeScript'),
    icon('javascript/javascript-original.svg', 'JavaScript'),
    icon('html5/html5-original.svg', 'HTML5'),
    icon('css3/css3-original.svg', 'CSS3'),
    icon('mysql/mysql-original.svg', 'MySQL'),
]

export const FW_ICONS: TechIcon[] = [
    icon('react/react-original.svg', 'React'),
    icon('angularjs/angularjs-original.svg', 'Angular'),
    icon('redux/redux-original.svg', 'Redux'),
    icon('vuejs/vuejs-original.svg', 'Vue.js'),
    icon('tailwindcss/tailwindcss-original.svg', 'Tailwind CSS'),
    icon('primeng/primeng-original.svg', 'PrimeNG'),
]

export const TOOL_ICONS: TechIcon[] = [
    icon('docker/docker-original.svg', 'Docker'),
    icon('nodejs/nodejs-original.svg', 'Node.js'),
    icon('git/git-original.svg', 'Git'),
    icon('vitejs/vitejs-original.svg', 'Vite'),
    icon('github/github-original.svg', 'GitHub', true),
    icon('gitlab/gitlab-original.svg', 'GitLab'),
    icon('postman/postman-original.svg', 'Postman'),
    icon('intellij/intellij-original.svg', 'IntelliJ'),
]

export const LEARN_ICONS: TechIcon[] = [
    icon('flutter/flutter-original.svg', 'Flutter'),
]

export const HERO_MAIN_TECHNOLOGY_PILLS: TechIcon[] = [
    icon('react/react-original.svg', 'React'),
    icon('angularjs/angularjs-original.svg', 'Angular'),
    icon('typescript/typescript-original.svg', 'TypeScript'),
    icon('tailwindcss/tailwindcss-original.svg', 'Tailwind CSS'),
    icon('primeng/primeng-original.svg', 'PrimeNG'),
]

export const TIMELINE_ITEMS: TimelineItem[] = [
    {
        id: 'bbcr',
        date: '11/2023 — tl.now',
        company: 'BBCR sp. z o.o.',
        roleKey: 'tl.r1',
        descKey: 'tl.bbcr.desc',
        tags: ['React', 'Angular', 'PrimeNG', 'Tailwind CSS', 'FlutterFlow', 'PWA', 'WCAG', 'CI/CD', 'REST API'],
    },
    {
        id: 'hackyeah',
        date: '10/2024',
        company: 'HackYeah 2024',
        roleKey: 'tl.hy.role',
        descKey: 'tl.hy.desc',
        tags: ['Finalist', 'Teamwork'],
    },
    {
        id: 'pol',
        date: '09/2022 — 03/2026',
        company: 'Politechnika Lubelska',
        roleKey: 'tl.r2',
        descKey: 'tl.pl.desc',
        tags: [],
        hollow: true,
    },
]

export const PROJECTS: Project[] = [
    {
        bg: 'rgba(79,70,229,.18)',
        badgeKey: 'p1.b',
        titleKey: 'p1.t',
        descKey: 'p1.d',
        chips: ['React', 'Tailwind CSS', 'MySQL', 'Java', 'Spring Boot'],
        previewSrc: '/praca_inzynierska_projekt.png',
    },
    {
        bg: 'rgba(34,197,94,.16)',
        badgeKey: 'p2.b',
        titleKey: 'p2.t',
        descKey: 'p2.d',
        chips: ['React', 'JavaScript', 'Recharts', 'Redux Toolkit', 'REST API', 'Admin Panel'],
        github: 'https://github.com/Vekaltor/ravintola',
        live: 'https://ravintola.toadres.pl',
        previewSrc: '/ravintola-preview.png',
    },
    {
        bg: 'rgba(124,58,237,.16)',
        badgeKey: 'p5.b',
        titleKey: 'p5.t',
        descKey: 'p5.d',
        chips: ['React', 'TypeScript', 'Socket.io', 'Redux Toolkit', 'MongoDB', 'Redis', 'styled-components'],
        github: 'https://github.com/Vekaltor/react-chat',
        previewSrc: '/react_chat-preview.png',
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
        previewSrc: '/blogger-preview.png',
        live: 'https://vekaltor.github.io/blogger/',
    },
    {
        bg: 'rgba(37,99,235,.16)',
        badgeKey: 'p3.b',
        titleKey: 'p3.t',
        descKey: 'p3.d',
        chips: ['React', 'Redux Toolkit', 'REST API', 'News API', 'Responsive UI'],
        github: 'https://github.com/Vekaltor/news-app',
        previewSrc: '/news-app-preview.png',
        live: 'https://vekaltor.github.io/news-app/en',
    },
]

export const CERTS: Certificate[] = [
    {
        title: 'cc1.t',
        issuer: 'HackYeah',
        year: '2024',
        href: '/HackYeah2024-cert.pdf',
        previewSrc: '/HackYeah2024-cert-preview.jpg',
    },
    {
        title: 'cc2.t',
        issuer: 'EF SET',
        year: '2026',
        href: '/ef_set_certificate.pdf',
        previewSrc: '/ef_set_certificate-preview.png',
    },
    // {
    //   titleKey: 'cc1.t',
    //   subtitleKey: 'cc1.s',
    //   linkKey: 'ccl',
    //   issuer: 'Cisco NetAcad',
    //   year: '2023',
    //   href: '#',
    //   previewSrc: '/certs/ccna1.jpg',
    // },
    // {
    //   titleKey: 'cc2.t',
    //   subtitleKey: 'cc2.s',
    //   linkKey: 'ccl',
    //   issuer: 'Cisco NetAcad',
    //   year: '2023',
    //   href: '#',
    //   previewSrc: '/certs/ccna2.jpg',
    // },
    // {
    //   titleKey: 'cc3.t',
    //   subtitleKey: 'cc3.s',
    //   linkKey: 'ccl',
    //   issuer: 'Cisco NetAcad',
    //   year: '2024',
    //   href: '#',
    //   previewSrc: '/certs/ccna3.jpg',
    // },
]

export const TESTIMONIALS: Recommendation[] = [
    {
        quoteKey: 't1q',
        roleKey: 't1r',
        name: 'Kacper Woliński',
        avatarSrc: '/people/kacper.jpg',
        linkedin: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276',
    },
    {
        quoteKey: 't2q',
        roleKey: 't2r',
        name: 'Sebastian Pola',
        avatarSrc: '/people/sebastian.jpg',
        linkedin: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276',
    },
    {
        quoteKey: 't3q',
        roleKey: 't3r',
        name: 'Bartłomiej Laskowski',
        avatarSrc: '/people/bartek.jpg',
        linkedin: 'https://www.linkedin.com/in/kamil-w%C3%B3jcik-0bbba4276',
    },
]
