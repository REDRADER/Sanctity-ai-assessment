'use client'

import { gsap } from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger, Flip);

const LenisComponent = ({children}) => {
    useEffect(()=>{
        const lenis = new Lenis();

    
        lenis.on('scroll', (e) => {
         
        });
        
       
        lenis.on('scroll', ScrollTrigger.update);
        
       
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000); // Convert time from seconds to milliseconds
        });
        
        
        gsap.ticker.lagSmoothing(0);
    },[])
  return (
    <>
      {children}
    </>
  )
}

export default LenisComponent
