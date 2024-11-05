import React from 'react'

const TrackRecordItem = ({ data }) => {
    return (
        <div className={`w-full flex`}>
            <div className={`w-full p-[1.6em] rounded-[24px] min-h-[250px]  lg:h-[22em] relative flex justify-start ${data.type===2?'items-start':'items-end'}`} style={{ background: data.background }}>
                <div className='flex flex-col'>

               <h2 className={`${data.background==="#262D29"?'text-[--accent-green]':'text-[#43554b] '} text-[2em] md:text-[4.7em] font-semibold leading-[0.8]`}>{data.header}</h2>
               <p className={` ${data.background==="#262D29"?'text-[#43554b]':'text-[--light-text]'} opacity-70  text-[0.7em] md:text-[1.45em]`} >{data.subHeading}</p>
                </div>
                <div className={`absolute ${data.type===2?"bottom-0 right-0":"top-0 right-0"} h-[50%] w-[40%]`}>
                    <span >

                    {/* {data.icon} */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TrackRecordItem
