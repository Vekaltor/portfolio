import type {JSX} from "react";

function ProjectChips({chips}: { chips: string[] }): JSX.Element {
    return (
        <div className="flex flex-wrap gap-[.4rem]">
            {chips.map((chip) => (
                <span
                    key={chip}
                    className="rounded-[5px] border border-[var(--border)] bg-[var(--bg3)] px-[.6rem] py-[.22rem] text-[.62rem] font-medium text-[var(--text3)]"
                >
                  {chip}
                </span>
            ))}
        </div>
    )
}

export default ProjectChips;
