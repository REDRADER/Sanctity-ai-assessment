import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const BlogItem = ({ data }) => {
    return (
        <Link href={data.link} className='w-full flex flex-col gap-2 md:gap-3 group '>
            <div className='w-full flex flex-col gap-2'>
                <div className='w-full overflow-hidden rounded-[16px] relative'>
                    <Image src={data.img} alt='' width={200} height={100} className='w-full aspect-video h-[15em] scale-[1.2] group-hover:scale-[1.1] ease-in-out duration-[400ms]' quality={100} />

                    <div className='absolute group-hover:opacity-100 opacity-0 bg-[#000]/[46%]   inset-0 justify-center items-center flex ease-in-out duration-[400ms]'  style={{ backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7.1px)" }}>
                    <span className='text text-[--light-text]'>Read More</span>
                    </div>
                    <div className='absolute group-hover:scale-100  scale-0  top-[-5px] right-[-5px] ease-in-out duration-[400ms]' style={{ transformOrigin: "top right" }}>
                        <Image src={"/svgs/corner_cut_white.svg"} width={80} height={80} className='' alt='corner' />

                    </div>
                    <div className='absolute top-[20px] right-[20px] flex justify-center opacity-[0] group-hover:opacity-50 items-center mr-[0] mt-[0] group-hover:mr-[-6px] group-hover:mt-[-6px] ease-in-out duration-[400ms] '>
                        <ArrowUpRight className=' w-[30px] h-[30px] text-[--accent-green]   ' />
                    </div>
                </div>
                <div className='w-full text-sm flex items-center justify-between text-[--light-text]'>
                    <span>{data.type}</span>
                    <span>
                        {data.date}
                    </span>
                </div>
            </div>
            <h3 className='overflow-hidden text-[--darkest-text] font-semibold text-[1.4em] md:text-[1.75em] ' style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", }}>
                {data.title}
            </h3>
            <div className='w-full flex flex-wrap'>
                {
                    data.bean.map((bean) => {
                        return (
                            <span key={`bean-${bean}`} className='p-[6px_10px] text-[--darkest-text] text-[12px] md:text-[16px] rounded-[20px] bg-[#e4ece373]'>
                                {bean}

                            </span>
                        )
                    })
                }

            </div>

        </Link>
    )
}

export default BlogItem
