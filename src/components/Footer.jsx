import React from 'react'

const Footer = () => {
    return (
        <footer className="absolute bottom-[10px] flex right-[10px] font-ibm z-30">
            <p className="text-md text-black dark:text-white">
                Pound&thinsp;by&thinsp;
                <a href="https://github.com/chenelias" className="">
                    <span className="underline decoration-dotted underline-offset-4">EliasChen</span>
                </a>
            </p>
        </footer>
    )
}

export default Footer
