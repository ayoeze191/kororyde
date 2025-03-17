const { default: OverallLayout } = require("@/app/OverallLayout")
const { default: Header } = require("../../Header")
import Image from "next/image"
import KoroRYDEInvestor from "./../../../public/assets/cng-investor.png"

import KoroRYDEInvestor2 from "./../../../public/assets/cng-investor2.png"
import starter from "./../../../public/assets/starter.png"
import premium from "./../../../public/assets/Premium.png" 
import logo from "./../../../public/assets/logo.webp"
const page = () => {
    return <OverallLayout>
        <div className="font-[family-name:var(--font-bricolage-grotesque)]">
    <div className="lg:min-h-screen bg-no-repeat bg-cover  lg:pt-[64px]  pt-[60px]   " style={{
    }}>
        <div className="px-[20px] lg:px-[112px]">
        <Header/>
        </div>
        <p className="text-[#2D7CD0] text-[30px] lg:text-[50px] font-bold pt-[50px]  mx-auto lg:pt-[100px]  lg:w-full text-center font-[family-name:var(--font-bricolage-grotesque)] [text-shadow:3px_2px_0px_#252B42]">
        <span className="text-red-500">Few Slots Left</span> - Convert To CNG & SAVE Over
        <br/> 500000 Monthly on <span className="font-bold underline">Fuel | Safe & Secure</span>
        </p>
        <div className="mt-[100px] mx-auto px-[20px] sm:px-[30px] lg:px-[140px] flex-col md:flex-row flex items-center gap-[68px]">
            <div className="md:w-1/2 w-full"><Image src={KoroRYDEInvestor} className="w-full" alt=""/></div>
            <p className="w-full md:w-1/2">
                <p className="font-bold text-center text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)]">Switch to CNG & Save Big with KoroRYDE!
</p>
<p className="text-[18px] font-[family-name:var(--font-bricolage-grotesque)] text-center text-[#656565] mt-[20px]">
Are you an e-hailing driver looking to slash your fuel costs and boost your earnings? Converting your car to CNG is the best decision you’ll ever make!
<br/>
CNG Conversion Costs: ₦1.2M – ₦2.5M (Varies by Car Type)<br/>
We understand that not everyone can afford this upfront—that’s why we’re making it happen for 500 drivers!<br/>
📢 KoroRYDE’s CNG Finance Scheme now offers you a chance to convert your car and pay over 12 months—no financial strain, just long-term savings!


</p>
            </p>
        </div>
        <div className="mt-[100px] mx-auto px-[20px] sm:px-[30px] lg:px-[140px]">
            <p className="text-[#010101] text-[25px] font-bold leading-[150%] text-center">Our Investment Plans</p>
            <p className="text-[18px] text-[#656565] text-center mt-[20px]">You can choose to invest in 2 of our investment plans</p>
                <div className="flex gap-[20px] md:gap-[30px] lg:gap-[60px] flex-col md:flex-row mx-auto w-fit mt-[50px]">
                <div className=" bg-[#CD7F32] rounded-[10px] items-center text-[#FEFEFE] flex flex-col h-[300px] p-[20px] w-full md:w-fit">
                <p className="text-[25px] font-bold leading-[150%] text-center">What is the CNG Finance Scheme?</p>
                <ul className="text-center mt-[20px] ">
                        {/* <li className="text-[18px] font-normal leading-[150%]">Invest ₦2.5</li> */}
                        <li>	

It’s a scheme that gives you access to finance to convert your car to CNG immediately. With the high cot of fuel, it’s no doubt the cost of running your car is extremely eating deep into your profit; the way to go is CNG, which is more secured, safer and easy to maintain.
</li>
                </ul>
            </div>

            <div className=" bg-[#B59900] rounded-[10px] items-center text-[#FEFEFE] flex flex-col h-[300px] p-[20px] w-full md:w-fit">
                <p className="text-[25px] font-bold leading-[150%]">How much do I pay back?</p>
                <ul className="text-center mt-[20px] ">
                        {/* <li className="text-[18px] font-normal leading-[150%]">Invest ₦2.5</li> */}
                        <li>	

Depending on the cost based on your car model; if it cost say N1.2m; you’re expected to pay N40,000 weekly for 12months. With 60-70% savings on fuel, you’ll be saving an extra 100-120k weekly from which you pay your 40k weekly remittance; that’s an extra 60-80k take-home weekly.
</li>
                </ul>
            </div>
            <div className=" bg-[#2ec553] rounded-[10px] items-center text-[#FEFEFE] flex flex-col h-[300px] p-[20px] w-full md:w-fit">
                <p className="text-[25px] font-bold leading-[150%] text-center">When will the conversion be done?</p>
                <ul className="text-center mt-[20px] ">
                        {/* <li className="text-[18px] font-normal leading-[150%]">Invest ₦2.5</li> */}
                        <li>	

                        Once your initial deposit is made and every other requirements have been met, conversion is done in 1-3 days. Click HERE to begin.
</li>
                </ul>
            </div>
            </div>
        </div>


        <div className="mt-[100px] mx-auto px-[20px] sm:px-[30px] lg:px-[140px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[68px] mb-[100px]">
            <div className="w-full md:w-1/2 order-2"><Image src={KoroRYDEInvestor2} className="w-full" alt=""/></div>
            <p className="w-full md:w-1/2">
                <p className="font-bold text-center text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)]">🌍 Why Convert to CNG?

</p>
<p className="text-[18px] font-[family-name:var(--font-bricolage-grotesque)] text-center text-[#656565] mt-[20px]">
✅ Cut your fuel costs significantly<br/>
✅ Increase your e-hailing profits<br/>
✅ Enjoy a cleaner, eco-friendly ride<br/>
<p className="text-[#C20000] mt-[20px] font-bold">
🚀 Limited slots available! Don’t miss this opportunity to transform your earnings.
</p>
</p>
<div className="w-full flex justify-center flex-col items-center">
<button className="bg-[#2D7CD0] px-[51px] py-[16.5px] text-white rounded-[10px] mt-[50px] mx-auto">
Secure your spot now!
</button>
<p className="text-[18px] mt-[50px]">
    Start earning <span className="text-[#2D7CD0] ">5% Monthly</span> Interest Pay <span>In 12 months</span>
</p>
</div>
            </p>
        </div>
        <div className="footerBg py-[140px]">
<p className="text-white font-bold text-[25px] leading-[150%] text-center">Fill the form below to get access to the brochure
<br/>detailing the entire scheme.</p>
<div className="mt-[50px] flex flex-col gap-[20px] md:w-[874px] mx-auto bg-[#FEFEFE] px-[50px] py-[50px] rounded-[10px]">
    <div className="py-[11.5px] px-[30.5px] border-[1px] w-full rounded-[10px] border-[#656565] "><input type="text" placeholder="Full Name:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565] "><input type="email" placeholder="Email Address:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565] "><input type="number" placeholder="Phone Number:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565] "><input type="number" placeholder="Whatsapp Number:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565] "><input type="number" placeholder="Car Brand" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565] "><input type="text" placeholder="Model/Year" className="outline-0 border-0 w-full"/></div>


  <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]">
    <select className="outline-0 border-0 w-full bg-transparent text-[#656565]">
    <option value="" disabled selected className="w-full">How Soon Are You Ready?
    </option>
    <option value="10-E-Bikes">Immediately</option>
    <option value=">10">Next Week</option>
    <option value=">10">Next Week</option>

  </select>
  </div>
  <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565] "><input type="number" placeholder="Referral Phone Number (Crosscheck to be sure this is correct)
" className="outline-0 border-0 w-full"/></div>

    <button className="bg-[#2D7CD0] py-[16.5px]  rounded-[10px] text-[#FDFDFD] text-[18px] font-bold mt-[30px] mx-auto w-full">Download bronchure</button>
</div>
<p className="mt-[20px] flex items-center justify-center text-[14px] px-[10px] md:px-[20px] md:text-[16px] leading-[150%]"><span className="text-[#C20000] font-bold">NB:</span> Kindly note that slots are assigned on FCFS basis; once we get to the appointed number, we will stop assigning slots.</p>
        </div>
        
        <div className="bg-[#010101] flex flex-col items-center text-white ">
            <p className="max-w-[1258px] text-center text-base sm:text-[18px]  md:text-[25px] py-[77px] font-normal px-[20px]">KoroRYDE is a next-generation ride-hailing and delivery platform designed to offer safe,
efficient, and sustainable urban mobility solutions. Whether you need a ride to your destination or a reliable
delivery service for your goods, we’ve got you covered.</p>
        <div className=" pb-[77px]">
<Image src={logo} alt="" />
        </div>
        </div>
        </div>
        </div>
        </OverallLayout>
}

export default page