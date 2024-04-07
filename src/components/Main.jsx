import React from 'react'
import OnThisPage from './OnThisPage'
import Code from './Code'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import '../index.css'

const pageElements = [
    "Installing Metamod:Source",
    "Installing SourceMod",
    "Installing MovementAPI",
    "Installing GOKZ",
    "GOKZ is installed",
    "Useful plugins (optional)",
    "Apply for Global Whitelist (optional)"
]

const Main = () => {
    return (
        <div className='flex-1 lg:ml-[364px] mt-[88px] bg-white dark:bg-zinc-950' >
            <div className="max-w-[1600px] w-full p-[16px] sm:p-[32px]">
                <div className="w-full">
                    <div id="bg" className="flex flex-col justify-end gap-4 bg-center bg-no-repeat bg-cover bg-gray-200 w-full p-8 rounded-lg h-[250px] dark:bg-zinc-900">
                        <h1 className='text-3xl sm:text-5xl text-zinc-100'>KZ Documentation</h1>
                        <p className='text-md sm:text-lg text-zinc-400 max-w-lg'>KZ Documentation to help you get GOKZ or KZTimer running on your personal server.</p>
                    </div>
                    <div className="flex gap-8 mt-4 leading-[200%]">
                        <section className='w-full lg:w-[75%] rounded-lg mt-4 flex flex-col gap-6'>
                            <div className=" flex flex-col gap-6 border-b dark:border-b-zinc-800 pb-6">
                                <h1 className='text-2xl font-medium dark:text-zinc-100'>1. {pageElements[0]}</h1>
                                <ul className='list-decimal pl-4 dark:text-zinc-400'>
                                    <li>Start by downloading <a className='cursor-pointer font-medium' target="_blank" href="https://www.sourcemm.net/downloads.php?branch=stable">Metamod:Source</a></li>
                                    <li>Extract the files into your server's <Code text="csgo" /> directory</li>
                                    <li>You should now have Metamod:Source installed and working.</li>
                                </ul>
                                <div className="flex flex-col w-full bg-gray-100 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 p-4 border rounded-lg">
                                    <p className='inline-flex items-center gap-1 font-medium text-sm bg-green-100 dark:bg-green-900 dark:border-green-800 dark:text-green-400 w-max px-2 py-1 border border-green-200 rounded-md text-green-500'><CheckCircleIcon className="w-4 h-4" /> Confirm</p>
                                    <p className='mt-2'>Restart your server and type <Code text="meta version" /> in the server console.</p>
                                    <p>You should see the following line in the output: <Code text="Loaded As: Valve Server Plugin" />.</p>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-6 border-b dark:border-b-zinc-800 pb-6">
                                <h1 className='text-2xl font-medium dark:text-zinc-100'>2. {pageElements[1]}</h1>
                                <ul className='list-decimal pl-4 dark:text-zinc-400'>
                                    <li>Start by downloading <a className='cursor-pointer font-medium' target="_blank" href="https://sourcemod.net/downloads.php?branch=stable">Sourcemod</a></li>
                                    <li>Extract the files into your server's <Code text="csgo" /> directory</li>
                                    <li>You should now have Sourcemod installed and working.</li>
                                </ul>
                                <div className="flex flex-col w-full bg-gray-100 p-4 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 border rounded-lg">
                                    <p className='inline-flex items-center gap-1 font-medium text-sm bg-green-100 dark:bg-green-900 dark:border-green-800 dark:text-green-400 w-max px-2 py-1 border border-green-200 rounded-md text-green-500'><CheckCircleIcon className="w-4 h-4" /> Confirm</p>
                                    <p className='mt-2'>Restart your server and type <Code text="sm version" /> in the server console.</p>
                                    <p>You should see the following line in the output: <Code text="SourceMod Version Information" />.</p>
                                </div>
                            </div>
                            <div className=" flex flex-col gap-6 border-b dark:border-b-zinc-800 pb-6">
                                <h1 className='text-2xl font-medium dark:text-zinc-100'>3. {pageElements[2]}</h1>
                                <ul className='list-decimal pl-4 dark:text-zinc-400'>
                                    <li>Start by downloading the latest release of <a className='cursor-pointer font-medium' target="_blank" href="https://github.com/danzayau/MovementAPI/releases">MovementAPI</a></li>
                                    <li>Extract the files into your server's <Code text="csgo" /> directory</li>
                                    <li>You should now have MovementAPI installed and working.</li>
                                </ul>
                                <div className="flex flex-col w-full bg-gray-100 p-4 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400 border rounded-lg">
                                    <p className='inline-flex items-center gap-1 font-medium text-sm bg-green-100 dark:bg-green-900 dark:border-green-800 dark:text-green-400 w-max px-2 py-1 border border-green-200 rounded-md text-green-500'><CheckCircleIcon className="w-4 h-4" /> Confirm</p>
                                    <p className='mt-2'>Restart your server and type <Code text="sm plugins list" /> in the server console.</p>
                                    <p>You should see the following line in the output: <Code text="MovementAPI (2.4.3)" />.</p>
                                </div>
                            </div>
                        </section>
                        <OnThisPage pageElements={pageElements} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main
