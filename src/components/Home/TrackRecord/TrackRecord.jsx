
import Image from 'next/image'
import React from 'react'
import { trackRecord } from '@/constant/data'
import TrackRecordItem from './TrackRecordItem'

const TrackRecord = () => {
    return (
        <section className='relative md:p-[1em_1em] z-[5] w-full'  >
            <div className='px-[1em] pb-[4em] md:pb-[10em] bg-[--light-text] rounded-[24px] flex flex-col gap-4 '>
                <div className='w-full  mx-[auto] max-w-[--max-width]'>
                <div className='relative w-[50%] lg:w-[32%] h-[50px] md:h-[5.5em] bg-[--background] rounded-[0px_0px_24px_0px] translate-x-[-20px] translate-y-[-5px] md:translate-x-0 md:translate-y-0   md:rounded-[0px_0px_24px_24px] flex justify-center items-center'>
                <Image src={"/svgs/corner_outside.svg"} width={26} height={26} style={{transform:"translate(100%,0)"}}  className='right-[1px] w-[26px] h-[26px] absolute top-[0px] rotate-z-90' alt='hero gradient' />
                <Image src={"/svgs/corner_outside.svg"} width={26} height={26} style={{transform:"translate(0,100%)"}}  className='block md:hidden left-[-1px] w-[26px] h-[26px] absolute bottom-[1px] rotate-z-90' alt='hero gradient' />
                <Image src={"/svgs/corner_outside_left.svg"} width={26} height={26} style={{transform:"translate(-100%,0)"}}  className='left-0 w-[26px] h-[26px] absolute top-0 rotate-z-90' alt='hero gradient' />
                    <h2 className='opacity-60 text-[1.2em] md:text-[1.7rem] font-medium'>
                        Track Record
                    </h2>
                </div>
                </div>

                <div className='w-full  relative mx-[auto] max-w-[--max-width] grid  grid-cols-1 lg:grid-cols-3  gap-[0.9em] lg:gap-[1.2em] ' >
                    <div className='flex flex-row lg:flex-col  gap-[0.9em] lg:gap-[1.2em]'>
                        {
                            trackRecord.slice(0,2).map((item,index)=>{
                               
                                return(
                                        <TrackRecordItem  key={`trackItem-${item.id}`} data={item}  />
                                )
                            })
                        }
                       
                    </div>
                    <div className='flex flex-row lg:flex-col gap-[1.2em] lg:mt-[3.75rem]'>
                    {
                            trackRecord.slice(2,4).map((item,index)=>{
                               
                                return(
                                        <TrackRecordItem  key={`trackItem-${item.id}`} data={item}  />
                                )
                            })
                        }
                    </div>
                    <div className='flex flex-row lg:flex-col gap-[1.2em]'>
                    {
                            trackRecord.slice(4,6).map((item,index)=>{
                               
                                return(
                                        <TrackRecordItem  key={`trackItem-${item.id}`} data={item}  />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackRecord
