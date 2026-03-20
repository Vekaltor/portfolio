import {HERO_MAIN_TECHNOLOGY_PILLS} from '../../constants/content.ts'

const HERO_PILL_CLASSES = ['p1', 'p2', 'p3', 'p4', 'p5'] as const

function HeroMainTechnologies() {
    return (
        <div className="mb-8 hidden flex-wrap gap-[.6rem] md:flex">
            {HERO_MAIN_TECHNOLOGY_PILLS.map((pill, index) => {
                return (
                    <span
                        key={pill.name}
                        className={`${HERO_PILL_CLASSES[index]} inline-flex items-center gap-[.55rem] rounded-full border border-[var(--border2)] bg-[var(--bg2)] px-4 py-[.45rem] text-[.9rem] font-semibold text-[var(--text2)] transition-all hover:border-[var(--accent)] hover:bg-[var(--accentbg)] hover:text-[var(--text)]`}
                    >
                        <img
                            src={pill.src}
                            alt={pill.name}
                            className="h-5 w-5 object-contain"
                            style={pill.invert ? {filter: 'invert(1)'} : {}}
                        />
                        {pill.name}
                    </span>
                )
            })}
        </div>
    )
}

export default HeroMainTechnologies
