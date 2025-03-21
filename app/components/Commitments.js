'use client'

import { useState } from "react"
import plus from "./../../public/assets/plus.png"
import minus from "./../../public/assets/minus.png"
const { default: Image } = require("next/image")
import {motion} from "motion/react"
const transition = {
  duration: 0.4,
  // delay: 0,
  ease: [0, 0.71, 0.2, 1.01],
}
const Commitments = ({image, benefits, text}) => {
    const [readMore, setReadMore] = useState(false)
    return   <div className="font-[family-name:var(--font-bricolage-grotesque)] rounded-[10px]">
            <div className="relative rounded-[10px]">
              <div className="overlay rounded-[10px] absolute w-full h-full top-0 bg-black opacity-[0.3] z-1"></div>
              <div className="h-full rounded-[10px]"><Image src={image} alt="" className="rounded-[10px] w-full h-full"/></div>
             { readMore == true && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={transition} className="absolute  h-full flex flex-col gap-[20px] rounded-[10px] bg-[#2D7CD0] top-0 w-full z-40 text-[#FEFEFE] p-[20px] text-[14px] md:text-[18px] leading-[150%]">
                {text.map((te, index) => <div key={index} className="">
                  {te}
                </div>)}
            </motion.div>}
              <p className="z-2 text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[40px] top-[8px] md:top-[27px] left-[17px] absolute">Safety & ease</p>
            </div>
            <div className="flex justify-between items-center mt-[20px]">
            <div className="text-[#010101] flex-wrap  font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[13px] xl:text-[25px] leading-[150%]">
            <p className="max-w-[354px]">{benefits}</p>
            {/* <p>Transportation</p> */}
            </div>
            <motion.button transition={transition} initial={{ height: 'auto' }}
  animate={{ height: "auto" }} className="bg-[#2D7CD0] text-center  text-[13px] font-bold font-[family-name:var(--font-bricolage-grotesque)] flex justify-between w-[119] lg:w-[213px] lg:h-[50px] lg:text-[20px]  rounded-[100px] py-[5px] px-[10px] text-white h-[30px] items-center" onClick={() => setReadMore(!readMore)}>{readMore?'Read Less':'Read More'}
              {readMore == true ? <Image src={minus} alt="" className="w-[20px] lg:w-[33px]" />:<Image src={plus} alt="" className="w-[20px] lg:w-[33px]"/>}
              </motion.button>
            </div>
           </div>
}

export default Commitments