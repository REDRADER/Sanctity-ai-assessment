"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { testimonials } from '@/constant/data';
import { Navigation } from 'swiper/modules';
import TestimonialSlide from './TestimonialSlide';


const TestimonialSlider = ({toggle}) => {
    return (

        <div className='w-full h-[70vh] flex  justify-center items-center p-[20px] relative'>


            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="mySwiper w-full h-full max-w-[450px]"
            >
                {
                   toggle? testimonials.upwork.map((item, index) => {
                        return (
                            <SwiperSlide key={index} ><TestimonialSlide data={item} /></SwiperSlide>
                        )
                    }):
                    testimonials.fiverr.map((item, index) => {
                        return (
                            <SwiperSlide key={index} ><TestimonialSlide data={item} /></SwiperSlide>
                        )
                    })
                }


            </Swiper>

            <div className='absolute top-[50%] w-full h-[60px] flex justify-between items-center ' style={{ transform: "translate(0,-50%)" }}>
                <PrevBtn/>
                <NextBtn/>
            </div>
        </div>

    );
}

export default TestimonialSlider

const NextBtn = () => {
    return (
        <div className=' hidden md:block  swiper-button-next w-[2em] md:w-[3em] h-[2em] md:h-[3em] rounded-[50%] overflow-hidden relative bg-[#1d221f] group translate-x-[100%] '>
            <div className='w-[2em] md:w-[3em] h-[2em] md:h-[3em] rounded-[50%] bg-[--darkest-text] absolute inset-0 left-[-100%] group-hover:left-[0]  duration-300 ease-in-out'>
            </div>
            <span className='w-[25px] h-[25px] absolute top-[50%] left-[50%] group-hover:left-[120%]   duration-300 ease-in-out ' style={{ transform: "translate(-50%,-50%)" }}>
                <ArrowRight className='text-[--light-text]' />
            </span>
            <span className='w-[25px] h-[25px] absolute top-[50%] left-[-120%] group-hover:left-[50%]   duration-500 ease-in-out ' style={{ transform: "translate(-50%,-50%)" }}>
                <ArrowRight className='text-[--light-text]' />
            </span>
        </div>
    )
}
const PrevBtn = () => {
    return (
        <div className=' hidden md:block swiper-button-prev w-[2em] md:w-[3em] h-[2em] md:h-[3em] rounded-[50%] overflow-hidden relative bg-[#1d221f] group translate-x-[-100%] '>
            <div className='w-[2em] md:w-[3em] h-[2em] md:h-[3em] rounded-[50%] bg-[--darkest-text] absolute inset-0 left-[100%] group-hover:left-[0]  duration-300 ease-in-out'>
            </div>
            <span className='w-[25px] h-[25px] absolute top-[50%] left-[50%] group-hover:left-[-120%]   duration-300 ease-in-out ' style={{ transform: "translate(-50%,-50%)" }}>
                <ArrowLeft className='text-[--light-text]' />
            </span>
            <span className='w-[25px] h-[25px] absolute top-[50%] left-[120%] group-hover:left-[50%]   duration-500 ease-in-out ' style={{ transform: "translate(-50%,-50%)" }}>
                <ArrowLeft className='text-[--light-text]' />
            </span>
        </div>
    )
}