import  {  useState } from 'react'
import { useEffect } from 'react'
import darkpng from '../assets/Darkpng.jpg'
import lightpng from '../assets/lightpng.jpg'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { VscColorMode } from "react-icons/vsc";

const Darkmode = () => {
    const [theme,setTheme]=useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element=document.documentElement;
    
    useEffect(()=>{
        if(theme==="dark")
        {
            element.classList.add("dark");
            localStorage.setItem("theme","dark");

        }
        else{
            element.classList.remove("dark")
            localStorage.setItem("theme","light");
        }
    },[theme]);

    const changeTheme=()=>{
        if(theme==="light")
        {
            setTheme("dark")
        }
        else{
            setTheme("light")
        }

    }

    return (

    <>
        <div className='relative'>
            
        {/* <img src={darkpng} alt="" className={`w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme!=="dark"?"opacity-0":"opacity-100" }`}
        onClick={changeTheme}
        /> */}
        <VscColorMode  
            className={`w-19 mt-2 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme!=="dark"?"opacity-0":"opacity-100" }`} 
            onClick={changeTheme}
        />
        {/* <img src={lightpng} alt="" className='w-12  cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' 
        onClick={changeTheme}
        /> */}
        <VscColorMode 
        className='w-19 mt-2 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' 
        onClick={changeTheme}
        />
        </div>
    </>
  )
}

export default Darkmode
