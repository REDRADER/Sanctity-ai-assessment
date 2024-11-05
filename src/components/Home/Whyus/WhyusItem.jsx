"use client"
import React, { useState } from 'react'

const WhyusItem = ({data}) => {
    const [toggle,setToggle]=useState(false)
  return (
    <div className='w-full flex flex-col gap-1 pt-[3em] pb-[2.5em] relative group cursor-pointer' onClick={()=>setToggle(prev=>!prev)}>
        <span className='block h-[1px] w-full absolute top-0 bg-[--light-text] opacity-20'></span>
        <div className='flex w-full justify-between items-center ' >
            <h3 className={`text-[2.7em] font-semibold ${toggle?" text-[--accent-green]":" text-[--light-text]"} group-hover:opacity-50 duration-[400ms] ease-in-out`}>
                {data.question}
            </h3>
            <div className={`w-[35px] h-[35px] flex shrink-0 relative ${toggle?'rotate-90':'rotate-0'} duration-[400ms] ease-in-out`}>
                <span className={`w-[100%] h-[2px] bg-[--accent-green] block absolute top-[50%] duration-[400ms] ease-in-out ${toggle?'opacity-0':'opacity-100'}`} style={{transform:"translate(0,-50%)"}}></span>
                <span className='w-[2px] h-[100%]  bg-[--accent-green] block absolute left-[50%]' style={{transform:"translate(-50%,0)"}} ></span>
            </div>
        </div>
        <p className={`text-[1.45em] text-[--light-text] opacity-40 ${toggle?"max-h-[100px]":"max-h-0"} duration-[400ms] ease-in overflow-hidden `}>
            {data.answer}
        </p>
    </div>
  )
}

export default WhyusItem
