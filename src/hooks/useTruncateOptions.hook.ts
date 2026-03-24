import {CSSProperties, RefObject, useEffect, useRef, useState} from "react";

interface UseTruncateOptions {
    lines?: number;
    onExpand?: () => void;
    onCollapse?: () => void;
}

interface UseTruncateReturn {
    textRef: RefObject<HTMLParagraphElement | null>;
    isClamped: boolean;
    expanded: boolean;
    toggle: () => void;
    style: CSSProperties | undefined;
}

export function useTruncate(props: UseTruncateOptions): UseTruncateReturn {
    const {
        lines = 4,
        onExpand,
        onCollapse,
    } = props;
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const [isClamped, setIsClamped] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        const check = () => setIsClamped(el.scrollHeight > el.clientHeight + 2);

        const observer = new ResizeObserver(check);
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const toggle = () => {
        setExpanded((prev) => {
            const next = !prev;
            if (next) onExpand?.();
            else onCollapse?.();
            return next;
        });
    };

    const style: CSSProperties | undefined = expanded
        ? undefined
        : {
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: lines,
        };

    return {textRef, isClamped, expanded, toggle, style};
}
