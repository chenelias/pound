import React from 'react'

const Footer = () => {
    return (
        <footer className="fixed bg-slate-200 dark:bg-slate-700 p-1 !border-[1px] dark:border-white border-black rounded-md backdrop-opacity-25   bottom-[10px] flex right-[10px] font-ibm z-30">
            <p className="text-md text-black dark:text-white">
                Pound&thinsp;by&thinsp;
                <a href="https://github.com/chenelias" target="_blank" className="">
                    <span className="underline decoration-dotted focus:ring-2 ring-blue-500 underline-offset-4">
                        EliasChen
                    </span>
                </a>
            </p>
        </footer>
    )
}

export default Footer
