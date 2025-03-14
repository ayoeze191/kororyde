const { default: Image } = require("next/image")
import google from "./../public/assets/google.png"
import apple from "./../public/assets/apple.png"
import group from "./../public/assets/Group.png"

const FooterBg = () => {
    return <div className=" relative flex justify-center flex-col  items-center">
    <Image src={group} className="w-full h-full absolute top-0 -z-10" alt=""/>
    <div className=" z-[999] py-[40px] md:py-[134px] flex  items-center w-fit mx-auto flex-col "> 
    <p className="font-bold text-[#FEFEFE] text-[25px] md:text-[50px] text-center w-fit mx-auto font-[family-name:var(--font-bricolage-grotesque)] leading-[150%]">
      Get The App Today <br/> Start Your Ride
    </p>
  
    <div className="flex gap-[20px] items-center mt-[20px] md:mt-[50px]">
        <div className="flex  bg-[#252B42] py-[8.69px] md:py-[20px] px-[13.53px] md:px-[33.5px] items-center gap-[12px] md:gap-[25px] border-white border rounded-[10px]">
         <div className="w-[15.94px] h-[18.36px] md:w-[initial] md:h-[initial]"> <Image src={google} alt=""  className="w-full h-full"/></div>
          <div>
            <p className="font-[family-name:var(--font-montserrat)] font-bold leading-[24px] text-[6.76px] md:text-[14px] text-[#FFFFFF]">Download on the</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[9.66px] md:text-[20px] text-[#FFFFFF]">Google play</h2>
          </div>
        </div>
        <div className="flex bg-[#252B42] py-[8.69px] md:py-[20px] px-[13.53px] md:px-[33.5px] items-center gap-[12px] md:gap-[25px] border-white border rounded-[10px]">
        <div className="w-[15.94px] h-[18.36px] md:w-[initial] md:h-[initial]"> <Image src={apple} alt=""  className="w-full h-full"/></div>

          <div>
            <p className="font-[family-name:var(--font-montserrat)] font-bold leading-[24px] text-[6.76px] md:text-[14px] text-[#FFFFFF]">Download on the</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[9.66px] md:text-[20px] text-[#FFFFFF]">App Store</h2>
          </div>
        </div>
       </div>
    </div>
  </div>
}

export default FooterBg