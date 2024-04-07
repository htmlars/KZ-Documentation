import React from 'react'

const OnThisPage = ({ pageElements }) => {
    return (
        <aside className='hidden lg:block sticky top-[7.5rem] text-sm font-medium text-zinc-900 dark:text-zinc-100 h-max mt-4'>
            <p>On this page</p>
            <ul className="mt-4">
                {pageElements.map((item, index) => (
                    <li className="border-l pl-4 py-2 text-zinc-700 dark:text-zinc-400 dark:border-l-zinc-800 hover:border-l-yellow-500 dark:hover:border-l-yellow-500 cursor-pointer" key={index}>{item}</li>
                ))}
            </ul>
        </aside>
    )
}

export default OnThisPage