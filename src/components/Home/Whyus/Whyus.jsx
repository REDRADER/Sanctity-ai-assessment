import React from 'react'
import WhyusItem from './WhyusItem'
import { whyus } from '@/constant/data'
import Image from 'next/image'

const Whyus = () => {
    return (
        <section className='relative  p-[0.5em] md:p-[1em_1em] z-[5] w-full'  >
            <div className=' absolute inset-0 h-full w-full overflow-visible z-0 '>

                <Image src={"/images/gradient.jpg"} width={1000} height={1000} className=' max-w-none w-[100%] h-[180%] absolute top-[5em] left-[-67%]   z-0 opacity-60' alt='hero gradient' />

            </div>
            <div className='p-[0.5em] md:px-[1em] py-[4em] lg:py-[8em] flex flex-col gap-4 '>
                <div className='w-full  relative mx-[auto] max-w-[--max-width] grid  grid-cols-1 lg:grid-cols-2 gap-[1em] lg:gap-[0em] py-[2em] ' >
                    <div className='sticky top-[4em] opacity-70 text-[--light-text] text-[1.45em]'>
                        Why Us?
                    </div>
                    <div className='flex w-full flex-col'>
                        {
                            whyus.map((item, index) => {
                                return (
                                    <WhyusItem data={item} key={index} />
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
