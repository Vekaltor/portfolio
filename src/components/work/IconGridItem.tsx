import {useReveal} from "../../hooks/useReveal.hook.ts";
import type {TechIcon} from "../../types/techIcon.interface.ts";
import useAppPreferences from "../../hooks/useAppPreferences.hook.ts";

type IconGridItemProps = {
    item: TechIcon;
    dim: boolean;
    index: number;
};

function getBaseFilter(dim: boolean, invert: boolean, isLight: boolean) {
    if (dim) {
        return "grayscale(.55) brightness(.65)";
    }

    if (invert && !isLight) {
        return "invert(1)";
    }

    return "brightness(.85) saturate(.9)";
}

function getHoverFilter(invert: boolean, isLight: boolean) {
    if (invert && !isLight) {
        return "invert(1)";
    }

    return "brightness(1) saturate(1)";
}

function IconGridItem({item, dim, index}: IconGridItemProps) {
    const ref = useReveal<HTMLDivElement>({
        once: true,
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
    });
    const {theme} = useAppPreferences();
    const isLight = theme === "light";
    const shouldInvert = Boolean(item.invert);
    const baseFilter = getBaseFilter(dim, shouldInvert, isLight);
    const hoverFilter = getHoverFilter(shouldInvert, isLight);

    return (
        <div
            ref={ref}
            className="rv group flex w-[68px] cursor-default flex-col items-center gap-[.6rem]"
            style={{transitionDelay: `${index * 45}ms`}}
        >
            <img
                src={item.src}
                alt={item.name}
                loading="lazy"
                className="h-12 w-12 object-contain transition-all duration-300 group-hover:-translate-y-[6px] group-hover:scale-[1.15] group-hover:drop-shadow-[0_6px_14px_rgba(74,222,128,.3)]"
                style={{filter: baseFilter}}
                onMouseEnter={(e) => {
                    e.currentTarget.style.filter = hoverFilter;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.filter = baseFilter;
                }}
            />

            <span
                className="whitespace-nowrap text-center text-[.68rem] font-semibold tracking-[.02em] text-[var(--text3)] transition-colors group-hover:text-[var(--text)]">
                {item.name}
            </span>
        </div>
    );
}

export default IconGridItem;
