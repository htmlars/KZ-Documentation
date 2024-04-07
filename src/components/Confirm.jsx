import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const Confirm = ({ text }) => {
    return (
        <div className='flex items-center bg-gray-50 border-gray-500 border-l-4 rounded-lg overflow-hidden px-2 py-4 w-full'>
            <div className="p-2">
                <CheckCircleIcon className='h-6 w-6 text-gray-500' />
            </div>
            <div className="p-2">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Confirm