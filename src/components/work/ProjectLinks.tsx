import type {JSX} from "react";

interface ProjectLinksProps {
    live?: string
    github?: string
}

function ProjectLinks(props: ProjectLinksProps): JSX.Element | null {
    const {
        live,
        github,
    } = props;

    if (!live && !github) return null

    return (
        <div className="flex items-center gap-3">
            {live && (
                <a
                    href={live}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-none underline text-[.74rem] font-medium text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
                >
                    Live
                </a>
            )}

            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-none underline text-[.74rem] font-medium text-[var(--text3)] transition-colors hover:text-[var(--accent)]"
                >
                    GitHub
                </a>
            )}
        </div>
    )
}

export default ProjectLinks;
