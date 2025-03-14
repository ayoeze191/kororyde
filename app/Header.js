'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "./../public/assets/logo.png"
import hambuger from "./../public/assets/hambuger.png"
import Link from "next/link";
import { useSidebar } from "@/Context";

const Header = ({isHomePage}) => {
    const [isSticky, setIsSticky] = useState(false);
    const {toggleSidebar} = useSidebar()
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Becomes sticky after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return (
        // <div className={`${isSticky&&'w-full px-[112px] fixed left-0 shadow'}`}>
         <div className={`py-[13px] md:py-[20px] ${isHomePage ? 'backdrop-blur-[35px] border-[#FEFEFE]':'bg-[#2D7CD0] border-[#2D7CD0]'} flex justify-between items-center  border-[2px] rounded-[100px]  px-[12.25px] md:px-[100px]
              `}>
              <div className="flex-1"><Image src={logo} alt=""/></div>
              <div className="lg:flex hidden  gap-[50px] items-center font-[family-name:var(--font-bricolage-grotesque)] text-[#FEFEFE]">
              <div className=" border-[#FEFEFE] flex gap-[30px] text-[18px]">
                <Link prefetch={false}  href={'/'} className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Home</Link>
                <Link prefetch={false} href={'/services'} className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Services</Link>
                <Link prefetch={false} href={'/investments'} className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Investment Oppurtuinities</Link>
                <Link href={'/about-us'} className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">About us</Link>
                <Link href={'/contact-us'} className="text-[18px] leading-[150%] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Contact</Link>
              </div>
              <div>
                <button className={`${isHomePage?'bg-[#2D7CD0]':'bg-inherit'}  text-[18px] font-bold py-[16.5px] px-[30px] rounded-[10px]`}>
                  Download App
                </button>
              </div>
              </div>
              <Image src={hambuger} alt='' className="lg:hidden cursor-pointer" onClick={() => toggleSidebar()}/>
              </div>
            //   </div>
    )
}
export default Header;