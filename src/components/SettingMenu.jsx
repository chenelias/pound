import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
// import useDarkMode from './useColorMode'
const SettingMenu = ({ settingActive, setSettingActive, setsearchengin, searchengin }) => {
    function useDarkMode() {
        const [theme, setTheme] = useState(typeof window !== 'undefined' ? localStorage.theme : 'dark')
        const colorTheme = theme === 'dark' ? 'light' : 'dark'

        useEffect(() => {
            const root = window.document.documentElement

            root.classList.remove(colorTheme)
            root.classList.add(theme)

            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', theme)
            }
        }, [theme])

        return [theme, setTheme]
    }

    const [theme, setTheme] = useDarkMode()
    const ColorThemeList = [
        {
            content: 'Light',
            key: 'light',
        },
        {
            content: 'Dark',
            key: 'dark',
        },
        {
            content: 'System',
            key: 'system',
        },
    ]
    const searchengine = [
        {
            name: 'Google',
            key: 'google',
        },
        {
            name: 'Duckduckgo',
            key: 'duckduckgo',
        },
    ]
    function ToggleTheme(select) {
        setTheme(select)
    }
    return (
        <div className={`${settingActive ? 'block' : 'hidden'} transition-all duration-200`}>
            <div className={`absolute z-20 h-[100%] w-[100%] backdrop-blur-lg `}>
                <div className="z-21 absolute items-center mx-auto h-[100%] w-[100%] justify-center flex">
                    <div className="dark:bg-slate-800 bg-slate-100 rounded-md w-[400px] m-3 text-black dark:text-white">
                        <div className="p-2 flex items-center">
                            <p className="text-2xl font-bold font-ibm">Setting</p>
                            <div className="flex-1" />
                            <button
                                onClick={() => setSettingActive(false)}
                                className="drop-shadow-xl p-2 rounded-full bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 duration-100 outline-none focus:ring-2 ring-blue-500"
                            >
                                <IoClose />
                            </button>
                        </div>
                        <hr />
                        <div className="p-2 flex text-md items-center ">
                            <p>Color theme</p>
                            <div className="flex-1" />
                            <select
                                value={theme}
                                onChange={(x) => ToggleTheme(x.target.value)}
                                className="text-white p-2 font-medium rounded-md bg-slate-700 outline-none focus:ring-2 ring-blue-500 duration-100"
                            >
                                {ColorThemeList.map((option) => (
                                    <option key={option.key} value={option.key}>
                                        {option.content}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="p-2 flex text-md items-center ">
                            <p>Search engine</p>
                            <div className="flex-1" />
                            <select
                                onChange={(x) => setsearchengin(x.target.value)}
                                value={searchengin}
                                className="text-white p-2 font-medium rounded-md bg-slate-700 outline-none focus:ring-2 ring-blue-500 duration-100"
                            >
                                {searchengine.map((option) => (
                                    <option key={option.key} value={option.key}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingMenu
