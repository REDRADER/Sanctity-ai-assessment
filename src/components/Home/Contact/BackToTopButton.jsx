"use client"
import React from 'react'
import { useLenis } from '@/lib/Lenis';
import { ArrowUp } from 'lucide-react';
const BackToTopButton = () => {
    const lenis = useLenis();
    const handleScroll = (id) => {
       
        const targetSection = document.getElementById(id);
      
        
        if (lenis && targetSection) {
          lenis.scrollTo(targetSection, {
            offset: 0,
            immediate: false,
          });
        }
    };
  return (
    <span onClick={()=>handleScroll("hero")} className='w-[35px] h-[35px]  hover:w-[40px] hover:h-[40px] duration-300 ease-in-out flex justify-center items-center rounded-[50%] bg-[--background] '>
    <ArrowUp className='text-[--accent-green]' />
</span>
  )
}

export default BackToTopButton
