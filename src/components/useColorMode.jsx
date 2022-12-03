import { useEffect, useState } from 'react'

function useDarkMode() {
    function getsyscolormode() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        } else {
            return 'light'
        }
    }
    const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : getsyscolormode)
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove(colorTheme)
        root.classList.add(theme)

        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    return [colorTheme, setTheme]
}

export default useDarkMode
