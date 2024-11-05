import Image from 'next/image'
import React from 'react'

const WhoTrustItem = ({img1,img2,toggle,inverted}) => {
  return (
    <div className='group w-full p-[1em] flex justify-center items-center rounded-[16px] h-full bg-[#cadcc780] hover:bg-[#ffffff4d]  duration-300  ease-in-out'>
        <div className='aspect-square flex justify-center items-center  w-[50%] h-[50%] overflow-hidden relative'>
            <div className={`flex justify-center items-center  w-full h-full absolute inset-0 ${inverted?toggle?'top-[0%]':'top-[100%]':toggle?'top-[100%]':'top-[0%]'}  duration-300  ease-in-out`}>

            <Image src={img1} alt='whytrust logo' width={100} height={100} className='w-full object-contain invert grayscale group-hover:grayscale-0 group-hover:invert-0 duration-300  ease-in-out ' />
            </div>
            <div className={`flex justify-center items-center  w-full h-full absolute inset-0  ${inverted?toggle?'top-[-100%]':'top-[0%]':toggle?'top-[0%]':'top-[-100%]'} duration-300  ease-in-out`}>

            <Image src={img2} alt='whytrust logo' width={100} height={100} className='w-full object-contain invert grayscale group-hover:grayscale-0 group-hover:invert-0 duration-300  ease-in-out ' />
            </div>
        </div>
    </div>
  )
}

export default WhoTrustItem
