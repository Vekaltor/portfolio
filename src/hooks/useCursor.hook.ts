import { useEffect, useState } from 'react'
import {LocalStorageKeys} from "../types/local-storage-keys.enum.ts";
import localStorageService from "../helpers/local-storage.service.ts";

function useCursor() {
    const [customCursor, setCustomCursor] = useState<boolean>(() => {
        const saved = localStorageService.get(LocalStorageKeys.CURSOR)
        if (saved === null) return true
        return saved === true || saved === 'true'
    })

    const toggleCursor = () => {
        setCustomCursor((prev) => {
            const next = !prev
            localStorageService.save(LocalStorageKeys.CURSOR, next)
            return next
        })
    }

    useEffect(() => {
        document.body.classList.toggle('custom-cursor-enabled', customCursor)
        document.body.classList.toggle('custom-cursor-disabled', !customCursor)

        return () => {
            document.body.classList.remove('custom-cursor-enabled')
            document.body.classList.remove('custom-cursor-disabled')
        }
    }, [customCursor])

    return {
        customCursor,
        toggleCursor,
        setCustomCursor,
    }
}

export default useCursor
