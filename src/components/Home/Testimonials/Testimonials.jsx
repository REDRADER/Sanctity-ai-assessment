"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonials = () => {

    const [buttonToggle,setButtonToggle]=useState(false)


    return (
        <section className='relative  p-[0.5em] md:p-[1em_1em] z-[5] w-full'  >
            <div className=' absolute inset-0 h-full w-full overflow-visible z-0 '>

                <Image src={"/images/gradient.jpg"} width={1000} height={1000} className=' max-w-none w-[100%] h-[180%] absolute top-[5em] left-[-87%] rotate-[-24deg]  z-0 opacity-60' alt='hero gradient' />

            </div>
            <div className='p-[0.5em] md:px-[1em] py-[4em] md:py-[10em] flex flex-col gap-4 '>
                <div className='w-full  relative mx-[auto] max-w-[--max-width] grid  grid-cols-1 lg:grid-cols-2 gap-[1em] lg:gap-[0em] py-[2em]  ' >
                    <div className='w-full flex flex-col items-start justify-center gap-5 md:gap-10 h-full'>
                        <h2 className='text-[2.8em] md:text-[4.7em] leading-[1] text-[--light] text-left font-semibold'>
                            Hear it from<br/>
                            our clients
                        </h2>
                        <div className='group w-[16em]  md:w-[20em] h-[3.5em] md:h-[4.5em] grid grid-cols-2  rounded-[1000px] relative border-[0.13em] border-[#dcefd8]/[20%] hover:border-[#dcefd8]/[70%] '>
                            <div className={` absolute left-0 top-0 bottom-0 w-[50%] right-auto ${buttonToggle?'translate-x-[100%] p-[3px_3px_3px_0px] ':'translate-x-[0] p-[3px_0px_3px_3px]'}  duration-300 ease-in-out`}>
                                <span className='bg-[--accent-green] w-full h-full block rounded-[1000px]'></span>
                            </div>
                            <button aria-label='Fiverr Button' className={`w-full flex justify-center items-center text-[1.1em] md:text-[1.4em] ${buttonToggle?'text-[--light-text]':'text-[--background]'} z-10 duration-300 ease-in-out`} onClick={()=>setButtonToggle(false)}>
                                    Fiverr
                            </button>
                            <button aria-label='UpWork Button' className={`w-full flex justify-center items-center text-[1.1em] md:text-[1.4em] ${buttonToggle?'text-[--background] ':' text-[--light-text]'}z-10 duration-300 ease-in-out`} onClick={()=>setButtonToggle(true)}>
                                    UpWork
                            </button>

                        </div>
                    </div>
                    <TestimonialSlider toggle={buttonToggle}/>
                </div>
            </div>
        </section>
    )
}

export default Testimonials