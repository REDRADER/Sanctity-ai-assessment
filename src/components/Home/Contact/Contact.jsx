import React from 'react'
import LinksCardItem from './LinksCardItem'
import UpWorkIcon from '@/icons/UpWorkIcon';
import FiverrIcon from '@/icons/FiverrIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import CalenderIcon from '@/icons/CalenderIcon';
import { Calendar, ArrowUp,Slash } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import Link from 'next/link';
import StepText from './StepText';
const Contact = () => {
    return (
        <section className='relative md:p-[1em_1em] z-[5] w-full flex flex-col gap-5'  >
            <div className=' absolute inset-0 h-full w-full overflow-hidden z-0 '>

                <Image src={"/images/gradient.jpg"} width={1000} height={1000} className='blur-[10px] max-w-none w-[100%] h-[180%] absolute top-[5em] left-[-67%] rotate-[-24deg]  z-0 opacity-60' alt='hero gradient' />

            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <LinksCardItem data={{ icon: <UpWorkIcon className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "UpWork" }} />
                    <LinksCardItem data={{ icon: <FiverrIcon className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "Fiverr" }} />
                    <LinksCardItem data={{ icon: <LinkedinIcon className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "Linkedin" }} />
                    <LinksCardItem data={{ icon: <Calendar className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "Book a meeting" }} />

                </div>
                <ContactForm />
            </div>

            <footer className='group w-full h-full rounded-[24px] p-[2em] bg-[#000]/[20%] flex justify-between flex-col gap-5  ' style={{ backdropFilter: "blur(7px)", WebkitBackdropFilter: "blur(7.1px)" }}>

                <div className='flex gap-5 flex-col'>
                    <div className='flex w-full items-center justify-between '>
                        <div className='w-full flex items-center'>

                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >Services</StepText>
                        <span className='w-[2em] text-[#dcefd8]/[30%] text-center text-[1.3em]'>/</span>
                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >Resources</StepText>
                        <span className='w-[2em] text-[#dcefd8]/[30%] text-center text-[1.3em]'>/</span>
                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >About</StepText>
                        <span className='w-[2em] text-[#dcefd8]/[30%] text-center text-[1.3em]'>/</span>
                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >Get in touch</StepText>
                        </div>
                        <div className='w-full flex items-center justify-end'>

                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >Twitter</StepText>
                        <span className='w-[2em] text-[#dcefd8]/[30%] text-center text-[1.3em]'>/</span>
                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >Instagram</StepText>
                        <span className='w-[2em] text-[#dcefd8]/[30%] text-center text-[1.3em]'>/</span>
                        <StepText link={"/"}  className=" text-[1.3em] text-[#dcefd8]/[60%] " >Facebook</StepText>
                       
                        </div>
                    </div>

                    <span className='h-[1px] w-full bg-[#dcefd8]/[20%] block'>

                    </span>

                    <div className='flex justify-between items-center text-[1.3em] text-[#dcefd8]/[60%]'>
                        <div>

                            <h3>
                                Design By <Link className='text-[#dcefd8]/[90%] hover:text-[#dcefd8]' href="https://www.karageorgiev.com/">Valeri Karageorgiev</Link>
                            </h3>
                            <h3>

                                Developed By <Link className='text-[#dcefd8]/[90%] hover:text-[#dcefd8]' href="https://ravinderkumar.site/">Ravinder Kumar</Link>
                            </h3>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <h4>&copy; {new Date().getFullYear()} All Rights reserved</h4>
                            <div className='w-[40px] h-[40px] flex justify-center items-center'>

                                <span className='w-[35px] h-[35px]  hover:w-[40px] hover:h-[40px] duration-300 ease-in-out flex justify-center items-center rounded-[50%] bg-[--background] '>
                                    <ArrowUp className='text-[--accent-green]' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}

export default Contact
