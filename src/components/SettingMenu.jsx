import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { BsTrash } from 'react-icons/bs'
import { ChromePicker } from 'react-color'
import { GrPowerReset } from 'react-icons/gr'
import { exportImage } from '../image/exportImage'

const SettingMenu = ({
    settingActive,
    setSettingActive,
    setsearchengin,
    searchengin,
    setbackground,
    background,
    backgroundImage,
    setBackgroundImage,
}) => {
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
        {
            name: 'Yahoo',
            key: 'yahoo',
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
        setBackgroundImage(null)
        setbackground(x)
        document.querySelector('#hexinput').value = background
    }
    function backgroundcolorclear() {
        setbackground('')
        document.querySelector('#hexinput').value = ''
    }
    function backtodefault() {
        var yes = confirm('Back to default setting\nAre you sure?')
        if (yes) {
            localStorage.clear()
            location.reload()
        } else {
        }
    }
    useEffect(() => {
        setBackgroundImage(null)
        document.querySelector('#fileinputbox').value = ''
    }, [background])
    function fileInput(x) {
        setBackgroundImage(x)
        document.querySelector('#hexinput').value = null
        // setbackground('')
    }
    return (
        <div className={`${settingActive ? 'block' : 'hidden'} transition-all duration-200 h-[100%]`}>
            <div
                className={`fixed z-20 h-[100%] w-[100%] backdrop-blur-lg overflow-auto flex justify-center !pt-[100px] items-center`}
            >
                {/* <div className="h-[60px]"></div> */}
                <div
                    id="windowsetting"
                    className=" dark:bg-slate-800 absoult bg-slate-100 rounded-md w-[400px] m-3 drop-shadow-xl text-black dark:text-white overflow-y"
                >
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
                            className="outline-none focus:ring-2 ring-blue-500 text-xl text-red-600 dark:text-white  mx-1 p-2 bg-gray-200 dark:bg-slate-700 rounded-md"
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
                    <div className="hidden">
                        <div className="p-2 block text-md items-center ">
                            <p>Background Image</p>
                            <div className="flex flex-col mt-1 items-center justify-center w-full h-[120px] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="absolute rounded-md items-center">
                                    <p className="text-center text-md">
                                        <span className="font-medium">Click</span> to upload
                                        <br />
                                        or
                                        <br />
                                        <span className="font-medium">drop</span> and{' '}
                                        <span className="font-medium">drop</span>
                                    </p>
                                </div>
                                <input
                                    type="file"
                                    id="fileinputbox"
                                    name="fileinputbox"
                                    onChange={(x) => fileInput(x)}
                                    className="cursor-pointer opacity-0 !h-[120px] w-full rounded-md "
                                />
                            </div>
                        </div>

                        {backgroundImage && (
                            <div className="p-1">
                                <img
                                    src={backgroundImage}
                                    className="max-h-[150px] mx-auto w-auto rounded-md border-[1px] border-black dark:border-white"
                                    alt="User upload image"
                                />
                            </div>
                        )}
                    </div>
                    {/* <div className="flex overflow-x-auto p-3 items-center snap-x snap-mandatory ">
                        {exportImage.map((img) => (
                            <img
                                key={img.filename}
                                onClick={() => fileInput(img.filename)}
                                src={require('../image/' + img.filename + '.jpg')}
                                className={`snap-center hover:opacity-70 hover:rounded-xl hover:p-[1.5px] duration-100 h-[130px] rounded-lg mr-2 cursor-pointer ${
                                    backgroundImage === img.filename
                                        ? '!border-[4px] !border-blue-600 !p-[2px] !rounded-xl'
                                        : ''
                                }`}
                            />
                        ))}
                    </div> */}
                    {/* <img src={require(`../image/${backgroundImage}.jpg`)} alt="" /> */}
                    <div className="p-3 mt-2">
                        <button
                            onClick={() => backtodefault()}
                            className="text-lg p-1 font-bold text-center w-full outline-none focus:ring-2 ring-blue-500 bg-red-600 duration-100 hover:bg-gradient-to-t from-red-700 to-red-600 text-white items-center rounded-md"
                        >
                            Back to default settings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingMenu
