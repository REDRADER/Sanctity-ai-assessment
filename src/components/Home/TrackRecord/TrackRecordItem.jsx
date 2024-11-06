"use client"
import React from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
const animationVarient = {
    inital: {
        opacity: 0.0,
        bottom: -20,

    },
    animate: (i) => ({
        opacity: 1,
        bottom: 0,

        transition: {
            duration: 0.5 * i
        }
    })
}

const TrackRecordItem = ({ data }) => {
    return (
        <div className={`w-full flex group overflow-hidden`}>
            <div className={`w-full p-[1.6em] rounded-[24px] min-h-[200px]  lg:h-[22em] relative flex justify-start ${data.type === 2 ? 'items-start' : 'items-end'}`} style={{ background: data.background }}>
                <div className='flex flex-col'>

                    <motion.h2 custom={1}
                        variants={animationVarient}
                        initial="inital"
                        whileInView="animate"
                        viewport={{ once: true }} className={`relative ${data.background === "#262D29" ? 'text-[--accent-green]' : 'text-[#43554b] '} text-[2em] md:text-[4.7em] font-semibold leading-[0.8]`}>{data.header}</motion.h2>
                    <motion.p custom={2}
                        variants={animationVarient}
                        initial="inital"
                        whileInView="animate"
                        viewport={{ once: true }} className={`relative  ${data.background === "#262D29" ? 'text-[#43554b]' : 'text-[--light-text]'} opacity-70  text-[0.7em] md:text-[1.45em]`} >{data.subHeading}</motion.p>
                </div>
                <div className={`absolute ${data.type === 2 ? "bottom-0 right-0" : "top-0 right-0"} h-[50%] w-[40%]`}>
                    <span className='w-full h-full flex justify-center items-center group-hover:scale-[1.2] scale-[1] duration-[400ms] ease-in-out' >

                        {data.icon}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TrackRecordItem
