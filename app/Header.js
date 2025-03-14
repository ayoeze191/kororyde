'use client';
import { useSidebar } from '@/Context';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from "./../public/assets/hambuger.png";
import logo from "./../public/assets/logo.png";

export default function Navbar({ isHomePage }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div
        className={`py-[8px] md:py-[14px] ${
          isHomePage ? 'backdrop-blur-[20px] border-[#FEFEFE]' : 'bg-[#2D7CD0] border-[#2D7CD0]'
        } flex justify-between items-center border-[1.5px] rounded-[50px] px-[10px] sm:px-[16px] md:px-[24px] lg:px-[32px] xl:px-[64px] mx-auto`}
      >
        {/* ✅ Logo */}
        <div className="w-auto">
          <Image src={logo} width={80} height={40} alt="Logo" className="w-[initial] h-[initial]" />
        </div>

        {/* ✅ Desktop Navigation */}
        <div className="hidden lg:flex gap-[20px] xl:gap-[30px] items-center text-[#FEFEFE]">
          <div className="flex gap-[12px] lg:gap-[18px] xl:gap-[24px] text-[14px] md:text-[16px] xl:text-[18px] font-semibold">
            <NavItem href="/" text="Home" />
            <NavItem href="/services" text="Services" />
            <NavItem href="/investments" text="Investment Opportunities" />
            <NavItem href="/about-us" text="About Us" />
            <NavItem href="/contact-us" text="Contact" />
          </div>
          <div>
            <button
              className={`${
                isHomePage ? 'bg-[#2D7CD0]' : 'bg-transparent'
              } text-[14px] md:text-[16px] xl:text-[18px] font-bold py-[8px] md:py-[10px] px-[16px] md:px-[24px] xl:px-[32px] rounded-[8px] border border-white`}
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
    className="text-[13px] sm:text-[14px] md:text-[16px] xl:text-[18px] leading-[140%] font-semibold"
  >
    {text}
  </Link>
);
