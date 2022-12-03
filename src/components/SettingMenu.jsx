import React from 'react'
import { IoClose } from 'react-icons/io5'
const SettingMenu = ({ settingActive, setSettingActive }) => {
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
    
    return (
        <div className={`${settingActive ? 'block' : 'hidden'} transition-all duration-200`}>
            <div className={`absolute z-20 h-[100%] w-[100%] backdrop-blur-lg `}>
                <div className="z-21 absolute items-center mx-auto h-[100%] w-[100%] justify-center flex">
                    <div className="bg-slate-800 rounded-md w-[400px] m-3   ">
                        <div className="p-2 flex items-center">
                            <p className="text-xl font-bold">Setting</p>
                            <div className="flex-1" />
                            <button
                                onClick={() => setSettingActive(false)}
                                className="p-2 rounded-full bg-slate-900 hover:bg-slate-700 duration-100 outline-none focus:ring-2 ring-blue-500"
                            >
                                <IoClose />
                            </button>
                        </div>
                        <hr />
                        <div className="p-2 flex text-md items-center ">
                            <p>Color theme</p>
                            <div className="flex-1" />
                            <select className="text-white p-2  rounded-md bg-slate-700 outline-none focus:ring-2 ring-blue-500 duration-100">
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
                            <select className="text-white p-2  rounded-md bg-slate-700 outline-none focus:ring-2 ring-blue-500 duration-100">
                                {ColorThemeList.map((option) => (
                                    <option key={option.key} value={option.key}>
                                        {option.content}
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
