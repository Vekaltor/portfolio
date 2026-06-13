import type {TechIcon} from "../types/techIcon.interface.ts";

const icon = (src: string, name: string, invert = false): TechIcon => ({src, name, invert})

// Lokalne ikony — bez zewnętrznego CDN
import typescript  from '@assets/icons/tech/typescript-typescript-original.svg'
import javascript  from '@assets/icons/tech/javascript-javascript-original.svg'
import html5       from '@assets/icons/tech/html5-html5-original.svg'
import css3        from '@assets/icons/tech/css3-css3-original.svg'
import mysql       from '@assets/icons/tech/mysql-mysql-original.svg'
import react       from '@assets/icons/tech/react-react-original.svg'
import angularjs   from '@assets/icons/tech/angularjs-angularjs-original.svg'
import redux       from '@assets/icons/tech/redux-redux-original.svg'
import vuejs       from '@assets/icons/tech/vuejs-vuejs-original.svg'
import tailwindcss from '@assets/icons/tech/tailwindcss-tailwindcss-original.svg'
import primeng     from '@assets/icons/tech/primeng-primeng-original.svg'
import docker      from '@assets/icons/tech/docker-docker-original.svg'
import nodejs      from '@assets/icons/tech/nodejs-nodejs-original.svg'
import git         from '@assets/icons/tech/git-git-original.svg'
import vitejs      from '@assets/icons/tech/vitejs-vitejs-original.svg'
import github      from '@assets/icons/tech/github-github-original.svg'
import gitlab      from '@assets/icons/tech/gitlab-gitlab-original.svg'
import postman     from '@assets/icons/tech/postman-postman-original.svg'
import intellij    from '@assets/icons/tech/intellij-intellij-original.svg'
import flutter     from '@assets/icons/tech/flutter-flutter-original.svg'

export const LANG_ICONS: TechIcon[] = [
    icon(typescript, 'TypeScript'),
    icon(javascript, 'JavaScript'),
    icon(html5,      'HTML5'),
    icon(css3,       'CSS3'),
    icon(mysql,      'MySQL'),
]

export const FW_ICONS: TechIcon[] = [
    icon(react,       'React'),
    icon(angularjs,   'Angular'),
    icon(redux,       'Redux'),
    icon(vuejs,       'Vue.js'),
    icon(tailwindcss, 'Tailwind CSS'),
    icon(primeng,     'PrimeNG'),
]

export const TOOL_ICONS: TechIcon[] = [
    icon(docker,   'Docker'),
    icon(nodejs,   'Node.js'),
    icon(git,      'Git'),
    icon(vitejs,   'Vite'),
    icon(github,   'GitHub', true),
    icon(gitlab,   'GitLab'),
    icon(postman,  'Postman'),
    icon(intellij, 'IntelliJ'),
]

export const LEARN_ICONS: TechIcon[] = [
    icon(flutter, 'Flutter'),
]

export const HERO_MAIN_TECHNOLOGY_PILLS: TechIcon[] = [
    icon(react,       'React'),
    icon(angularjs,   'Angular'),
    icon(typescript,  'TypeScript'),
    icon(tailwindcss, 'Tailwind CSS'),
    icon(primeng,     'PrimeNG'),
]
