"use client"
import React, { useEffect, useRef } from 'react'
import ServiceCard from './ServiceCard'
import { services } from '@/constant/data'
import { gsap } from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Flip, ScrollTrigger);

const Services = () => {
    const SecRef = useRef();
    const sliderRef = useRef();

    useGSAP(() => {
        const targetEl = SecRef.current;
        const SliderEl = sliderRef.current;
        let timeline;
        let resizeTimer;

        // Function to create the timeline for the scroll animation
        const createTimeline = () => {
            if (timeline) {
                timeline.kill();
                gsap.set(SliderEl, { clearProps: "all" });
            }

            const sliderWidth = SliderEl.scrollWidth - SliderEl.clientWidth+200;

            timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: targetEl,
                    scrub: true,
                    pin: true,
                    start: "top top",
                    end: "+=150%", 
                },
            });

           
            timeline.to(
                SliderEl,
                {
                    x: -sliderWidth, // Moves the slider div to the left by its full width
                    ease: "none",
                }
            );
        };

        // Match media to check for screen width above 960px
        const mm = gsap.matchMedia();

        mm.add("(min-width: 960px)", () => {
            // Only create timeline if viewport width is above 960px
            createTimeline();

            // Update timeline on resize
            const handleResize = () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(() => {
                    createTimeline();
                }, 250);
            };

            window.addEventListener("resize", handleResize);

            // Cleanup
            return () => {
                window.removeEventListener("resize", handleResize);
                if (timeline) timeline.kill();
            };
        });

        return () => mm.revert(); // Revert matchMedia settings on unmount
    }, []);  

    return (
        <section className='relative md:p-[1em_1em] z-[5] w-full' ref={SecRef} >
            <div className='px-[1em] py-[4em] md:py-[10em] relative'>
                <div className='w-full h-full relative mx-[auto] max-w-[--max-width] flex flex-col gap-4' >
                    <div className='w-full flex flex-col justify-center lg:justify-start '>
                        <h2 className='text-[3em] lg:text-[11.5em] leading-[1] font-medium text-[--light-text] my-[0]'>
                            Services
                        </h2>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:flex gap-5 lg:ml-[50%]' ref={sliderRef}>
                        {services.map((item, index) => (
                            <ServiceCard key={index} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
