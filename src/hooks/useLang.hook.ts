import {useContext} from "react";
import type {LangContextValue} from "../context/LangContext.tsx";
import {LangContext} from "../context/LangContext.tsx";

export function useLang(): LangContextValue {
    const ctx = useContext(LangContext)
    if (!ctx) throw new Error('useLang must be used inside LangProvider')
    return ctx
}
