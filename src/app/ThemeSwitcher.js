"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <button className='group rounded-[50%] h-[3.2em] w-[3.2em] bg-[--backgound-elivated] flex flex-col justify-center items-center gap-[2px] cursor-pointer' onClick={() => {theme==="light"?setTheme("dark"):setTheme("light")}}>
                       

            {
                theme==="light"?
                <span aria-label="Dark Mode Button" className={`h-[20px] w-[20px] rounded-[50%] text-[--accent-green] flex justify-center items-center opacity-50  `}><DarkModeOutlinedIcon className='h-full w-full'/></span>
                :
                <span aria-label="Light Mode Button" className={`h-[20px] w-[20px] rounded-[50%] text-[--accent-green] flex justify-center items-center opacity-50 `} ><LightModeOutlinedIcon className='h-full w-full'/></span>
            }
          
           
           
           
        </button>

    )
}

export default ThemeSwitcher
