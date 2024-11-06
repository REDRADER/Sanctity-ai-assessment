"use client"
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import ScrubText from './ScrubText';
import { gsap } from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';
import { useLenis } from '@/lib/Lenis';

import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, Flip);

const Hero = () => {
    const lenis = useLenis();
    const secRef = useRef();
    const secRef2 = useRef();
    const { scrollYProgress } = useScroll({
        target: secRef,
    })
    const rotate = useTransform(scrollYProgress, [0, 0.8], ["0deg", "460deg"])
    const scale = useTransform(scrollYProgress, [0, 1], ["1", "1.5"])


    const handleScroll = (id) => {
       
        const targetSection = document.getElementById(id);
        console.log(targetSection)
        
        if (lenis && targetSection) {
          lenis.scrollTo(targetSection, {
            offset: 0,
            immediate: false,
          });
        }
    };

    useEffect(() => {
        const attr = (defaultVal, attrVal) => {
            const defaultValType = typeof defaultVal;
            if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
            if (attrVal === "true" && defaultValType === "boolean") return true;
            if (attrVal === "false" && defaultValType === "boolean") return false;
            if (isNaN(attrVal) && defaultValType === "string") return attrVal;
            if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
            return defaultVal;
        };

        ScrollTrigger.normalizeScroll(true);

        const components = document.querySelectorAll("[tr-scrollflip-element='component']");
        components.forEach((componentEl, componentIndex) => {
            const originEls = componentEl.querySelectorAll("[tr-scrollflip-element='origin']");
            const targetEls = componentEl.querySelectorAll("[tr-scrollflip-element='target']");
            const scrubStartEl = componentEl.querySelector("[tr-scrollflip-scrubstart]");
            const scrubEndEl = componentEl.querySelector("[tr-scrollflip-scrubend]");

            const startSetting = attr("top top", scrubStartEl?.getAttribute("tr-scrollflip-scrubstart"));
            const endSetting = attr("bottom bottom", scrubEndEl?.getAttribute("tr-scrollflip-scrubend"));
            const staggerSpeedSetting = attr(0, componentEl.getAttribute("tr-scrollflip-staggerspeed"));
            const staggerDirectionSetting = attr("start", componentEl.getAttribute("tr-scrollflip-staggerdirection"));
            const scaleSetting = attr(false, componentEl.getAttribute("tr-scrollflip-scale"));
            const breakpointSetting = attr(0, componentEl.getAttribute("tr-scrollflip-breakpoint"));

            let timeline;
            let resizeTimer;


            const createTimeline = () => {
                if (timeline) {
                    timeline.kill();
                    gsap.set(targetEls, { clearProps: "all" });
                }
                document.body.classList.add("scrollflip-relative");

                gsap.matchMedia().add(`(min-width: ${breakpointSetting}px)`, () => {
                    const state = Flip.getState(originEls);
                    timeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: scrubStartEl,
                            endTrigger: scrubEndEl,
                            start: startSetting,
                            end: endSetting,
                            scrub: true,
                        },
                    });
                    timeline.add(
                        Flip.from(state, {
                            targets: targetEls,
                            scale: scaleSetting,
                            stagger: { amount: staggerSpeedSetting, from: staggerDirectionSetting },
                        })
                    );
                });

                document.body.classList.remove("scrollflip-relative");
            };

            createTimeline();

            // Update on window resize
            const handleResize = () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    createTimeline();
                }, 250);
            };

            window.addEventListener("resize", handleResize);

            // Cleanup on component unmount
            return () => {
                window.removeEventListener("resize", handleResize);
                if (timeline) timeline.kill();
            };
        });
    }, []);




    return (
        <div ref={secRef} tr-scrollflip-element="component" tr-scrollflip-staggerdirection="start" className='relative w-full overflow-x-hidden ' >
            <section tr-scrollflip-scrubstart="top top" className='relative h-[100vh] p-[5em_1em_1em] w-full  ' id='hero' >
                <div className=' absolute inset-0 h-full w-full  z-0  '>
                    <Image src={"/images/gradient.jpg"} width={2000} height={1000} className='max-w-none w-[140%] md:w-[90em] absolute top-[25em] md:top-[-20em] right-[-59%] md:right-[-30em] rotate-[-24deg]  md:rotate-[-0deg] z-0' alt='hero gradient' />
                    <Image src={"/images/gradient.jpg"} width={1000} height={1000} className='w-[100em] md:w-[75em] absolute top-[15%] md:top-[5em] left-[-10em] md:left-[-40em] rotate-[174deg] md:rotate-[-146deg] z-0' alt='hero gradient' />

                </div>
                <div className='z-[80] h-[100vh] p-[5em_1em_1em]  absolute inset-0 flex justify-center items-center'>
                    <div className='bg-[#000]/[20%] w-full h-full rounded-[24px] relative ' style={{ filter: "blur(0px)" }}>
                    <div className='w-[4em] h-[4em] absolute bottom-[-1px] right-[-1px]  hidden md:flex items-center justify-center  ' onClick={() => handleScroll("difference")}>
                    <ArrowDown className=' w-[30px] h-[30px] ' />
                        </div>
                        {/* <Image src={"/svgs/hero_cut.svg"} width={100} style={{ mixBlendMode: "normal" }} height={100} className='w-[6em] h-[6em] absolute bottom-[-1px] right-[-1px]  hidden md:block' alt='hero edge cut' /> */}
                        <div className='absolute top-[20%] right-[-1px] h-[5em] z-[90]   block md:hidden ' onClick={() => handleScroll("difference")}>

                            <div className='w-full h-full relative ' >
                                <img src={"/svgs/hero_cut_mobile.svg"} className='w-full h-full   ' alt='hero edge cut' />

                                <ArrowDown className='absolute top-[50%] left-[50%] text-[--accent-green] ' style={{ transform: "translate(-50%,-50%)" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='z-[20] w-full h-full relative flex justify-start  md:justify-center items-end  md:items-center pb-[5em] md:pb-0 ' >
                    <div className='z-[20] relative px-[1em] lg:px-[2em] flex gap-5 md:gap-2 items-center flex-col w-full'>

                        <span className=' text-2xl md:text-xl opacity-40 text-[#dcefd8]'>
                            Competitive Edge through Creativity & Technology
                        </span>
                        <div className='text-5xl md:text-6xl  lg:text-[7.2rem] leading-[1] font-medium flex-col flex gap-3 w-full md:w-auto justify-start md:justify-center items-start md:items-center'>
                            <div className='flex gap-3 items-start  md:items-center justify-center md:pr-[2em]'>

                                <span className='text-[#dcefd8]'>
                                    Market Insights

                                </span>
                                <div className='hidden md:flex h-[0.7em] w-[1.2em] rounded-[1em] justify-center items-center bg-[--backgound-elivated]'>
                                    <motion.span style={{ rotate: rotate }}>

                                        <Image src={"/svgs/star.svg"} width={25} height={25} />
                                    </motion.span>

                                </div>
                            </div>
                            <div className='flex md:w-full gap-2 md:gap-8 md:pl-[2em]'>
                                <div ref={secRef} className='h-[0.8em] w-[1.8em] rounded-[1em] hidden md:flex  justify-center items-center bg-[--backgound-elivated] mt-[5px] overflow-hidden'>


                                    <motion.img style={{ scale: scale }} src={"/images/hero_buld.jpg"} width={25} height={25} className=" w-full h-full object-cover" />


                                </div>
                                <span className='text-[#dcefd8]'>
                                    that

                                </span>
                                <div tr-scrollflip-element="origin" data-flip-id="make" className='text-5xl md:text-6xl  lg:text-[7.2rem]  text-[--accent-green] opacity-0 '>
                                    Make a
                                </div>
                            </div>
                            <div tr-scrollflip-element="origin" data-flip-id="differnce" className='text-5xl md:text-6xl  lg:text-[7.2rem]   pr-[2em] text-[--accent-green] opacity-0 '>
                                Difference
                            </div>
                        </div>
                    </div>

                </div>



            </section>
            <section tr-scrollflip-scrubend="40% center" className='relative  p-[1em_1em] z-[2] w-full ' id='difference' >
                <div className='relative z-[5] py-[2rem] md:py-[5em] h-full'>
                    <div className='w-full h-full  relative mx-[auto] max-w-[--max-width]'>
                        <div className='hidden lg:block py-[3rem]' />
                        <div className='hidden lg:block py-[3rem]' />


                        <div className='text-5xl md:text-[7.2rem] leading-[1] flex flex-col font-medium'>
                            <span tr-scrollflip-element="target" data-flip-id="make" className=' text-5xl md:text-6xl  lg:text-[7.2rem] text-[--accent-green]'> Make a </span>
                            <span tr-scrollflip-element="target" data-flip-id="differnce" className=' text-5xl md:text-6xl  lg:text-[7.2rem] text-[--accent-green]' >Difference </span>
                        </div>
                        <div className='py-[1em] md:py-[2rem]' />
                        <span className='bg-[#e4ece3] h-[1px] w-full block opacity-20' />


                        <div className='py-[1em] md:py-[2rem]' />
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                            <div className='flex justify-start items-start'>
                                <h3 className='text-xl md:text-2xl text-[--light-text] opacity-45 md:opacity-70'>Why we exist?</h3>
                            </div>
                            <ScrubText />
                        </div>
                    </div>
                </div>

                <div className=' absolute inset-0 h-full w-full overflow-visible z-0 '>

                    <Image src={"/images/gradient.jpg"} width={1000} height={1000} className='w-[65em] absolute top-[35em] left-[-40em] rotate-[-130deg] z-0 opacity-60' alt='hero gradient' />

                </div>



            </section>
        </div>
    )
}

export default Hero
