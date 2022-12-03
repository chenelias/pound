import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
const Header = ({ settingActive, setSettingActive }) => {
    
    return (
        
        <header className="fixed w-full backdrop-blur-lg py-3 px-5 z-30">
            <div className=" mx-auto max-w-6xl flex">
                <h1 className="font-ibm font-bold text-2xl">
                    <span className="text-3xl">+</span>Pound
                </h1>
                <div className="flex-1"></div>
                <button
                    onClick={() => setSettingActive(!settingActive)}
                    className="text-2xl active:text-slate-200 p-1 hover:bg-slate-600 rounded-md"
                >
                    <AiOutlineSetting />
                </button>
            </div>
        </header>
    )
}

export default Header
