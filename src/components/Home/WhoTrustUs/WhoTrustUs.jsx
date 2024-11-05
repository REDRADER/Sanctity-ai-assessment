"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import WhoTrustItem from './WhoTrustItem'
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const WhoTrustUs = () => {
  const [toggleLogos, setToggleLogos] = useState(true)
  return (
    <section className='relative md:p-[1em_1em] z-[5] w-full mb-5'  >
      <div className='p-[1em]  bg-[--light-text] rounded-[24px] flex flex-col gap-4 relative '>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[1em]  '>
          <>
            <div className='col-span-2 p-[1.4em] h-[6em] md:h-[15em] rounded-[16px] border-2 border-[#cadcc7] '>

              <h2 className='text-[--darkest-text] text-[1.4em] md:text-[2.7em] font-semibold leading-[1.1]'>
                Who trusts us?
              </h2>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className='h-[6em] md:h-[15em]'>
              <WhoTrustItem img1={"/images/companies/microsoft.png"} img2={"/images/companies/nerdapp.png"} toggle={toggleLogos} inverted={true} />
            </motion.div>
            <motion.div   initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

              <WhoTrustItem img1={"/images/companies/indeed.png"} img2={"/images/companies/mcLaren.png"} toggle={toggleLogos} inverted={true} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

              <WhoTrustItem img1={"/images/companies/upwork.png"} img2={"/images/companies/seabeck.png"} toggle={toggleLogos} inverted={true} />
            </motion.div>
          </>
          <>

            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>
              <WhoTrustItem img1={"/images/companies/fiverr.png"} img2={"/images/companies/indeed.png"} toggle={toggleLogos} inverted={false} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

              <WhoTrustItem img1={"/images/companies/ansell.png"} img2={"/images/companies/alpin.png"} toggle={toggleLogos} inverted={true} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>
              <WhoTrustItem img1={"/images/companies/Tipalti.png"} img2={"/images/companies/nerdapp.png"} toggle={toggleLogos} inverted={false} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

              <WhoTrustItem img1={"/images/companies/seabeck.png"} img2={"/images/companies/upwork.png"} toggle={toggleLogos} inverted={true} />
            </motion.div>
          </>
          <>

            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>
              <WhoTrustItem img1={"/images/companies/imaginario.png"} img2={"/images/companies/nerdapp.png"} toggle={toggleLogos} inverted={false} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

              <WhoTrustItem img1={"/images/companies/redbull.png"} img2={"/images/companies/presidio.png"} toggle={toggleLogos} inverted={true} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>
              <WhoTrustItem img1={"/images/companies/estrid.png"} img2={"/images/companies/seabeck.png"} toggle={toggleLogos} inverted={false} />
            </motion.div>
            <motion.div  initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }} className='h-[6em] md:h-[15em]'>

            </motion.div>
          </>
        </div>
        <div className='  flex justify-end absolute bottom-[-1px] md:bottom-0 right-0 cursor-pointer' onClick={() => setToggleLogos(prev => !prev)} >
          <div className='relative p-[0.8em_0.8em] md:p-[1.2em_2em]  bg-[--background]     rounded-[24px_0px_0px_0px] flex justify-center items-center '>
            <Image src={"/svgs/corner_outside_upside.svg"} width={26} height={26} style={{ transform: "translate(100%,0)" }} className='right-[26px] w-[26px] h-[26px] absolute top-[-25px] md:top-[-26px] rotate-z-90' alt='hero gradient' />
            <Image src={"/svgs/corner_outside_upside.svg"} width={26} height={26} style={{ transform: "translate(-100%,0)" }} className='left-[1px] md:left-[1px] w-[26px] h-[26px] absolute bottom-0' alt='hero gradient' />
            <div className='group flex gap-3 items-center'>
              <div className={`w-[18px] h-[18px] flex shrink-0 relative group-hover:rotate-90 rotate-0 duration-[400ms] ease-in-out`}>
                <span className={`w-[100%] h-[2px] bg-[--accent-green] block absolute top-[50%] left-[50%]  duration-[400ms] ease-in-out `} style={{ transform: "translate(-50%,-50%)" }}></span>
                <span className='w-[2px] h-[100%]  bg-[--accent-green] block absolute left-[50%] top-[50%] ' style={{ transform: "translate(-50%,-50%)" }} ></span>
              </div>
              <h2 className='opacity-60 text-[1em] md:text-[1.2rem] font-medium'>
                Load More
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoTrustUs
