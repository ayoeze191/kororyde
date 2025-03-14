'use client';
import { useSidebar } from '@/Context';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from './../public/assets/hambuger.png';
import logo from './../public/assets/logo.png';

export default function Navbar({ isHomePage }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div
        className={`py-3 md:py-5 ${
          isHomePage ? 'backdrop-blur-lg border-[#FEFEFE]' : 'bg-[#2D7CD0] border-[#2D7CD0]'
        } flex justify-between items-center border-2 rounded-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32`}
      >
        {/* ✅ Logo */}
        <div className="w-auto">
          <Image src={logo} width={100} height={50} alt="Logo" />
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-white w-full">
          <div className="flex gap-6 xl:gap-8 2xl:gap-10">
            <NavItem href="/" text="Home" />
            <NavItem href="/services" text="Services" />
            <NavItem href="/investments" text="Investment Opportunities" />
            <NavItem href="/about-us" text="About Us" />
            <NavItem href="/contact-us" text="Contact" />
          </div>

          {/* ✅ Ensure button is properly spaced */}
          <button
            className={`ml-auto ${
              isHomePage ? 'bg-[#2D7CD0]' : 'bg-transparent'
            } text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold py-3 px-6 rounded-lg border border-white`}
          >
            Download App
          </button>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button onClick={toggleSidebar} className="lg:hidden focus:outline-none">
          <Image src={hamburger} width={40} height={40} alt="Menu" />
        </button>
      </div>

      {/* ✅ Mobile Sidebar Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] md:w-[50%] bg-[#2D7CD0] text-white z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out p-6 shadow-lg`}
      >
        {/* ✅ Close Button */}
        <button onClick={toggleSidebar} className="absolute top-5 right-5 text-3xl font-bold">
          ✖
        </button>

        {/* ✅ Navigation Links */}
        <nav className="flex flex-col mt-12 gap-6">
          <NavItem href="/" text="Home" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/investments" text="Investment Opportunities" />
          <NavItem href="/about-us" text="About Us" />
          <NavItem href="/contact-us" text="Contact" />
          <button className="bg-white text-[#2D7CD0] text-[18px] md:text-[20px] xl:text-[22px] 2xl:text-[24px] font-bold py-3 px-5 rounded-lg mt-6">
            Download App
          </button>
        </nav>
      </aside>

      {/* ✅ Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
      )}
    </>
  );
}

// ✅ Reusable Navigation Link Component
const NavItem = ({ href, text }) => (
  <Link
    prefetch={false}
    href={href}
    className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] 2xl:text-[22px] font-bold hover:text-gray-300 transition duration-200"
  >
    {text}
  </Link>
);
