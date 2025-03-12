'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./../public/assets/logo.png"
import hambuger from "./../public/assets/hambuger.png"

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Becomes sticky after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        // <div className={`${isSticky&&'w-full px-[112px] fixed left-0 shadow'}`}>
         <div className={`py-[13px] md:py-[20px] backdrop-blur-[35px] flex justify-between items-center border-[#FEFEFE] border-[2px] rounded-[100px]  px-[12.25px] md:px-[100px]
              `}>
              <div className="flex-1"><Image src={logo} alt=""/></div>
              <div className="md:flex hidden  gap-[50px] items-center font-[family-name:var(--font-bricolage-grotesque)]">
              <div className=" border-[#FEFEFE] flex gap-[30px] text-[18px]">
                <p className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Home</p>
                <p className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Services</p>
                <p className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Investment Oppurtuinities</p>
                <p className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">About us</p>
                <p className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Contact</p>
              </div>
              <div>
                <button className="bg-[#2D7CD0]  text-[18px] font-bold py-[16.5px] px-[30px] rounded-[10px]">
                  Download App
                </button>
              </div>
              </div>
              <Image src={hambuger} alt='' className="md:hidden"/>
              </div>
            //   </div>
    )
}
export default Header;