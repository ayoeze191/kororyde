'use client';
import { useSidebar } from '@/Context';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ isHomePage, logo, hamburger }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div
        className={`py-[10px] md:py-[20px] ${
          isHomePage ? 'backdrop-blur-[35px] border-[#FEFEFE]' : 'bg-[#2D7CD0] border-[#2D7CD0]'
        } flex justify-between items-center border-[2px] rounded-[100px] px-[12.25px] sm:px-[20px] xl:px-[100px]`}
      >
        {/* ✅ Logo */}
        <div className="w-auto">
          <Image src={logo} width={100} height={50} alt="Logo" />
        </div>

        {/* ✅ Desktop Navigation */}
        <div className="lg:flex hidden gap-[50px] items-center text-[#FEFEFE]">
          <div className="flex lg:gap-[30px] text-[18px]">
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
              } text-[18px] font-bold py-[12px] px-[30px] rounded-[10px] border border-white`}
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

      {/* ✅ Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] md:w-[50%] bg-[#2D7CD0] text-white z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out p-5 shadow-lg`}
      >
        {/* ✅ Close Button */}
        <button onClick={toggleSidebar} className="absolute top-5 right-5 text-2xl font-bold">
          ✖
        </button>

        {/* ✅ Navigation Links */}
        <nav className="flex flex-col mt-10 gap-6 text-lg">
          <NavItem href="/" text="Home" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/investments" text="Investment Opportunities" />
          <NavItem href="/about-us" text="About Us" />
          <NavItem href="/contact-us" text="Contact" />
          <button className="bg-white text-[#2D7CD0] text-lg font-bold py-3 px-5 rounded-md mt-4">
            Download App
          </button>
        </nav>
      </div>

      {/* ✅ Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}

// ✅ Reusable Navigation Link Component
const NavItem = ({ href, text }) => (
  <Link
    prefetch={false}
    href={href}
    className="text-[14px] sm:text-[16px] md:text-base lg:text-[18px] leading-[150%] font-bold"
  >
    {text}
  </Link>
);
