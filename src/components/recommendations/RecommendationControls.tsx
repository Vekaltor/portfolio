import NavBtn from './NavBtn'
import type {Dispatch, SetStateAction} from 'react'

type Props = {
    total: number
    active: number
    onPrev: () => void
    onNext: () => void
    onSelect: Dispatch<SetStateAction<number>> | ((index: number) => void)
}

export default function RecommendationControls(props: Props) {
    const {
        total,
        active,
        onPrev,
        onNext,
        onSelect,
    } = props;
    return (
        <div className="mt-8 flex items-center justify-center gap-4">
            <NavBtn onClick={onPrev} direction="prev"/>

            <div className="flex gap-2">
                {Array.from({length: total}).map((_, index) => {
                    const isActive = index === active

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => onSelect(index)}
                            aria-label={`Rekomendacja ${index + 1}`}
                            aria-current={isActive ? 'true' : undefined}
                            className="cursor-none transition-all flex items-center justify-center"
                            style={{ width: isActive ? '20px' : '6px', height: '44px', background: 'transparent', padding: 0 }}
                        >
                            <span style={{
                                display: 'block',
                                width: '100%',
                                height: '6px',
                                borderRadius: isActive ? '3px' : '50%',
                                background: isActive ? 'var(--accent)' : 'var(--border2)',
                                transition: 'all 0.3s',
                            }}/>
                        </button>
                    )
                })}
            </div>

            <NavBtn onClick={onNext} direction="next"/>
        </div>
    )
}
