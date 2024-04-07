import React from 'react'
import Info from './Info'
import Confirm from './Confirm'

const Main = () => {
    return (
        <div className='flex-1 lg:ml-[364px] mt-[88px] bg-white dark:bg-zinc-950' >
            <div className="max-w-[1600px] w-full p-[16px] sm:p-[32px]">
                <div className="w-full h-screen">
                    <div className="p-4 bg-gray-200 border border-gray-300 w-full rounded-lg h-[200px] dark:border-none dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]">
                        
                    </div>
                    <div className="flex gap-4">
                        <section className='p-4 bg-gray-200 border border-gray-300 w-full lg:w-[75%] rounded-lg h-screen mt-4 dark:border-none dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]'>

                        </section>
                        <aside className='hidden lg:block p-4 bg-gray-200 border border-gray-300 w-[25%] rounded-lg h-[250px] mt-4 dark:border-none dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)]'>

                        </aside>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Main
