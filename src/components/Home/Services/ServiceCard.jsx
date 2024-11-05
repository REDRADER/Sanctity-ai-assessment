import Image from 'next/image'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';


const ServiceCard = ({ data }) => {
    return (
        <Link href={data.link} className='group lg:aspect-square h-auto min-h-[260px] lg:h-[350px] cursor-pointer  '>
            <div className='w-full h-full rounded-[24px] bg-[#43554b80] overflow-hidden relative '>
                <div className='absolute w-full  h-full group-hover:scale-y-100 scale-y-0 duration-[400ms] bg-[--accent-green] ease-in-out ' style={{ transformOrigin: "bottom", rotatey: "180deg" }}>

                </div>
                <div className='absolute group-hover:scale-100  scale-0  top-[-1px] right-[-1px] ease-in-out duration-[400ms]' style={{ transformOrigin: "top right" }}>
                    <Image src={"/svgs/corner_cut.svg"} width={80} height={80} className='' alt='corner' />

                </div>
                <div className='absolute top-[20px] right-[20px] flex justify-center opacity-[15%] group-hover:opacity-50 items-center mr-[0] mt-[0] group-hover:mr-[-6px] group-hover:mt-[-6px] ease-in-out duration-[400ms] '>
                    <ArrowOutwardIcon className=' w-[30px] h-[30px] text-[--accent-green]   ' />
                </div>
                <div className='z-10 absolute inset-0 ease-in-out duration-[400ms] p-[1.2em_1.6em_1.6em_1.6em] overflow-hidden '>
                    <div className='flex flex-col justify-between h-full relative overflow-hidden '>

                        <span className='group-hover:text-[--background] text-[--accent-green]'>

                            {data.icon}
                        </span>
                        <div className='flex flex-col gap-1 ease-in-out duration-[400ms]  left-0 right-0 '>
                            <h3 className='text-[2em] leading-[1] group-hover:text-[--background] text-[--light-text]  font-medium opacity-70 ease-in-out duration-[400ms]'>
                                {data.header}
                            </h3>
                            <p className='hidden md:block max-h-0 group-hover:max-h-[500px] text-[1.2em] leading-[1] group-hover:text-[--background] text-[--light-text] font-medium opacity-40 ease-in-out duration-[400ms] overflow-hidden'>
                                {data.subHeading}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ServiceCard
