import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { BsTrash } from 'react-icons/bs'
import Clock from 'react-live-clock'
const search = ({ searchengin }) => {
    const [searchInput, setSearchInput] = useState('')
    function Search(event) {
        if (event.key === 'Enter') {
            window.location =
                searchengin !== 'duckduckgo'
                    ? 'https://www.google.com/search?q=' + searchInput
                    : 'https://duckduckgo.com/?q=' + searchInput
        }
    }
    function searchclear() {
        document.querySelector('.searchinput').value = ''
        setSearchInput('')
    }

    return (
        <div className="absolute items-center mx-auto z-10 dark:bg-[#111111] bg-[#f9fafb] dark:text-white text-black h-[100%] w-[100%] justify-center flex">
            <div className="!block">
                <div className="backdrop-blur-lg rounded-md p-4 items-center mx-auto mb-4">
                    <Clock
                        className="font-extrabold xs:text-7xl text-center text-5xl block m-1"
                        format={'h:mm:ss A'}
                        ticking={true}
                    />
                </div>

                <div className="items-center flex text-white ml-[40px]">
                    <a
                        href={
                            searchInput === ''
                                ? searchengin !== 'duckduckgo'
                                    ? 'https://www.google.com/'
                                    : 'https://duckduckgo.com/'
                                : searchengin !== 'duckduckgo'
                                ? `https://www.google.com/search?q=${searchInput}`
                                : `https://duckduckgo.com/?q=${searchInput}`
                        }
                        className="text-2xl absolute ml-2 text-black p-2 rounded-md  dark:text-white"
                    >
                        <GoSearch />
                    </a>
                    <input
                        type="text"
                        className="searchinput border-[2px] dark:border-white  dark:bg-slate-700 bg-gray-300 outline-none focus:ring-blue-400 focus:ring-[4px] duration-100 p-2 pl-[50px] text-2xl searchbox:text-3xl w-full searchbox:w-[800px] text-black dark:text-white  rounded-xl"
                        placeholder={`Search ${'on ' + searchengin}`}
                        onKeyPress={(e) => e.key === 'Enter' && Search(e)}
                        onChange={(x) => setSearchInput(x.target.value)}
                    />
                    <div className="h-[50px] w-[50px] items-center flex">
                        <button
                            onClick={searchclear}
                            className={`relative ${
                                searchInput !== '' ? 'block' : 'hidden'
                            } !right-[50px] clearbutton text-2xl outline-none focus:ring-[3px] ring-blue-600 text-red-500 p-1 hover:bg-red-200 dark:hover:bg-red-300 duration-200 active:text-red-700 rounded-lg ml-2 `}
                        >
                            <BsTrash />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default search
