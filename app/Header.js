'use client';
import { useSidebar } from '@/Context';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from "./../public/assets/hambuger.webp";
import logo from "./../public/assets/logo.webp";

export default function Navbar({ isHomePage }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div
        className={`py-[8px] md:py-[14px]  ${
          isHomePage ? 'backdrop-blur-[20px] border-[#FEFEFE]' : 'bg-[#2D7CD0] z-[9999999999999999] border-[#2D7CD0]'
        } flex justify-between items-center border-[1.5px] rounded-[50px] px-[10px] sm:px-[16px] md:px-[24px] lg:px-[32px] xl:px-[64px] mx-auto`}
      >
        {/* ✅ Logo */}
        <div className="w-auto">
          <Image src={logo} width={75} height={40} alt="Logo" className="md:w-[initial] md:h-[initial]" />
        </div>

        {/* ✅ Desktop Navigation */}
        <div className="hidden lg:flex xl:gap-[20px] 2xl:gap-[30px] items-center text-[#FEFEFE] mr-2">
          <div className="flex gap-[12px] lg:gap-[18px] gap-[24px] text-[14px] lg:text-[16px] xl:text-[18px] font-semibold">
            <NavItem href="/" text="Home" />
            <NavItem href="/services" text="Services" />
            <NavItem href="/investments" text="Investment Opportunities" />
            <NavItem href="/about-us" text="About Us" />
            <NavItem href="/contact-us" text="Contact" />
          </div>
          <div className='md:ml-1'>
            <button
              className={`${
                isHomePage ? 'bg-[#2D7CD0]' : 'bg-transparent'
              } text-[14px] md:text-[16px] xl:text-[18px] font-bold py-[8px] md:py-[10px] px-[12px]   xl:px-[32px] rounded-[8px] border border-white`}
            >
              Download App
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <Image src={hamburger} width={32} height={32} alt="Menu" className="w-[28px] h-[28px] md:w-[36px] md:h-[36px]" />
        </button>
      </div>
    </>
  );
}

// ✅ Reusable Navigation Link Component
const NavItem = ({ href, text }) => (
  <Link
    prefetch={false}
    href={href}
    className="text-[13px]  sm:text-[14px] md:text-[14px] xl:text-[18px] leading-[140%] font-semibold"
  >
    {text}
  </Link>
);
