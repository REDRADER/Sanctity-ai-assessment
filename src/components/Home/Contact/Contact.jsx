import React from 'react'
import LinksCardItem from './LinksCardItem'
import UpWorkIcon from '@/icons/UpWorkIcon';
import FiverrIcon from '@/icons/FiverrIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import CalenderIcon from '@/icons/CalenderIcon';
import { Calendar, ArrowUp, Slash } from 'lucide-react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import Link from 'next/link';
import StepText from './StepText';

import BackToTopButton from './BackToTopButton';
const Contact = () => {



    return (
        <section className='relative  p-[0.5em] md:p-[1em_1em] z-[5] w-full flex flex-col gap-5'  >
            <div className=' absolute inset-0 h-full w-full overflow-hidden z-0 '>

                <Image src={"/images/gradient.jpg"} width={1000} height={1000} className='blur-[10px] max-w-none w-[30em] md:w-[100%] h-[80em] md:h-[180%] absolute top-[5%] left-[-0%] md:left-[-67%] rotate-[-5deg] md:rotate-[-24deg]  z-0 opacity-60' alt='hero gradient' />

            </div>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-5 order-2 lg:order-1'>
                    <LinksCardItem data={{ icon: <UpWorkIcon className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "UpWork" }} />
                    <LinksCardItem data={{ icon: <FiverrIcon className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "Fiverr" }} />
                    <LinksCardItem data={{ icon: <LinkedinIcon className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "Linkedin" }} />
                    <LinksCardItem data={{ icon: <Calendar className="w-full h-full text-[--light-text] group-hover:text-[--background]" />, link: "/", text: "Book a meeting" }} />

                </div>
                <ContactForm />
            </div>

            <footer className='group w-full h-full rounded-[24px]  p-[1em] md:p-[2em] bg-[#000]/[20%] flex justify-between flex-col gap-5  ' style={{ backdropFilter: "blur(7px)", WebkitBackdropFilter: "blur(7.1px)" }}>

                <div className='flex gap-5 flex-col'>
                    <div className='flex w-full items-center justify-between '>
                        <div className='w-full flex items-start lg:items-center flex-col lg:flex-row gap-3 lg:gap-0'>

                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >Services</StepText>
                            <span className='w-[2em] text-[#dcefd8]/[30%] hidden lg:block text-center text-[1.2em] lg:text-[1.3em]'>/</span>
                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >Resources</StepText>
                            <span className='w-[2em] text-[#dcefd8]/[30%] hidden lg:block text-center text-[1.2em] lg:text-[1.3em]'>/</span>
                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >About</StepText>
                            <span className='w-[2em] text-[#dcefd8]/[30%] hidden lg:block text-center text-[1.2em] lg:text-[1.3em]'>/</span>
                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >Get in touch</StepText>
                        </div>
                        <div className='w-full flex items-end lg:items-center h-full justify-start  lg:justify-end flex-col lg:flex-row gap-3 lg:gap-0'>

                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >Twitter</StepText>
                            <span className='w-[2em] text-[#dcefd8]/[30%] hidden lg:block text-center text-[1.2em] lg:text-[1.3em]'>/</span>
                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >Instagram</StepText>
                            <span className='w-[2em] text-[#dcefd8]/[30%] hidden lg:block text-center text-[1.2em] lg:text-[1.3em]'>/</span>
                            <StepText link={"/"} className=" text-[1.2em] lg:text-[1.3em] text-[#dcefd8]/[60%] " >Facebook</StepText>

                        </div>
                    </div>

                    <span className='h-[1px] w-full bg-[#dcefd8]/[20%] block'>

                    </span>

                    <div className='flex flex-col md:flex-row justify-between items-center  text-[1.2em] md:text-[1.3em] text-[#dcefd8]/[60%] marker:'>
                        <div className='flex flex-col gap-2 order-2 md:order-1'>

                            <h3>
                                Design By <Link className='text-[#dcefd8]/[90%] hover:text-[#dcefd8]' href="https://www.karageorgiev.com/">Valeri Karageorgiev</Link>
                            </h3>
                            <h3>

                                Developed By <Link className='text-[#dcefd8]/[90%] hover:text-[#dcefd8]' href="https://ravinderkumar.site/">Ravinder Kumar</Link>
                            </h3>
                        </div>
                        <div className='flex gap-3 items-center order-1 md:order-2'>
                            <h4>&copy; {new Date().getFullYear()} All Rights reserved</h4>
                            <div className='w-[40px] h-[40px] flex justify-center items-center'>

                                <BackToTopButton/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </section>
    )
}

export default Contact
