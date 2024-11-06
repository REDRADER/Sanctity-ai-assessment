import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TestimonialSlide = ({ data }) => {
    return (
        <div className='h-full w-full rounded-[24px]  bg-[#e4ece3]  p-[1.2em] md:p-[2.5em]'>
            <div className='flex flex-col justify-between h-full'>
                <div className='flex flex-col gap-5'>

                <div className='flex gap-2 z-[14] relative '>
                    <span className='hidden md:flex text-[0.9em] md:text-[1.1em] px-[15px] py-[8px] rounded-[30px] bg-[#c9dcc6] text-[--background]  justify-center items-center font-medium'>{data.number}</span>
                    <Link href={data.link} className='text-[0.9em] md:text-[1.1em] px-[15px] py-[8px] rounded-[30px] border-2 border-[#c9dcc6]/[70%] hover:border-[#c9dcc6] text-[--background] flex justify-center items-center font-medium '>Read more</Link>
                </div>
                <div className='w-full relative '>
                    <div className='absolute top-[-60px] right-0 '>
                        <Image src={"/svgs/quotes.svg"} alt='' width={120} height={120} className=' w-[120px] h-[120px]' />
                    </div>
                    <p className='relative z-[14] text-[1em] md:text-[1.2em] text-[--background]'>
                        {data.testimonial}
                    </p>


                </div>
                </div>
                <div className='w-full relative before:absolute before:h-[2px] before:w-full before:top-0 before:bg-[#c9dcc6]/[60%] pt-[15px] flex gap-3 '>
                    <div className='w-[2.8em] md:w-[3.8em] h-[2.8em] md:h-[3.8em] bg-gray-500 rounded-[50%] overflow-hidden shrink-0'>
                    <Image src={data.img} alt='' width={75} height={75} className=' w-full h-full' />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-[1em] text-[--background] font-semibold'>
                            {data.name}
                        </h3>
                        <p className='capitalize text-[1em] text-[#43554b] '>
                            {data.designation}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestimonialSlide