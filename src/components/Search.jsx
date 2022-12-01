import React, { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { searchengin } from '../config'
import { BsTrash } from 'react-icons/bs'
const search = () => {
    const [searchInput, setSearchInput] = useState('')
    function Search(event) {
        if (event.key === 'Enter') {
            window.location = 'http://www.google.com/search?q=' + searchInput
        }
    }
    function searchclear() {
        document.querySelector('.searchinput').value = ''
    }
    return (
        <div className="absolute items-center mx-auto h-[100%] w-[100vw] justify-center flex">
            <div className="items-center flex text-white">
                <a
                    href={searchengin !== 'duckduckgo' ? 'https://www.google.com/' : 'https://duckduckgo.com/'}
                    className="text-2xl absolute ml-2"
                >
                    <GoSearch />
                </a>
                <input
                    type="text"
                    className="searchinput outline-none focus:ring-blue-400 focus:ring-[3px] duration-100 p-2 pl-[40px] text-3xl w-[700px] text-white bg-slate-700 rounded-xl"
                    placeholder={`Search ${'on ' + searchengin}`}
                    onKeyPress={(e) => e.key === 'Enter' && Search(e)}
                    onChange={(x) => setSearchInput(x.target.value)}
                />

                <button
                    onClick={searchclear}
                    className={`clearbutton text-2xl text-red-600 p-1 hover:bg-slate-700 duration-100 rounded-lg ml-1 `}
                >
                    <BsTrash />
                </button>
            </div>
        </div>
    )
}

export default search
