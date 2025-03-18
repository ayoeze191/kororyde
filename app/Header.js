'use client';

import { useSidebar } from '@/Context';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import hamburger from './../public/assets/hambuger.webp';
import logo from './../public/assets/logo.webp';

export default function Navbar({ isHomePage }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { text: 'Home', href: '/' },
    { text: 'Service', href: '/services' },
    { text: 'Investment Opportunities', href: '/investments' },
    { text: 'About us', href: '/about-us' },
    { text: 'Contact', href: '/contact-us' },
  ];

  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div
        className={`py-[8px] md:py-[14px] ${
          isHomePage ? 'backdrop-blur-[20px] border-[#FEFEFE]' : 'bg-[#2D7CD0] z-50 border-[#2D7CD0]'
        } flex justify-between items-center border-[1.5px] rounded-[50px] mx-auto px-1 sm:px-2 md:px-6 lg:px-8`}
      >
        {/* ✅ Logo */}
        <Link href={'/'} className="w-[130px] h-[30px] sm:w-[170px] sm:h-[44px] flex items-center xl:w-[250px] xl:h-[55px]">
          <Image src={logo} alt="Logo" className="w-full h-full" />
        </Link>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center xl:gap-[30px] 2xl:gap-[50px]">
          <div className="md:flex text-white gap-1 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-[30px] mr-2">
            {navItems.map(({ text, href }) => (
              <NavItem
                key={href}
                href={href}
                text={text}
                active={pathname === href}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
          <button
            className={`py-2 px-2 text-[12px] xl:text-[12.5px] 2xl:text-[18px] xl:py-[16px] xl:px-[30px] ${
              isHomePage ? 'bg-[#2D7CD0] text-white' : 'bg-[#FEFEFE] text-[#2D7CD0]'
            } rounded-[8px] font-bold`}
          >
            Download App
          </button>
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="block md:hidden" onClick={toggleSidebar}>
          <motion.div
            animate={{ rotate: isSidebarOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={hamburger} alt="Menu" />
          </motion.div>
        </div>
      </div>

      {/* ✅ Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-[#2D7CD0] z-50 flex flex-col items-center justify-center gap-6 text-white shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              {navItems.map(({ text, href }) => (
                <NavItem key={href} href={href} text={text} active={pathname === href} />
              ))}
              <button
                className="py-2 px-6 bg-white text-[#2D7CD0] rounded-lg font-bold"
                onClick={toggleSidebar}
              >
                Close Menu
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// ✅ Reusable Navigation Link Component with Hover & Active Effects
const NavItem = ({ href, text, active, hovered, setHovered }) => (
  <div
    className="relative"
    onMouseEnter={() => setHovered(text)}
    onMouseLeave={() => setHovered(null)}
  >
    <Link
      href={href}
      prefetch={false}
      className={`relative px-3 py-2 text-[14px] xl:text-[18px] font-bold transition-all duration-300 ${
        active ? 'text-[#FFD700]' : hovered === text ? 'text-[#FACC15]' : 'text-white'
      }`}
    >
      {text}
    </Link>

    {/* Active Underline Effect */}
    {active && (
      <motion.div
        className="absolute left-0 bottom-0 h-[2px] bg-[#FFD700]"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    )}
  </div>
);
