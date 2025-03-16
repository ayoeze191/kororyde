'use client'

import { useState } from "react"
import plus from "./../../public/assets/plus.svg"
const { default: Image } = require("next/image")

const Commitments = ({image, benefits, text}) => {
    const [readMore, setReadMore] = useState(false)
    return   <div className="font-[family-name:var(--font-bricolage-grotesque)] rounded-[10px]">
            <div className="relative rounded-[10px]">
              <div className="overlay rounded-[10px] absolute w-full h-full top-0 bg-black opacity-[0.3] z-1"></div>
              <div className="h-full rounded-[10px]"><Image src={image} alt="" className="rounded-[10px] w-full h-full"/></div>
             { readMore == true && <div className="absolute  h-full flex flex-col gap-[20px] rounded-[10px] bg-[#2D7CD0] top-0 w-full z-40 text-[#FEFEFE] p-[20px] text-[18px] leading-[150%]">
                {text.map((te, index) => <div key={index} className="">
                  {te}
                </div>)}
            </div>}
              <p className="z-2 text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[40px] top-[8px] md:top-[27px] left-[17px] absolute">Safety & ease</p>
            </div>
            <div className="flex justify-between items-center mt-[20px]">
            <div className="text-[#010101]  font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[25px] leading-[150%]">
            <p className="max-w-[354px]">{benefits}</p>
            {/* <p>Transportation</p> */}
            </div>
            <button className="bg-[#2D7CD0] px-[10px] py-[5px] lg:py-[6px] lg:px-[20px] cursor-pointer text-white  rounded-[100px] font-bold md:text-[25px] flex items-center " onClick={() => setReadMore(!readMore)}>{readMore?'Read Less':'Read More'}<span className="text-white font-normal p-2.5 border-[#FEFEFE] bg-[#FEFEFE] border-[1.5px] rounded-full ml-[13.3px]">
              <Image src={plus} alt="" />
              </span></button>
            </div>
           </div>
}

export default Commitments