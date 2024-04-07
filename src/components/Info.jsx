import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const Info = ({ text }) => {
    return (
        <div className='flex items-center bg-yellow-50 border-yellow-500 border-l-4 rounded-lg overflow-hidden px-2 py-4 w-full'>
            <div className="p-2">
                <InformationCircleIcon className='h-6 w-6 text-yellow-500' />
            </div>
            <div className="p-2">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Info