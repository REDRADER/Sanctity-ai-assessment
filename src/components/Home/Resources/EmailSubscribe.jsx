"use client"
import { ArrowRight } from 'lucide-react';
import React from 'react'

const EmailSubscribe = () => {
    return (
        <form className='w-full grid grid-cols-1 md:grid-cols-2 gap-2'>

            <input type="email" required placeholder='Email' className='w-full outline-none  border-b border-[#b5ccb4] focus:border-[--background] border-opacity-30 h-[2.5em] pl-[5px] bg-transparent text-[#333] placeholder:text-[#4d4c4c]' />
            <div>

                <button className='group w-full outline-none  border-b border-[#b5ccb4] border-opacity-30 h-[2.5em] pl-[5px] bg-none text-start font-medium text-[--darkest-text] '>
                    <div className='w-full overflow-hidden h-full relative '>
                        <span className='absolute left-[-40px] group-hover:left-[0px] bottom-0 top-0 flex justify-between items-center duration-300 ease-in-out '>
                            <ArrowRight className='text-[--accent-green]' />
                        </span>
                        <div className='absolute inset-0 group-hover:right-[-30px] right-0 flex justify-between items-center duration-300 ease-in-out '>

                            <span className='font-semibold relative group-hover:right-[-30px] right-0 duration-300 ease-in-out'>

                                Subscribe
                            </span>
                            <ArrowRight className='text-[--accent-green]' />
                        </div>
                    </div>
                </button>

            </div>
        </form>

    )
}

export default EmailSubscribe
