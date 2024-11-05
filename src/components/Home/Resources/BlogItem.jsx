import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({data}) => {
    return (
        <Link href={"/"} className='w-full flex flex-col gap-3 '>
            <div className='w-full flex flex-col gap-2'>
                <div className='w-full overflow-hidden rounded-[16px]'>
                    <Image src={"/images/logo.png"} alt='' width={200} height={100} className='w-full aspect-video h-[14em] ' />
                </div>
                <div className='w-full text-sm flex items-center justify-between text-[--light-text]'>
                    <span>Blog</span>
                    <span>
                        Date
                    </span>
                </div>
            </div>
            <h3 className='overflow-hidden text-[--darkest-text] font-semibold text-[1.75em] ' style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", }}>
                Startup Market Sizing:
                Founder's Guide to TAM
                SAM SOM Analysis
            </h3>
            <div className='w-full flex flex-wrap'>
                <span className='p-[6px_10px] text-[--darkest-text] text-[12px] rounded-[20px] bg-[#e4ece373]'>
                    Market Sizing and Forecasting

                </span>
            </div>

        </Link>
    )
}

export default BlogItem
