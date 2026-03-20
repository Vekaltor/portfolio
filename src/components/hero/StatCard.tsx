import {classNames} from '../../helpers/classNames.helper.ts'

interface StatCardProps {
    value: string
    label: string
    className?: string
}

function StatCard(props: StatCardProps) {
    const {value, label, className} = props

    return (
        <div
            className={classNames(
                'w-fit flex-1 rounded-[18px] border border-[var(--border)] bg-[var(--bg2)] px-4 py-4 text-center transition-all duration-300',
                'hover:-translate-y-0.5 hover:border-[var(--border2)] hover:bg-[var(--bg3)]',
                className
            )}
        >
            <div className="font-display text-[1.65rem] font-bold leading-none tracking-[-0.04em] text-[var(--text)]">
                {value}
            </div>

            <div className="mt-2 text-[.62rem] font-semibold uppercase tracking-[.1em] text-[var(--text3)]"
                dangerouslySetInnerHTML={{__html: label}}
            />
        </div>
    )
}

export default StatCard
