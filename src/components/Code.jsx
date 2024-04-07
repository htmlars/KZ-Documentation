import React from 'react'

const Code = ({ text }) => {
    return (
        <p className='border border-gray-300 dark:bg-zinc-900 dark:border-zinc-800 inline-block text-sm font-medium py-0.5 bg-gray-200 max-w-max px-1 rounded-md'>{text}</p>
    )
}

export default Code