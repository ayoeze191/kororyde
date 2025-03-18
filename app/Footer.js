'use client'
import Image from "next/image"
import logo from "./../public/assets/logo.webp"
import arrowup from "./../public/assets/arrowupright.webp"
import Link from "next/link"

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
// import arrowup from './../public/assets/arrowup.webp';

const InteractiveLink = ({ href, text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
      <Link
        href={href}
        className={`flex items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center transition-all duration-300 ${
          isActive ? 'text-[#FFD700] underline' : 'hover:text-[#FACC15] text-white'
        }`}
      >
        {text}
        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
          <Image src={arrowup} alt="" className="w-[25px] h-[25px]" />
        </motion.div>
      </Link>
    </motion.div>
  );
};
const Footer = () => {
    return(
        <div className="py-[30px] md:py-[100px] px-[20px] lg:px-[235px] flex flex-col justify-center lg:flex-row  gap-[30px] lg:gap-[210px] bg-[#010101]">
  <div className="w-[345px] h-[98px] mx-auto lg:mx-0">
<Image src={logo} alt="" className="w-full"/>
</div>
<div className="flex gap-[30px] lg:gap-[28px] flex-col  lg:flex-row text-[#FEFEFE]">
  <div className="w-fit flex flex-col  font-[family-name:var(--font-bricolage-grotesque)] text-[#FEFEFE] ">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[20px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Services</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px] items-start lg:items-center">
      <InteractiveLink text="Ride-hailing" href={''}/>
      <InteractiveLink text="Delivery" href={''}/>
      <InteractiveLink text="Private/Solo ride" href={''}/>
      <InteractiveLink text="Co-Sharing ride" href={''}/>
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[20px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center" >Investment Opportunities</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-3">
      <InteractiveLink href="/investments/ev-riders" text="Invest a ride" />
      <InteractiveLink href="/investments/bike-investment" text="Invest a bus" />
      <InteractiveLink href="/investments/" text="Advertisement" />
      <InteractiveLink href="/list-cars" text="List Your car" />
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[20px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center" >About Us</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px]">
      <InteractiveLink href="/about-us" text="About Us" />
      <InteractiveLink href="/how-to-use" text="How KoroRYDE Works" />
      <InteractiveLink href="/careers" text="Career" />
      <InteractiveLink href="/joinUs" text="Join Us" />
    </div>
  </div>
  
  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[20px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center" href={''}>Contact Us</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px]">
    <InteractiveLink href="/contact-us" text="Contact Us" />

     
    </div>
  </div>

</div>
</div>
    )
}

export default Footer