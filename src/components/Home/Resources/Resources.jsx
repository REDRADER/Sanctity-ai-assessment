import React from 'react'
import { ArrowRight } from 'lucide-react';
import BlogItem from './BlogItem';
import { blogs } from '@/constant/data';
import Link from 'next/link';
import EmailSubscribe from './EmailSubscribe';

const Resources = () => {
    return (
        <section className='relative p-[0.5em] md:p-[1em_1em] z-[5] w-full mb-5'  >
            <div className='  bg-[#fff] rounded-[24px] flex flex-col gap-4 relative p-0 md:p-[1em] '>
                <div className='w-full max-w-[--max-width] py-[2em] md:py-[5em] mx-auto flex flex-col gap-8 p-[1em] md:p-0'>
                    <div className='flex items-center w-full justify-between'>

                        <h2 className='text-[--darkest-text] text-[1.6em] md:text-[4.2em] font-semibold'>
                            Our latest resources
                        </h2>
                        <Link href='/' className='w-[2em] md:w-[3.6em] h-[2em] md:h-[3.6em] rounded-[50%] overflow-hidden relative bg-[#e4ece3] group '>
                            <div className='w-[2em] md:w-[3.6em] h-[2em] md:h-[3.6em] rounded-[50%] bg-[--background] absolute inset-0 left-[-100%] group-hover:left-[0]  duration-300 ease-in-out'>
                            </div>
                            <span className='w-[25px] h-[25px] absolute top-[50%] left-[50%] group-hover:left-[120%]   duration-300 ease-in-out ' style={{ transform: "translate(-50%,-50%)" }}>
                                <ArrowRight className='text-[--background]' />
                            </span>
                            <span className='w-[25px] h-[25px] absolute top-[50%] left-[-120%] group-hover:left-[50%]   duration-500 ease-in-out ' style={{ transform: "translate(-50%,-50%)" }}>
                                <ArrowRight className='text-[--light-text]' />
                            </span>
                        </Link>
                    </div>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            blogs.map((item,index)=>{
                                return(
                                    <BlogItem data={item} key={`blog-${index}`}/>
                                )
                            })
                        }
                      
                     
                    </div>
                </div>
                <div className='rounded-[16px] bg-[#97d28b66] p-[1em_1em] md:p-[2.4em_2em_0.8em] w-full'>
                    <div className='w-full max-w-[--max-width]  mx-auto flex flex-col gap-[30px] md:gap-[80px]'>
                       <div className='grid w-full grid-cols-1 md:grid-cols-2 gap-2'>
                            <h2 className='text-[--darkest-text] text-[2em] md:text-[2.6em] leading-[1.1] font-semibold'>
                            Don&apos;t want to <br/>
                            miss anything?
                            </h2>
                        <p className='text-[--darkest-text] text-[1em] md:text-[1.4em]'>Sign up for our newsletter to discover winning trends before your competition!</p>
                       </div>
                      
                        <EmailSubscribe/>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources
