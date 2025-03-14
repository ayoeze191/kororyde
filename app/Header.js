'use client';
import { useSidebar } from '@/Context';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from "./../public/assets/hambuger.webp";
import logo from "./../public/assets/logo.webp";
import { usePathname } from 'next/navigation';
export default function Navbar({ isHomePage }) {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const pathname = usePathname(); 
  const isActive = pathname;
  return (
    <>
      {/* ✅ Top Navigation Bar */}
      <div
        className={`py-[8px] md:py-[14px]  ${
          isHomePage ? 'backdrop-blur-[20px] border-[#FEFEFE]' : 'bg-[#2D7CD0] z-[9999999999999999] border-[#2D7CD0]'
        } flex justify-between items-center border-[1.5px] rounded-[50px]  mx-auto px-1 sm:px-2  md:px-6 lg:px-8 `}
      >
       <Link href={'/'} className="w-[130px] h-[30px] sm:w-[170px] -ml-2.5 sm:h-[44px] flex items-center xl:w-[250px] xl:h-[55px]">
<Image src={logo} alt="Logo" className="w-full h-full" />
 </Link>
        <div className='hidden md:flex  items-center xl:gap-[30px] 2xl:gap-[50px]'>
      <div className='md:flex text-white gap-1 md:gap-2 lg:gap-3 xl:gap-3  mr-2'>
        <NavItem text={'Home'} href={'/'} active={pathname=='/'}/>
        <NavItem text={'Service'} href={'/services'} active={pathname=='/services'}/>
        <NavItem text={'Investment Oppurtuinites'} href={'/investments'} active={pathname=='/investments'}/>
        <NavItem text={'About us'} href={'/about-us'} active={pathname=='/about-us'}/>
        <NavItem text={'Contact'} href={'/contact-us'} active={pathname=='contact-us'}/>
      </div>
      <button className='py-2 px-2 text-[12px] xl:text-[12.5px] xl:py-[16px] xl:px-[30px]  bg-[#FEFEFE] rounded-[8px] font-bold text-[#2D7CD0] font-[family-name:var(--font-bricolage-grotesque)]'>Download App</button>
      </div>
      <div className='block md:hidden ' onClick={toggleSidebar}>
      <Image src={hamburger}  alt=''/>
      </div>
      </div>
    </>
  );
}

// ✅ Reusable Navigation Link Component
const NavItem = ({ href, text, active }) => (
  <Link
    prefetch={false}
    href={href}
    className={`text-[13px]  sm:text-[14px] md:text-[14px] xl:text-[18px] leading-[150%] font-bold ${active?'underline':'no-underline'}`}
  >
    {text}
  </Link>
);



//   {/* ✅ Logo */}
//   <div className="w-[75px] h-[40px] flex items-center md:w-auto">
//   <Image src={logo} alt="Logo" className="w-full" />
// </div>

// {/* ✅ Desktop Navigation */}
// <div className="hidden flex-1 lg:flex xl:gap-[20px] 2xl:gap-[30px] items-center justify-end text-[#FEFEFE] mr-2">
//   <div className="flex gap-[12px] lg:gap-[18px] gap-[24px] text-[14px] lg:text-[16px] xl:text-[18px] font-semibold">
//     <NavItem href="/" text="Home" />
//     <NavItem href="/services" text="Services" />
//     <NavItem href="/investments" text="Investment Opportunities" />
//     <NavItem href="/about-us" text="About Us" />
//     <NavItem href="/contact-us" text="Contact" />
//   </div>
//   <div className='md:ml-1'>
//     <button
//       className={`${
//         isHomePage ? 'bg-[#2D7CD0]' : 'bg-transparent'
//       } text-[14px] md:text-[16px] xl:text-[18px] font-bold py-[8px] md:py-[10px] px-[12px]   xl:px-[32px] rounded-[8px] border border-white`}
//     >
//       Download App
//     </button>
//   </div>
// </div>

// {/* ✅ Mobile Menu Button */}
// <button onClick={toggleSidebar} className="lg:hidden cursor-pointer">
//   <Image src={hamburger} width={32} height={32} alt="Menu" className="w-[28px] h-[28px] md:w-[36px] md:h-[36px]" />
// </button>