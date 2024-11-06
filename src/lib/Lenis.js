'use client';

import { gsap } from 'gsap';
import { Flip, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef, createContext, useContext } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, Flip);

// Create context to hold Lenis instance
const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

const LenisComponent = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis();

    lenisRef.current.on('scroll', ScrollTrigger.update);
    
    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  );
};

export default LenisComponent;
