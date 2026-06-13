import type {TechIcon} from "../types/techIcon.interface.ts";

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
