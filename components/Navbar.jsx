import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";

const Navbar = ({isDarkMode, setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () =>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }


  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }
    })
  },[])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50  backdrop-blur-lg shadow-sm dark:bg-[#11001f] dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image
            src={ isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-34 cursor-pointer mr-14" 
          />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent "}  `}>
          <li className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li className="font-Ovo"> 
            <a href="#about">About</a>
          </li>
          <li className="font-Ovo">
            <a href="#services">Services</a>
          </li>
          <li className="font-Ovo">
            <a href="#work">My Work</a>
          </li>
          <li className="font-Ovo">
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button className="cursor-pointer"
            onClick={()=> setIsDarkMode(prev => !prev)} 
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
          >
            Contact <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className="w-3" />{" "}
          </a>

          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* -------- Mobile Menu ------- */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#2a004a] dark:text-white">

          <div
            onClick={closeMenu} 
           className="absolute right-6 top-6">
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>

          <li onClick={closeMenu}  className="font-Ovo">
            <a href="#top">Home</a>
          </li>
          <li onClick={closeMenu}  className="font-Ovo">
            <a href="#about">About</a>
          </li>
          <li onClick={closeMenu}  className="font-Ovo">
            <a href="#services">Services</a>
          </li>
          <li onClick={closeMenu}  className="font-Ovo">
            <a href="#work">My Work</a>
          </li>
          <li onClick={closeMenu}  className="font-Ovo">
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

  

export default Navbar;
