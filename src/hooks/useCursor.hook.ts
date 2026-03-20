import { useEffect, useState } from 'react'

function useCursor() {
    const [customCursor, setCustomCursor] = useState(true)

    useEffect(() => {
        document.body.classList.toggle('custom-cursor-enabled', customCursor)
        document.body.classList.toggle('custom-cursor-disabled', !customCursor)

        return () => {
            document.body.classList.remove('custom-cursor-enabled')
            document.body.classList.remove('custom-cursor-disabled')
        }
    }, [customCursor])

    const toggleCursor = () => {
        setCustomCursor((prevState) => !prevState)
    }

    return {
        customCursor,
        toggleCursor,
        setCustomCursor,
    }
}

export default useCursor
