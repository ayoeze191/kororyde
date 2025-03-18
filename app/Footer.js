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
                  className={`flex items-center justify-start lg:justify-center gap-[0.3125rem] lg:gap-[0.15625rem] text-[0.8125rem]  xl:text-[1.125rem] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] transition-all duration-300 ${
                        isActive ? 'text-[#FFD700] underline' : 'hover:text-[#FACC15] text-white'
                  }`}
            >
                  {text}
                  <motion.div whileHover={{ y: -0.1875 }} transition={{ duration: 0.3 }}>
                        <Image src={arrowup} alt="" className="w-[1.5625rem] h-[1.5625rem] lg:hidden xl:block" />
                  </motion.div>
            </Link>
      </motion.div>
);
};
const Footer = () => {
    return (
      <div className="py-[1.875rem] xl:py-[6.25rem] px-[1.25rem] 2xl:px-[0.125rem] flex flex-col justify-center lg:flex-row gap-[1.875rem] xl:gap-[0.0625rem] bg-[#010101]">
        <div className="xl:w-[18.75rem] xl:h-[6.125rem] mx-auto lg:mx-0">
          <Image src={logo} alt="" className="w-full" />
        </div>
        <div className="flex gap-[0.9375rem] xl:gap-[1.75rem] flex-col lg:flex-row text-[#FEFEFE]">
          <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)] text-[#FEFEFE]">
            <p className="text-[#FEFEFE] font-bold text-[1.125rem] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Services</p>
            <hr className="border-[0.03125rem] lg:border-[0.0625rem] my-[1.25rem] border-[#FEFEFE]" />
            <div className="flex flex-col gap-[1.25rem] items-start lg:items-center">
              <InteractiveLink text="Ride-hailing" href={''} />
              <InteractiveLink text="Delivery" href={''} />
              <InteractiveLink text="Private/Solo ride" href={''} />
      <InteractiveLink text="Co-Sharing ride" href={''}/>
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px]  leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center" >Investment Opportunities</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-3">
      <InteractiveLink href="/investments/ev-riders" text="Invest a ride" />
      <InteractiveLink href="/investments/bike-investment" text="Invest a bus" />
      <InteractiveLink href="/investments/" text="Advertisement" />
      <InteractiveLink href="/list-cars" text="List Your car" />
    </div>
  </div>
<div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
      <p className="text-[#FEFEFE] font-bold text-[18px]  leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Resources</p>
      <hr className="border-[0.5px] lg:border-[1px] my-[1.25rem] border-[#FEFEFE]" />
      <div className="flex flex-col gap-[1.25rem]">
            <InteractiveLink href="/blog" text="Blog" />
            <InteractiveLink href="/faq" text="FAQ" />
            <InteractiveLink href="/support" text="Support" />
            <InteractiveLink href="/terms" text="Terms & Conditions" />
      </div>
</div>

  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px]  leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center" >About Us</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px]">
      <InteractiveLink href="/about-us" text="About Us" />
      <InteractiveLink href="/how-to-use" text="How KoroRYDE Works" />
      <InteractiveLink href="/careers" text="Career" />
      <InteractiveLink href="/joinUs" text="Join Us" />
    </div>
  </div>
  
  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px]  leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center" href={''}>Contact Us</p>
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