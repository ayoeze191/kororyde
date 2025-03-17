import Image from "next/image"
import logo from "./../public/assets/logo.webp"
import arrowup from "./../public/assets/arrowupright.webp"
import Link from "next/link"

const Footer = () => {
    return(
        <div className="py-[30px] md:py-[100px] px-[20px] lg:px-[235px] flex flex-col justify-center lg:flex-row  gap-[30px] lg:gap-[210px] bg-[#010101]">
  <div className="w-[345px] h-[98px] mx-auto lg:mx-0">
<Image src={logo} alt="" className="w-full"/>
</div>
<div className="flex gap-[30px] lg:gap-[28px] flex-col  lg:flex-row text-[#FEFEFE]">
  <div className="w-fit flex flex-col  font-[family-name:var(--font-bricolage-grotesque)] text-[#FEFEFE] ">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Services</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px] items-start lg:items-center">
      <p className="flex  lg:items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Ride-hailing
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Delivery
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] lg:text-center">Private/Solo ride
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] lg:text-center"> Co-Sharing ride
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
     
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)] lg:items-center items-start">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-start lg:text-center">Investment Opportunities</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>

    <div className="flex flex-col gap-[20px] items-start lg:items-center">
      <Link className="flex  items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={'/investments/ev-riders'}>Invest a ride
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
      <Link className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href="/investments/bike-investment">Invest a bus
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
      <Link className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={"/investments/"}>Advertisement
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>

      <Link className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={"/list-cars"}>List Your car
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
     
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center" >About Us</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px]">
      <Link className="flex  items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={'/about-us'}>About Us
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
      <Link className="flex  items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={'/how-to-use'}>How KoroRYDE Works
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
      <Link className="flex  items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={'/careers'}>Career
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
      <Link className="flex  items-center justify-center gap-[5px] lg:gap-[2.5px] text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={'/joinUs'}>Join Us
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
     
    </div>
  </div>
  
  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[18px] lg:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center" href={''}>Contact Us</p>
    <hr className="border-[0.5px] lg:border-[1px] my-[20px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px]">
      <Link className="flex  items-center gap-[5px] lg:gap-[2.5px] justify-center text-[13px] lg:text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center" href={'/contact-us'}> Contact Us
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </Link>
     
    </div>
  </div>

</div>
</div>
    )
}

export default Footer