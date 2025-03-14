import Image from "next/image"

const { default: Footer } = require("../Footer")
const { default: FooterBg } = require("../FooterBg")
const { default: Header } = require("../Header")
import invest from "./../../public/assets/Invest.webp"
import cng from "./../../public/assets/CNG.webp"
import bike from "./../../public/assets/bike.webp"
import elipse1 from "./../../public/assets/Ellipse 1.webp"
import elipse2 from "./../../public/assets/Ellipse 2.webp"
import elipse3 from "./../../public/assets/Ellipse 3.webp"
import elipse4 from "./../../public/assets/Ellipse 4.webp"
import OverallLayout from "../OverallLayout"
import MakeMoney from "./../../public/assets/makeMoney.webp"
import MakeMoney1 from "./../../public/assets/makeMoney1.webp"
import MakeMoney3 from "./../../public/assets/MakeMoney2.webp"


const Page = () => {
    return <OverallLayout><div className="">
    <div className="md:min-h-screen bg-no-repeat bg-cover  md:py-[64px]  py-[60px]  " style={{
    }}>
        <div className="px-[20px] md:px-[112px]">
    <Header isHomePage={false}/>
    </div>
    <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[113px]">
    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
    ">Investment Oppurtuinities</p>
        <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  mt-[40px] text-center text-[#010101]">Drive the Future. Earn Passively. Empower Communities.<span className="text-[#656565]">KoroRYDE is transforming transportation in Nigeria by providing eco-friendly ride-hailing and delivery services.
As an investor, you have a unique opportunity to earn weekly income for 2 years while helping us build a<br/>
sustainable, efficient, and profitable transport network.</span></p>
    </div> 
    <div className="max-w-[1291px] mx-auto mt-[50px] md:mt-[100px] flex flex-col gap-[60px] px-[20px]">
        <div className="flex items-center flex-col md:flex-row  gap-[20px] md:gap-[60px]">
                    <div className={` w-full md:w-[50%] bg-red-400 h-[500px]  rounded-[10px]`}><Image alt=""  className=" rounded-[10px] w-full h-full object-cover"  src={invest}/></div>
                    <div className={`w-full md:w-[50%]  `}>
                        <p className="text-[#010101] text-[18px] md:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-bold">Why Invest in KoroRYDE?</p>
                        <p className="text-[#656565] text-[14px] md:text-[18px] mt-[20px] md:mt-[30px] font-[family-name:var(--font-bricolage-grotesque)]">
                        The ride-hailing and delivery industry in Nigeria is growing rapidly, with increasing demand for reliable and affordable transportation. KoroRYDE is positioning itself as a leader by introducing CNG-powered cars and EV bikes—reducing fuel costs, increasing driver earnings, and minimizing carbon emissions.

By investing in CNG cars or EV bikes, you will not only make money but also create jobs, reduce pollution, and support innovation in Nigeria’s transport sector.
                        </p>
                        <button className="mt-[20px] md:mt-[50px] text-[#FDFDFD] bg-[#2D7CD0] text-[13px] md:text-[18px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px]  md:py-[16.5px]">
                            Start investing today
                        </button>
                    </div>
                </div>
        </div>
{/* Investment Packages & Earnings Potential */}
        <div className="mt-[50px] md:mt-[100px]  mx-auto">
        <p className="text-[30px] md:text-[50px] leading-[150%]  font-[family-name:var(--font-bricolage-grotesque)] font-bold text-center [text-shadow:3px_2px_0px_0px_#2D7CD0]
">Investment Packages & Earning Potential
      KoroRyde</p>
        <p className="mt-[20px] md:mt-[40px] px-[20px] text-center max-w-[1118px] mx-auto text-[#656565]">
      KoroRYDE is transforming transportation in Nigeria by providing eco-friendly ride-hailing and delivery services.
As an investor, you have a unique opportunity to earn weekly income for 2 years while helping us build
a sustainable, efficient, and profitable transport network.
      </p>
      {/*  */}
      <div className="mx-auto max-w-[1402px] flex flex-col md:flex-row gap-[60px] mt-[30px] md:mt-[50px]">
        <div className="p-[20px] bg-[#F6F6F6] ">
        <Image src={cng} alt="" />
        <p className="mt-[52px] text-[#010101] text-[25px] font-bold font-[family-name:var(--font-bricolage-grotesque)]">CNG Car Investment</p>
        <p className="font-[family-name:var(--font-bricolage-grotesque)] mt-[30px] text-[#656565] leading-[150%]">
        ✅ Your CNG car will be used by verified KoroRYDE drivers for ride-hailing.<br/>
✅ Earn weekly passive income for 2 years from ride fares.<br/>
✅ CNG cars offer lower fuel costs and higher efficiency, increasing profitability.<br/>
✅ Hassle-free investment – we manage the car, you earn weekly!<br/>
✅ Contribute to a cleaner and more affordable transport system.<br/>
        </p>
            <button className="bg-[#2D7CD0] px-[30px] py-[16.5px] text-[18px] font-bold leading-[150%] mt-[50px] rounded-[10px] text-[#FDFDFD]">
          <a href="https://kororyde.com.ng/cng-financing/">  Start investing today</a>

        </button>
        </div>

        <div className="p-[20px] bg-[#F6F6F6] ">
        <Image src={bike} alt="" />
        <p className="mt-[52px] text-[#010101] text-[25px] font-bold font-[family-name:var(--font-bricolage-grotesque)]">EV Bike Investment</p>
        <p className="font-[family-name:var(--font-bricolage-grotesque)] mt-[30px] text-[#656565] leading-[150%]">
        ✅ Your electric bike will be used for deliveries on the KoroRYDE platform.<br/>
✅ Earn weekly income for 2 years from delivery services.<br/>
✅ Low maintenance, no fuel costs, and high efficiency.<br/>
✅ EV technology helps reduce carbon emissions and protect the environment.<br/>
✅ Join the green energy revolution while making money!<br/>
        </p>
            <button className="bg-[#2D7CD0] px-[30px] py-[16.5px] text-[18px] font-bold leading-[150%] mt-[50px] rounded-[10px] text-[#FDFDFD]">
          <a href="https://kororyde.com.ng/ev-riders/">  Start investing today</a>
        </button>
        </div>
      </div>
            </div> 

{/* Firm */}
        
<div className="mx-auto max-w-[1402px] flex flex-col md:flex-row px-[20px]  gap-[60px] mt-[50px]">
<div className=" bg-[#2D7CD0] p-[10px] md:p-0 rounded-[10px] w-full">
        <Image src={MakeMoney} alt="" className="h-[200px] w-full rounded-[10px]  object-cover"/>
        <p className="mt-[20px] text-[#FEFEFE] text-[18px] md:text-[25px] font-bold font-[family-name:var(--font-bricolage-grotesque)] px-[20px]">How You Make Money</p>
        <ol className="list-decimal  w-full px-[35px]  font-[var(--font-bricolage-grotesque)] mt-4 md:mt-8  text-[#656565] leading-[150%]">
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Invest in a CNG car or EV bike.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">KoroRYDE assigns your vehicle to verified drivers or delivery riders.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Your vehicle earns money daily from rides and deliveries.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">You receive weekly payouts for 2 years.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Zero management stress – we handle everything while you earn!</li>
</ol>
        </div>

        <div className=" bg-[#2D7CD0] p-[10px] md:p-0 rounded-[10px] w-full">
        <Image src={MakeMoney1} alt="" className="h-[200px] w-full rounded-[10px] object-cover"/>
        <p className="mt-[20px] text-[#FEFEFE] text-[18px] md:text-[25px] font-bold font-[family-name:var(--font-bricolage-grotesque)] px-[20px]">Bonus Perks For Investors</p>
        <ol className="list-decimal  w-full px-[35px]  font-[var(--font-bricolage-grotesque)] mt-4 md:mt-8  text-[#656565] leading-[150%]">
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">VIP Investor status – enjoy priority access to future investments.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Exclusive discounts & offers on additional investments.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Recognition as a transportation innovator & job creator in Nigeria.</li>
</ol>
        </div>



        <div className=" bg-[#2D7CD0] p-[10px] md:p-0 rounded-[10px] pb-[20px] w-full">
        <Image src={MakeMoney3} alt="" className="h-[200px] w-full rounded-[10px] object-cover"/>
        <p className="mt-[20px] text-[#FEFEFE] text-[18px] md:text-[25px] font-bold font-[family-name:var(--font-bricolage-grotesque)] px-[20px] ">Why this is a Smart
        Investment?</p>
        <ol className="list-decimal  w-full px-[35px]  font-[var(--font-bricolage-grotesque)] mt-4 md:mt-8  text-[#656565] leading-[150%]">
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Growing Market: The ride-hailing and delivery sector is expanding rapidly.
  </li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Guaranteed Returns: Structured weekly earnings for 2 years.
  </li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Eco-Friendly Advantage: Contribute to a sustainable transport system.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Hassle-Free Investment: No need to drive or manage operations – we do it for you.</li>
  <li className="text-white text-[13px] md:text-[18px] leading-[150%] font-[var(--font-bricolage-grotesque)]">Massive Market Demand: Thousands of riders and businesses need KoroRYDE daily</li>
</ol>
        </div>
      </div>


<div className="relative bg-[url('/assets/background.webp')] bg-no-repeat bg-cover pt-[100px] pb-[210px] mt-[100px] w-full md:rounded-[10px] max-w-[1153px] mx-auto" >
    <div className="flex gap-[10px] items-center justify-center">
        <Image src={elipse1} alt=""/>
        <Image src={elipse2} alt=""/>
        <Image src={elipse3} alt=""/>
        <Image src={elipse4} alt=""/>

    </div>
    <p className="px-[20px] font-bold text-[#FEFEFE] text-[30px] md:text-[50px] text-center w-fit mx-auto font-[family-name:var(--font-bricolage-grotesque)] leading-[150%] mt-[30px]">
    Join millions of investors today<br/>
    and start earning 
    </p>
    <div className="mx-auto w-fit mt-[50px]">
    <button className="bg-white text-black text-[13px] font-bold leading-[150%] py-[10px] px-[30px] rounded-[10px] mx-auto">Start earning</button>
    </div>
    {/* <img src={background} alt="" className="w-full h-full absolute"/> */}
</div>


    </div>
    <FooterBg />
    <Footer />
    </div>
    </OverallLayout>
}

export default Page