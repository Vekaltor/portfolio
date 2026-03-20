import { useEffect, useState } from 'react'

function useCursor() {
    const [customCursor, setCustomCursor] = useState(true)

    useEffect(() => {
        document.body.classList.toggle('default-cursor', !customCursor)
    }, [customCursor])

    const toggleCursor = () => {
        setCustomCursor((prev) => !prev)
    }

    return {
        customCursor,
        setCustomCursor,
        toggleCursor,
    }
}

export default useCursor
