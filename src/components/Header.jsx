import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
const Header = ({ settingActive, setSettingActive }) => {
    return (
        <header className="fixed w-full backdrop-blur-xl py-2 px-5 z-30  dark:!bg-[rgba(17, 17, 17,0.29)] !bg-[rgba(249, 250, 251,0.30)]">
            <div className=" mx-auto max-w-6xl flex">
                <a href="/">
                    <h1 className=" outline-none focus:ring-[2px] ring-blue-500 select-none font-ibm font-bold text-2xl group hover:dark:bg-white hover:bg-black  p-1 text-dark dark:text-white hover:dark:text-black hover:text-white cursor-pointer transition-all ">
                        <span className="text-3xl ">+</span>Pound
                    </h1>
                </a>
                <div className="flex-1"></div>
                <button
                    onClick={() => setSettingActive(!settingActive)}
                    className="text-2xl dark:text-white dark:hover:bg-slate-800 active:text-slate-700 outline-none focus:ring-[4px] ring-blue-500 p-2 duration-100 hover:bg-slate-300 rounded-md"
                >
                    <AiOutlineSetting />
                </button>
            </div>
        </header>
    )
}

export default Header
