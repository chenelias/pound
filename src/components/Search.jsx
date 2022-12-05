import React, { useState, useEffect } from 'react'
import { GoSearch } from 'react-icons/go'
import { BsTrash } from 'react-icons/bs'
import Clock from 'react-live-clock'
const search = ({ searchengin, background, backgroundImage, setBackgroundImage }) => {
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
    useEffect(() => {
        if (backgroundImage !== null) {
            document.querySelector('#searchbody').style.backgroundImage = `url("${backgroundImage}")`
        } else {
        }
    }, [backgroundImage])
    useEffect(() => {
        if (background !== '') {
            document.querySelector('#searchbody').style.backgroundColor = background
        } else {
            document.querySelector('#searchbody').style.backgroundColor = ''
        }
    }, [background])

    useEffect(() => {
        document.querySelector('#searchinput').focus()
    }, [])

    return (
        <div
            id="searchbody"
            className={`absolute items-center mx-auto z-10 dark:bg-[#111] bg-[#f9fafb] dark:text-white text-black h-[100%] w-[100%] justify-center flex`}
        >
            <div
                className="z-15 absolute h-[100%] w-[100%] justify-center items-center flex"
                style={{ backgroundImage: `require(/public/images/room2.png)` }}
            >
                <div className="!block">
                    <div className="backdrop-blur-xl rounded-md p-4 items-center mx-auto mb-4 max-w-[500px]  dark:bg-[rgba(17, 17, 17,0.29)] bg-[rgba(249, 250, 251,0.30)]">
                        <Clock
                            className={`font-extrabold xs:text-7xl text-center text-5xl block m-1`}
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
                            className=" outline-none focus:ring-[2px] ring-blue-500 text-2xl absolute ml-2 text-black p-2 rounded-md  dark:text-white"
                        >
                            <GoSearch />
                        </a>
                        <input
                            id="searchinput"
                            type="text"
                            className="searchinput border-[2px] dark:border-white  dark:bg-slate-700 bg-gray-100 outline-none focus:ring-blue-400 focus:ring-[4px] duration-100 p-2 pl-[50px] text-2xl searchbox:text-3xl w-full searchbox:w-[800px] text-black dark:text-white  rounded-xl"
                            placeholder={`Search ${'on ' + searchengin}`}
                            onKeyPress={(e) => e.key === 'Enter' && Search(e)}
                            onChange={(x) => setSearchInput(x.target.value)}
                        />
                        <div className="h-[50px] w-[50px] items-center flex">
                            <button
                                onClick={searchclear}
                                className={`relative ${
                                    searchInput !== '' ? 'block' : 'hidden'
                                } !right-[50px] clearbutton text-2xl outline-none focus:ring-[3px] ring-blue-600 text-red-600 p-1 hover:bg-red-300 dark:hover:bg-red-500 duration-200 dark:text-white active:text-red-700 rounded-lg ml-2 `}
                            >
                                <BsTrash />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default search
