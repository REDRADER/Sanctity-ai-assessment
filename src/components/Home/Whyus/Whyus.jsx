import React from 'react'
import WhyusItem from './WhyusItem'
import { whyus } from '@/constant/data'

const Whyus = () => {
    return (
        <section className='relative md:p-[1em_1em] z-[5] w-full'  >
            <div className='px-[1em] py-[4em] md:py-[8em] flex flex-col gap-4 '>
                <div className='w-full  relative mx-[auto] max-w-[--max-width] grid  grid-cols-1 lg:grid-cols-2 gap-[1em] lg:gap-[0em] py-[2em] ' >
                    <div className='sticky top-[4em] opacity-70 text-[--light-text] text-[1.45em]'>
                        Why Us?
                    </div>
                    <div className='flex w-full flex-col'>
                        {
                            whyus.map((item,index)=>{
                                return(
                                    <WhyusItem data={item} key={index}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whyus
