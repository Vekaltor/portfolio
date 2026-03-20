import Sparkles from "./components/effects/Sparkles.tsx";
import Cursor from "./components/effects/Cursor.tsx";
import type {ReactNode} from "react";
import useActiveScroll from "./hooks/useActiveScroll.hook.ts";

interface AppInitUiPluginsProps {
    children: ReactNode
}

function AppInitUiPlugins(props: AppInitUiPluginsProps) {
    const {children} = props
    useActiveScroll();

    return (
        <>
            <Sparkles/>
            <Cursor/>
            {children}
        </>
    )
}

export default AppInitUiPlugins
