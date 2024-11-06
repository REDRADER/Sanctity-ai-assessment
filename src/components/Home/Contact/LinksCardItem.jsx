import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react';


const LinksCardItem = ({ data }) => {
    return (

        <Link href={data.link} className='group w-full rounded-[24px] h-full md:min-h-[15rem]  p-[1em] md:p-[1.2em] lg:p-[1.8em] bg-[#000]/[20%] flex justify-between flex-col  ' style={{ backdropFilter: "blur(7px)", WebkitBackdropFilter: "blur(7.1px)" }}>
            <div className='w-[2.5em] md:w-[3.6em] h-[2.5em] md:h-[3.6em] rounded-[50%] overflow-hidden relative bg-[#262d29] group flex justify-center items-center '>
                <div className='w-[2.5em] md:w-[3.6em] h-[2.5em] md:h-[3.6em] rounded-[50%] bg-[--accent-green] absolute inset-0 top-[105%] group-hover:top-[0]  duration-300 ease-in-out'>
                </div>
                <span className="w-[50%] h-[50%] z-10">

                   {data.icon}
                </span>
                
              
            </div>
            <div className='group w-full h-[2.5em] pl-[5px] bg-none text-start font-medium text-[1.2em] md:text-[1.8em] lg:text-[2.2em] text-[--light-text]'>
                <div className='w-full overflow-hidden h-full relative '>
                    <span className='absolute left-[-40px] group-hover:left-[0px] bottom-0 top-0 flex justify-between items-center duration-300 ease-in-out '>
                        <ArrowRight className='text-[--accent-green]' />
                    </span>
                    <div className='absolute inset-0 group-hover:right-[-30px] right-0 flex justify-between items-center duration-300 ease-in-out '>

                        <span className='relative group-hover:right-[-30px] right-0 duration-300 ease-in-out '>

                            {data.text}
                        </span>
                        
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default LinksCardItem
