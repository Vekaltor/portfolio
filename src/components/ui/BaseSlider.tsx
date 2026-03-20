import type {CSSProperties, JSX} from 'react'
import {useEffect, useRef, useState} from 'react'
import SliderBtn from '../work/SliderBtn.tsx'

export type SlideState = 'active' | 'prev' | 'next' | 'hidden'

export type SliderItemComponentProps<T> = {
    item: T
    index: number
    state: SlideState
}

type BaseSliderProps<T> = {
    items: T[]
    initialIndex?: number
    minHeightClassName?: string
    slideWidthClassName?: string
    containerClassName?: string
    controlsClassName?: string
    getItemKey: (item: T, index: number) => string
    ItemComponent: (props: SliderItemComponentProps<T>) => JSX.Element
}

export default function BaseSlider<T>(props: BaseSliderProps<T>) {
    const {
        items,
        initialIndex = 0,
        minHeightClassName = 'min-h-[480px]',
        slideWidthClassName = 'w-[420px]',
        containerClassName = '',
        controlsClassName = 'mt-7',
        getItemKey,
        ItemComponent,
    } = props

    const [active, setActive] = useState(initialIndex)
    const [stageHeight, setStageHeight] = useState<number | null>(null)
    const total = items.length

    const activeSlideInnerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const el = activeSlideInnerRef.current
        if (!el) return

        const updateHeight = () => {
            setStageHeight(el.offsetHeight)
        }

        updateHeight()

        const observer = new ResizeObserver(() => {
            updateHeight()
        })

        observer.observe(el)

        return () => observer.disconnect()
    }, [active, items])

    const goPrev = () => setActive((prev) => (prev - 1 + total) % total)
    const goNext = () => setActive((prev) => (prev + 1) % total)

    return (
        <div className={containerClassName}>
            <div
                className={`relative flex items-start justify-center overflow-visible transition-[height] duration-300 ${minHeightClassName}`}
                style={stageHeight ? {height: `${stageHeight}px`} : undefined}
            >
                {items.map((item, index) => {
                    const state = getSlideState(index, active, total)
                    const style = getSlideStyle(state)

                    return (
                        <div
                            key={getItemKey(item, index)}
                            className={`absolute will-change-transform transition-all duration-[650ms] ${slideWidthClassName}`}
                            style={style}
                        >
                            <div
                                ref={state === 'active' ? activeSlideInnerRef : null}
                                className="cert-slider-init"
                                style={{animationDelay: `${index * 70}ms`}}
                            >
                                <ItemComponent item={item} index={index} state={state}/>
                            </div>
                        </div>
                    )
                })}
            </div>

            {items.length >= 2 && (
                <div className={`flex items-center justify-center gap-5 ${controlsClassName}`}>
                    <SliderBtn onClick={goPrev} direction="prev"/>

                    <div className="flex gap-2">
                        {items.map((_, index) => {
                            const isActive = index === active

                            return (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className="cursor-none transition-all"
                                    style={{
                                        width: isActive ? '22px' : '6px',
                                        height: '6px',
                                        borderRadius: isActive ? '3px' : '50%',
                                        background: isActive ? 'var(--accent)' : 'var(--border2)',
                                    }}
                                />
                            )
                        })}
                    </div>

                    <SliderBtn onClick={goNext} direction="next"/>
                </div>
            )}
        </div>
    )
}

function getSlideState(index: number, active: number, total: number): SlideState {
    if (total === 1) return 'active'

    if (total === 2) {
        if (index === active) return 'active'
        return 'next'
    }

    const prev = (active - 1 + total) % total
    const next = (active + 1) % total

    if (index === active) return 'active'
    if (index === prev) return 'prev'
    if (index === next) return 'next'
    return 'hidden'
}

function getSlideStyle(state: SlideState): CSSProperties {
    return {
        opacity: state === 'active' ? 1 : state === 'hidden' ? 0 : 0.22,
        transform:
            state === 'prev'
                ? 'translateX(-320px) scale(.82)'
                : state === 'next'
                    ? 'translateX(320px) scale(.82)'
                    : state === 'hidden'
                        ? 'scale(.7)'
                        : 'scale(1)',
        zIndex: state === 'active' ? 10 : state === 'hidden' ? 0 : 1,
        pointerEvents: state === 'active' ? 'all' : 'none',
    }
}
