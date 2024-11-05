"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';

// Registering plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(Flip, ScrollTrigger);
}

const ScrollTest = () => {
    const componentRef = useRef(null);
    const originRef = useRef(null);
    const targetRef = useRef(null);
    const scrubStartRef = useRef(null);
    const scrubEndRef = useRef(null);

    useEffect(() => {
        if (!componentRef.current || !originRef.current || !targetRef.current) {
            console.error("Missing required elements.");
            return;
        }

        const attr = (defaultVal, attrVal) => {
            const defaultValType = typeof defaultVal;
            if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
            if (attrVal === "true" && defaultValType === "boolean") return true;
            if (attrVal === "false" && defaultValType === "boolean") return false;
            if (isNaN(attrVal) && defaultValType === "string") return attrVal;
            if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
            return defaultVal;
        };

        const componentEl = componentRef.current;
        const originEl = originRef.current;
        const targetEl = targetRef.current;
        const scrubStartEl = scrubStartRef.current;
        const scrubEndEl = scrubEndRef.current;

        const startSetting = attr("top top", scrubStartEl?.getAttribute("tr-scrollflip-scrubstart"));
        const endSetting = attr("bottom bottom", scrubEndEl?.getAttribute("tr-scrollflip-scrubend"));
        const staggerSpeedSetting = attr(0.2, componentEl?.getAttribute("tr-scrollflip-staggerspeed"));
        const staggerDirectionSetting = attr("start", componentEl?.getAttribute("tr-scrollflip-staggerdirection"));
        const scaleSetting = attr(true, componentEl?.getAttribute("tr-scrollflip-scale"));
        const breakpointSetting = attr(0, componentEl?.getAttribute("tr-scrollflip-breakpoint"));

        let timeline;

        const createTimeline = () => {
            if (timeline) {
                timeline.kill();
                gsap.set(targetEl, { clearProps: "all" });
            }

            const state = Flip.getState(originEl);

            timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: scrubStartEl,
                    endTrigger: scrubEndEl,
                    start: startSetting,
                    end: endSetting,
                    scrub: true,
                    markers: true, // Enables markers for debugging
                },
            });

            timeline.add(
                Flip.from(state, {
                    targets: targetEl,
                    scale: scaleSetting,
                    stagger: {
                        amount: staggerSpeedSetting,
                        from: staggerDirectionSetting,
                    },
                    onStart: () => console.log("Flip animation started"),
                    onComplete: () => console.log("Flip animation completed"),
                })
            );
        };

        createTimeline();

        const handleResize = () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                createTimeline();
            }, 250);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (timeline) timeline.kill();
        };
    }, []);

    return (
        <div className='relative w-full' ref={componentRef} tr-scrollflip-element="component">
            <section ref={scrubStartRef} tr-scrollflip-scrubstart="top top" className='relative h-[100vh] p-[5em_1em_1em] z-[1] w-full'>
               
              
            
                   
                        <span ref={originRef} tr-scrollflip-element="origin" className='text-white text-[5em] absolute'>Make A</span>
                   
           
            </section>
            <section ref={scrubEndRef} tr-scrollflip-scrubend="40% center" className='relative h-[100vh] p-[5em_1em_1em] z-[2] w-full'>
                
                  
                        <span ref={targetRef} tr-scrollflip-element="target">Make A</span>
                   
               
            </section>
        </div>
    );
};

export default ScrollTest;
