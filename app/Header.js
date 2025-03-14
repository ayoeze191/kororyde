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
          isHomePage
            ? 'backdrop-blur-lg border-[#FEFEFE]'
            : 'bg-[#2D7CD0] border-[#2D7CD0]'
        } flex justify-between items-center border-2 rounded-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16`}
      >
        {/* ✅ Logo */}
        <div className="w-auto z-50">
          <Image
            src={logo}
            width={100}
            height={50}
            alt="Logo"
            className="w-20 h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36"
          />
        </div>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden lg:flex items-center text-white w-full">
          <div className="flex gap-3 xl:gap-4 2xl:gap-6">
            <NavItem href="/" text="Home" />
            <NavItem href="/services" text="Services" />
            <NavItem href="/investments" text="Investment Opportunities" />
            <NavItem href="/about-us" text="About Us" />
            <NavItem href="/contact-us" text="Contact" />
          </div>

          {/* ✅ Download App Button */}
          <button
            className={`ml-auto ${
              isHomePage ? 'bg-[#2D7CD0]' : 'bg-transparent'
            } text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg border border-white hover:bg-white hover:text-[#2D7CD0] transition duration-200 whitespace-nowrap`}
          >
            Download App
          </button>
        </nav>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden focus:outline-none"
        >
          <Image
            src={hamburger}
            width={40}
            height={40}
            alt="Menu"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </button>
      </div>

      {/* ✅ Mobile Sidebar Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-[75%] sm:w-[60%] md:w-[50%] lg:w-[40%] bg-[#2D7CD0] text-white z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out p-6 shadow-lg`}
      >
        {/* ✅ Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 text-3xl font-bold"
        >
          ✖
        </button>

        {/* ✅ Navigation Links */}
        <nav className="flex flex-col mt-12 gap-4 sm:gap-6">
          <NavItem href="/" text="Home" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/investments" text="Investment Opportunities" />
          <NavItem href="/about-us" text="About Us" />
          <NavItem href="/contact-us" text="Contact" />
          <button className="bg-white text-[#2D7CD0] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg mt-6 hover:bg-gray-100 transition duration-200">
            Download App
          </button>
        </nav>
      </aside>

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
    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold hover:text-gray-300 transition duration-200 whitespace-nowrap"
  >
    {text}
  </Link>
);