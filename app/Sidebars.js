'use client'

import Image from "next/image"
import logo from "./../public/assets/logo.png"
import { useSidebar } from "@/Context"
import { useRouter } from "next/navigation"
const SideBar = ({show}) => {
    const {toggleSidebar} = useSidebar()
    const router = useRouter()
    const changeurl = (url) => {
        router.push(url)
        toggleSidebar()
    }
   return <div className="flex fixed h-full px-[20px] w-full flex-col left-0 bg-[#2D7CD0] top-0 py-[70px] md:hidden z-10"
   style={{
    'transform': show?'translateY(0)':'translateY(-50000px)',
    'transition': 'all 0.3s'
   }}
   >
        <div className="backdrop-blur-[35px] border-[#FEFEFE] flex justify-between">
           <div> <Image src={logo} alt=""/></div>
           <div className="bg-white rounded-[100px] h-[50px] w-[50px] flex items-center justify-center">
         <div onClick={toggleSidebar} className="cursor-pointer">  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.5005 6.25L7.00049 23.75M7.00049 6.25L24.5005 23.75" stroke="#C20000" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</div>

           </div>
        </div>
    <div className=" py-[70px] font-bold flex flex-col gap-[30px] text-white items-center">
         <p onClick={() => changeurl('/')} className="cursor-pointer">Home</p>
         <p onClick={() => changeurl('/services')} className="cursor-pointer">Service</p>
         <p onClick={() => changeurl('/investments')} className="cursor-pointer">Investment</p>
         <p onClick={() => changeurl('/about-us')} className="cursor-pointer">About Us</p>
         <p>Contact</p>
    </div>
    <button className="bg-[#FEFEFE] font-bold  text-[#2D7CD0] px-[30px] py-[20px] mt-[50px] w-fit mx-auto rounded-[10px]">
Download App
    </button>
    </div>
}

export default SideBar