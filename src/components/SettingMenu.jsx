import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { BsTrash } from 'react-icons/bs'
import { ChromePicker } from 'react-color'
const SettingMenu = ({ settingActive, setSettingActive, setsearchengin, searchengin, setbackground, background }) => {
    const useLocalStorage = (keyName, defaultValue) => {
        const [storedValue, setStoredValue] = React.useState(() => {
            try {
                const value = window.localStorage.getItem(keyName)

                if (value) {
                    return JSON.parse(value)
                } else {
                    window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
                    return defaultValue
                }
            } catch (err) {
                return defaultValue
            }
        })
        const setValue = (newValue) => {
            try {
                window.localStorage.setItem(keyName, JSON.stringify(newValue))
            } catch (err) {}
            setStoredValue(newValue)
        }

        return [storedValue, setValue]
    }
    /////////////////////////
    function useDarkMode() {
        const [theme, setTheme] = useState(
            typeof window !== 'undefined'
                ? localStorage.theme
                : window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
        )
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
    const [systheme, setsystheme] = useLocalStorage('systheme', false)
    useEffect(() => {
        if (systheme) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark')
            } else {
                setTheme('light')
            }
        } else {
        }
    }, [])
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
        if (select === 'system') {
            setsystheme(true)
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark')
            } else {
                setTheme('light')
            }
        } else {
            setsystheme(false)
            setTheme(select)
        }
    }
    useEffect(() => {
        document.querySelector('#hexinput').value = background
    }, [background])
    useEffect(() => {
        document.querySelector('#browsercolorinput').value = background
    }, [background])
    function colorinputonchange(x) {
        setbackground(x)
        document.querySelector('#hexinput').value = background
    }
    function backgroundcolorclear() {
        setbackground('')
        document.querySelector('#hexinput').value = ''
    }
    return (
        <div className={`${settingActive ? 'block' : 'hidden'} transition-all duration-200`}>
            <div className={`absolute z-20 h-[100%] w-[100%] backdrop-blur-lg `}>
                <div className="z-21 absolute items-center mx-auto h-[100%] w-[100%] justify-center flex">
                    <div className="dark:bg-slate-800 bg-slate-100 rounded-md w-[400px] m-3 drop-shadow-xl text-black dark:text-white">
                        <div className="p-2 flex items-center">
                            <p className="text-2xl font-bold font-ibm">Setting</p>
                            <div className="flex-1" />
                            <button
                                onClick={() => setSettingActive(false)}
                                className=" p-2 rounded-full bg-slate-300 hover:bg-slate-400 dark:bg-slate-900 dark:hover:bg-slate-700 duration-100 outline-none focus:ring-2 ring-blue-500"
                            >
                                <IoClose />
                            </button>
                        </div>
                        <hr />
                        <div className="p-2 mt-1 flex text-md items-center ">
                            <p>Color theme</p>
                            <div className="flex-1" />
                            <select
                                value={systheme ? 'system' : theme}
                                onChange={(x) => ToggleTheme(x.target.value)}
                                className="text-black bg-gray-200 dark:text-white p-2 font-medium rounded-md dark:bg-slate-700 outline-none focus:ring-2 ring-blue-500 duration-100"
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
                                className="text-black bg-gray-200 dark:text-white p-2 font-medium rounded-md dark:bg-slate-700 outline-none focus:ring-2 ring-blue-500 duration-100"
                            >
                                {searchengine.map((option) => (
                                    <option key={option.key} value={option.key}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="p-2 flex text-md items-center ">
                            <p>Background</p>
                            <div className="flex-1" />
                            <button
                                onClick={backgroundcolorclear}
                                className="outline-none focus:ring-2 ring-blue-500 text-xl text-red-600 mx-1 p-2 bg-gray-200 dark:bg-slate-700 rounded-md"
                            >
                                <BsTrash />
                            </button>
                            <input
                                type="text"
                                placeholder="#"
                                id="hexinput"
                                onChange={(x) => setbackground(x.target.value)}
                                className="text-lg outline-none focus:ring-2 ring-blue-500 bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-md w-[100px]"
                            />
                            <input
                                type="color"
                                onChange={(x) => colorinputonchange(x.target.value)}
                                value={background}
                                id="browsercolorinput"
                                className="text-lg outline-none focus:ring-2 rounded-md ml-1 bg-gray-200 dark:bg-slate-700 px-1 w-10 h-9"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingMenu
