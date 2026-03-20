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
                            className="cursor-none transition-all"
                            style={{
                                width: isActive ? '20px' : '6px',
                                height: '6px',
                                borderRadius: isActive ? '3px' : '50%',
                                background: isActive ? 'var(--accent)' : 'var(--border2)',
                            }}
                        />
                    )
                })}
            </div>

            <NavBtn onClick={onNext} direction="next"/>
        </div>
    )
}
