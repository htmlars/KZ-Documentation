import React, { useState } from 'react'
import { GlobeAltIcon, ArrowUpRightIcon, LockClosedIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Toggle from './Toggle';

const menuItem = (title, subItems = []) => (
    <>
        <a className='rounded-md flex-1 py-[8px] px-[10px] leading-[148%] bg-gray-100 text-zinc-700 dark:text-zinc-400 dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:border-none w-full border shadow-sm hover:bg-gray-200 dark:hover:bg-zinc-800' href=""><button>{title}</button></a>
        <div className="w-full flex flex-col pl-2 border-l dark:border-l-zinc-800">
            {subItems.map((item, index) => (
                <a key={index} className='rounded-md flex-1 py-[8px] px-[10px] leading-[148%] hover:bg-gray-100 dark:hover:bg-zinc-900 w-full text-zinc-600 dark:text-zinc-500' href=""><button>{item}</button></a>
            ))}
        </div>
    </>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }

    return (
        <div className=''>
            <nav className='fixed z-50 left-0 right-0 bottom-auto top-0 flex justify-between items-center px-[16px] sm:px-[32px] py-[24px] border-b bg-white dark:border-b-zinc-800 dark:bg-zinc-950 w-full'>
                <div className="flex items-center gap-4">
                    <button className='lg:hidden' onClick={toggleMenu}>
                        {menuOpen ? <XMarkIcon className='h-6 w-6 dark:text-zinc-100' /> : <Bars3Icon className='h-6 w-6 dark:text-zinc-100' />}
                    </button>
                    <button className='bg-zinc-900 dark:bg-zinc-900 border dark:border-zinc-800 rounded-md'>
                        <img className='h-10 w-10 shadow-sm' src="kz_logo.png" alt="kz-logo" />
                    </button>
                    <div className='hidden sm:inline-flex gap-1 rounded-full border items-center text-sm p-[4px] pr-2 bg-gray-100 dark:bg-zinc-950 dark:border-zinc-800'>
                        <button className='p-0.5 w-4 h-4 cursor-default inline-flex items-center justify-center border border-gray-300 rounded-full bg-white dark:bg-zinc-900 dark:border-zinc-800'>
                            <div className="bg-yellow-500 h-2 w-2 rounded-full">
                                <span className='sr-only'>neon</span>
                            </div>
                        </button>
                        <p className='text-zinc-950 dark:text-zinc-100'>Development Preview</p>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">

                    <Toggle setDarkTheme={setDarkTheme} />

                    <a href="https://github.com">
                        <button className='p-1 bg-gray-100 rounded-md dark:bg-zinc-900 border dark:border-zinc-800'>
                            {
                                darkTheme ? (
                                    <img className='w-6 h-6' src='github-mark-white.svg' alt='github' />
                                ) : (
                                    <img className='w-6 h-6' src="github-mark.svg" alt='github' />
                                )
                            }
                        </button>
                    </a>
                    <a href="https://discord.com">
                        <button className='p-1 bg-gray-100 rounded-md dark:bg-zinc-900 border dark:border-zinc-800'>
                            {
                                darkTheme ? (
                                    <img className='w-6 h-6' src='discord-mark-white.svg' alt='discord' />
                                ) : (
                                    <img className='w-6 h-6' src="discord-mark-black.svg" alt='discord' />
                                )
                            }
                        </button>
                    </a>
                </div>
            </nav>
            <aside className={`text-sm fixed top-0 left-0 bottom-0 w-full md:w-[364px] lg:flex flex-col justify-between h-screen bg-white dark:border-r-zinc-800 dark:bg-zinc-950 transition-transform duration-300 ease-in-out transform md:border-r lg:translate-x-0 ${menuOpen ? 'flex' : '-translate-x-full flex'}`} style={{ zIndex: 40 }}>
                <div className="pt-[120px] px-[16px] sm:px-[32px] pb-[32px] w-full flex flex-col items-start justify-start font-medium gap-2">
                    {menuItem("GOKZ Guides", [
                        "Install GOKZ",
                        "Whitelisting for GOKZ"
                    ])}
                    {menuItem("KZTimer Guides", [
                        "Install KZTimer",
                        "Whitelisting for KZTimer"
                    ])}
                    {menuItem("Useful Plugins Guide")}
                </div>
                <a className='flex justify-between items-center px-[16px] sm:px-[32px] py-[32px] border-t bg-white hover:bg-gray-100 dark:bg-zinc-950 dark:hover:bg-zinc-900 dark:border-t-zinc-800 dark:text-zinc-400' href="">
                    <button className='inline-flex items-center gap-2'>
                        <GlobeAltIcon className='w-4 h-4' />
                        Visit Forum
                    </button>
                    <ArrowUpRightIcon className='w-4 h-4' />
                </a>
            </aside>
        </div>
    )
}

export default Navbar;