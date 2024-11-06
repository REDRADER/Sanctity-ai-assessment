import SanctityIcon from '@/icons/SanctityIcon'
import Link from 'next/link'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ThemeSwitcher from '@/app/ThemeSwitcher';
import CreateIcon from '@mui/icons-material/Create';

const Navbar = () => {
    return (
        <nav className='w-[100vw] fixed top-0 left-0 right-0 z-[100]'>
            <div className='w-full flex justify-between items-center p-[1em] md:p-[1em_2em] gap-3'>
                <Link className='' href={"/"}>
                    <SanctityIcon className="h-[2em] md:h-[2.5em] " />
                </Link>
                <div className='flex gap-2'>
                    <ThemeSwitcher />
                    <span className='group rounded-[50%] h-[3.2em] w-[3.2em] bg-[--backgound-elivated] flex flex-col justify-center items-center gap-[3px] cursor-pointer'>
                        <span className='h-[2px] w-[15px] bg-[--accent-green] mr-[4px] group-hover:mr-[-6px] duration-300 ease-in opacity-50' />
                        <span className='h-[2px] w-[15px] bg-[--accent-green] ml-[4px] group-hover:ml-[-6px] duration-300 ease-in opacity-50' />


                    </span>
                    <Link href={"/contactus"} className=' flex md:hidden group bg-[--accent-green] h-[3.2em] w-[3.2em] md:w-[11em] rounded-[100px] justify-center items-center '>
                        <span  className={`h-[20px] w-[20px] rounded-[50%] text-[--background] flex justify-center items-center  `}><CreateIcon className='h-full w-full' /></span>
                    </Link>
                    <Link href={"/contactus"} className=' group hidden md:block bg-[--accent-green] h-[3.2em] w-[3.2em] md:w-[11em] rounded-[100px]  '>
                        <div className=' h-full overflow-hidden relative'>
                            <div className='absolute inset-0 rotate-z-0 group-hover:rotateOP-z-45  flex justify-start items-center duration-300 ease-in px-[18px]' style={{ transformOrigin: "center right" }}>
                                <span className='text-lg font-medium text-[--background]' >
                                    Get in touch
                                </span>
                            </div>
                            <div className='absolute inset-0 rotate-z-45 group-hover:rotate-z-0 flex justify-start items-center duration-300 ease-in px-[18px] ' style={{ transformOrigin: "center right" }}>
                                <span className='text-lg font-medium text-[--background]' >Don&apos;t be shy</span>
                            </div>
                            <div className='absolute right-0 top-0 left-[auto] bottom-0 flex justify-center items-center h-[3.2em] w-[3.2em]'>
                                <span className='w-[30%] h-[30%] group-hover:w-[70%] group-hover:h-[70%] rounded-[50%] bg-[--background] duration-300 ease-in' />
                                <span className='absolute top-[50%] left-[5px] group-hover:left-[50%] duration-300 ease-in  ' style={{ transform: "translate(-50%,-50%)" }}>

                                    <ArrowForwardIcon className='w-[20px] text-[--accent-green]' />
                                </span>


                            </div>


                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
