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
        className={`py-[10px] md:py-[20px] ${
          isHomePage ? 'backdrop-blur-[35px] border-[#FEFEFE]' : 'bg-[#2D7CD0] border-[#2D7CD0]'
        } flex justify-between items-center border-[2px] rounded-[100px] px-[12px] sm:px-[20px] xl:px-[100px]`}
      >
        {/* ✅ Logo */}
        <div className="w-auto">
          <Image src={logo} width={100} height={50} alt="Logo" />
        </div>

        {/* ✅ Desktop Navigation */}
        <div className="lg:flex hidden gap-[30px] xl:gap-[40px] items-center text-[#FEFEFE]">
  <div className="flex gap-[15px] lg:gap-[25px] xl:gap-[35px] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold">
    <NavItem href="/" text="Home" />
    <NavItem href="/services" text="Services" />
    <NavItem href="/investments" text="Investment Opportunities" />
    <NavItem href="/about-us" text="About Us" />
    <NavItem href="/contact-us" text="Contact" />
  </div>
  <div>
    <button
      className={`${
        isHomePage ? 'bg-[#2D7CD0]' : 'bg-inherit'
      } text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-bold py-[10px] md:py-[12px] px-[20px] md:px-[30px] xl:px-[40px] rounded-[10px] border border-white`}
    >
      Download App
    </button>
  </div>
</div>


        {/* ✅ Mobile Menu Button */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <Image src={hamburger} width={40} height={40} alt="Menu" />
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
    className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] leading-[150%] font-bold"
  >
    {text}
  </Link>
);
