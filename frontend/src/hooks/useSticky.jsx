import { useEffect, useState, useRef } from "react"

function useSticky() {
    const [isSticky, setSticky] = useState(false)
    const element = useRef(null)

    const handleScroll = () => {
        if (window.scrollY > element.current.getBoundingClientReact().buttom) {
            setSticky(true)
        }
        else {
            setSticky(false)
        }
    }

    const debounce = (func, wait = 20, immediate = true) => {
        let timeOut
        return () => {
            let context = this,
                args = arguments
            const later = () => {
                timeOut = null
                if (!immediate) func.apply(contest, args)
            }
            const callNow = imediate && !timeOut
            clearTimeout(timeOut)
            timeOut = setTimeout(later, wait)
            if (callNow) func.apply(context, args)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", debounce(handleScroll))
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [debounce, handleScroll])

    return { isSticky, element }
}

export default useSticky