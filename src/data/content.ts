import type { TechIcon, TimelineItem, Project, Certificate, TestimonialCard } from '../types'

const BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'
const icon = (src: string, name: string, invert = false): TechIcon => ({ src: `${BASE}${src}`, name, invert })

export const LANG_ICONS: TechIcon[] = [
  icon('typescript/typescript-plain.svg', 'TypeScript'),
  icon('javascript/javascript-plain.svg', 'JavaScript'),
  icon('html5/html5-plain.svg', 'HTML5'),
  icon('css3/css3-plain.svg', 'CSS3'),
  icon('tailwindcss/tailwindcss-plain.svg', 'Tailwind'),
]

export const FW_ICONS: TechIcon[] = [
  icon('react/react-original.svg', 'React'),
  icon('angularjs/angularjs-plain.svg', 'Angular'),
  icon('nextjs/nextjs-plain.svg', 'Next.js', true),
  icon('redux/redux-original.svg', 'Redux'),
  icon('vuejs/vuejs-plain.svg', 'Vue.js'),
  icon('flutter/flutter-plain.svg', 'FlutterFlow'),
]

export const TOOL_ICONS: TechIcon[] = [
  icon('docker/docker-plain.svg', 'Docker'),
  icon('nodejs/nodejs-plain.svg', 'Node.js'),
  icon('mysql/mysql-plain.svg', 'MySQL'),
  icon('git/git-plain.svg', 'Git'),
  icon('vitejs/vitejs-plain.svg', 'Vite'),
  icon('github/github-original.svg', 'GitHub', true),
  icon('gitlab/gitlab-plain.svg', 'GitLab'),
  icon('postman/postman-plain.svg', 'Postman'),
  icon('intellij/intellij-plain.svg', 'IntelliJ'),
]

export const LEARN_ICONS: TechIcon[] = [
  icon('threejs/threejs-original.svg', 'Three.js', true),
  icon('graphql/graphql-plain.svg', 'GraphQL'),
  icon('rust/rust-plain.svg', 'Rust', true),
  icon('amazonwebservices/amazonwebservices-plain-wordmark.svg', 'AWS'),
]

export const HERO_PILLS: TechIcon[] = [
  icon('react/react-original.svg', 'React'),
  icon('angularjs/angularjs-plain.svg', 'Angular'),
  icon('typescript/typescript-plain.svg', 'TypeScript'),
  icon('tailwindcss/tailwindcss-plain.svg', 'Tailwind'),
  icon('nextjs/nextjs-plain.svg', 'Next.js', true),
]

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'bbcr',
    date: '11/2023 — tl.now',
    company: 'BBCR sp. z o.o.',
    roleKey: 'tl.r1',
    descKey: 'tl.bbcr.desc',
    tags: ['React', 'Angular', 'PrimeNG', 'FlutterFlow', 'PWA', 'WCAG', 'CI/CD', 'REST API'],
  },
  {
    id: 'hackyeah',
    date: '10/2024',
    company: 'HackYeah 2024',
    roleKey: 'tl.hy.role',
    descKey: 'tl.hy.desc',
    tags: ['🏆 Finalista', 'React', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'pol',
    date: '09/2022 — 03/2026',
    company: 'Politechnika Lubelska',
    roleKey: 'tl.r2',
    descKey: 'tl.pl.desc',
    tags: ['React', 'Node.js', 'No-code SaaS', 'make.com-like'],
    hollow: true,
  },
]

export const PROJECTS: Project[] = [
  {
    emoji: '🚴',
    bg: 'rgba(74,222,128,.08)',
    badgeKey: 'p1.b',
    titleKey: 'p1.t',
    descKey: 'p1.d',
    chips: ['React', 'TypeScript', 'TailwindCSS'],
    live: '#',
    github: '#',
  },
  {
    emoji: '⚙️',
    bg: 'rgba(99,102,241,.1)',
    badgeKey: 'p2.b',
    titleKey: 'p2.t',
    descKey: 'p2.d',
    chips: ['React', 'Node.js', 'MySQL', 'Docker'],
    live: '#',
    github: '#',
  },
  {
    emoji: '🏗️',
    bg: 'rgba(251,146,60,.08)',
    badgeKey: 'p3.b',
    titleKey: 'p3.t',
    descKey: 'p3.d',
    chips: ['Angular', 'PrimeNG', 'TypeScript'],
    live: '#',
  },
]

export const CERTS: Certificate[] = [
  { icon: '🏆', titleKey: 'chy.t', subtitleKey: 'chy.s', linkKey: 'chy.l', issuer: 'HackYeah', year: '2024', href: '#' },
  { icon: '📡', titleKey: 'cc1.t', subtitleKey: 'cc1.s', linkKey: 'ccl', issuer: 'Cisco NetAcad', year: '2023', href: '#' },
  { icon: '🔀', titleKey: 'cc2.t', subtitleKey: 'cc2.s', linkKey: 'ccl', issuer: 'Cisco NetAcad', year: '2023', href: '#' },
  { icon: '🏢', titleKey: 'cc3.t', subtitleKey: 'cc3.s', linkKey: 'ccl', issuer: 'Cisco NetAcad', year: '2024', href: '#' },
]

export const TESTIMONIAL_SLIDES: TestimonialCard[][] = [
  [
    { quoteKey: 't1q', roleKey: 't1r', avatar: '👨‍💼' },
    { quoteKey: 't2q', roleKey: 't2r', avatar: '👩‍🎨' },
  ],
  [
    { quoteKey: 't3q', roleKey: 't3r', avatar: '👨‍💻' },
  ],
]
