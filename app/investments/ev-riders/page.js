const { default: OverallLayout } = require("@/app/OverallLayout")
const { default: Header } = require("../../Header")
import Image from "next/image"
import KoroRYDEInvestor from "./../../../public/assets/evriders.png"
import KoroRYDEInvestor2 from "./../../../public/assets/evriders2.png"
import starter from "./../../../public/assets/starter.png"
import premium from "./../../../public/assets/Premium.png" 
import logo from "./../../../public/assets/logo.webp"
const page = () => {
    return <OverallLayout>
        <div className="font-[family-name:var(--font-bricolage-grotesque)]">
    <div className="lg:min-h-screen bg-no-repeat bg-cover lg:px-[112px] lg:py-[64px]  pt-[60px]   " style={{
    }}>
        <div className="px-[20px] ">
        <Header/>
        </div>
        <p className="text-[#2D7CD0] text-[30px] lg:text-[50px] font-bold pt-[50px]  mx-auto lg:pt-[100px]  lg:w-full text-center font-[family-name:var(--font-bricolage-grotesque)] [text-shadow:3px_2px_0px_#252B42]">
        Get Your Own EV Bike & Pay in Easy
        <br/>Installments! 🚀🌍
        </p>
        <div className="mt-[100px] mx-auto px-[20px] sm:px-[30px] lg:px-[140px] flex-col md:flex-row flex items-center gap-[68px]">
            <div className="md:w-1/2 w-full"><Image src={KoroRYDEInvestor} className="w-full" alt=""/></div>
            <p className="w-full md:w-1/2">
                <p className="font-bold text-center text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)]">Why You Need To Invest in KoroRYDE’s<br/>
EV Bike Initiative?
</p>
<p className="text-[18px] font-[family-name:var(--font-bricolage-grotesque)] text-center text-[#656565] mt-[20px]">
KoroRYDE is giving e-hailing riders and delivery partners the opportunity of a lifetime – own an Electric Bike (EV Bike) and pay in easy installments over 12-24 months!
<br/>
With fuel prices skyrocketing and maintenance costs increasing, switching to an eco-friendly EV bike means huge savings and higher earnings! 🚀
</p>
            </p>
        </div>
        <div className="mt-[100px] mx-auto px-[20px] sm:px-[30px] lg:px-[140px]">
            <p className="text-[#010101] text-[25px] font-bold leading-[150%] text-center">Our Investment Plans</p>
            <p className="text-[18px] text-[#656565] text-center mt-[20px]">You can choose to invest in 2 of our investment plans</p>
                <div className="flex gap-[20px] md:gap-[30px] lg:gap-[60px] flex-col md:flex-row mx-auto w-fit mt-[50px]">
                <div className=" bg-[#CD7F32] rounded-[10px] items-center text-[#FEFEFE] flex flex-col py-[117px] md:px-[134px] w-full md:w-fit">
                <p className="text-[25px] font-bold leading-[150%]">Starter Plan</p>
                <ul className="text-center mt-[20px] ">
                        <li className="text-[18px] font-normal leading-[150%]">Invest ₦2.5</li>
                        <li>Watch it grow to ₦4M in 24 months!</li>
                </ul>
            </div>

            <div className=" bg-[#B59900] rounded-[10px] items-center text-[#FEFEFE] flex flex-col py-[117px] px-[134px] w-full md:w-fit">
                <p className="text-[25px] font-bold leading-[150%]">Starter Plan</p>
                <ul className="text-center mt-[20px] ">
                        <li className="text-[18px] font-normal leading-[150%]">Invest ₦2.5</li>
                        <li>Watch it grow to ₦4M in 24 months!</li>
                </ul>
            </div>
            </div>
        </div>


        <div className="mt-[100px] mx-auto px-[20px] sm:px-[30px] lg:px-[140px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[68px] mb-[100px]">
            <div className="w-full md:w-1/2 order-2"><Image src={KoroRYDEInvestor2} className="w-full" alt=""/></div>
            <p className="w-full md:w-1/2">
                <p className="font-bold text-center text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)]">⚡ Why Choose an EV Bike on KoroRYDE?

</p>
<p className="text-[18px] font-[family-name:var(--font-bricolage-grotesque)] text-center text-[#656565] mt-[20px]">
✅ Zero Fuel Cost – Save BIG as you drive
✅ Flexible Payment Plans – Own your bike without financial stress
✅ High Earnings Potential – Ride, earn, and enjoy more profits
✅ Durable & Low Maintenance – Designed for long-term use
✅ Guaranteed Access to KoroRYDE Platform – More riders, more trips, more income!
<p className="text-[#C20000] mt-[20px] font-bold">
Act Now! Limited slots available.
</p>
</p>
<div className="w-full flex justify-center flex-col items-center">
<button className="bg-[#2D7CD0] px-[51px] py-[16.5px] text-white rounded-[10px] mt-[50px] mx-auto">
Secure your spot now!
</button>
<p className="text-[18px] mt-[50px]">
    Start earning <span className="text-[#2D7CD0] ">#41600</span> for <span>24 months</span>
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
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]">
  <select className="outline-0 border-0 w-full bg-transparent text-[#656565]">
    <option value="" disabled selected className="w-full">Are you interested in investing in 1 or more E-bikes?</option>
    <option value="1E-Bikes">1 E-Bikes</option>
    <option value="2E-Bikes">2 E-Bikes</option>
    <option value="5E-Bikes">5 E-Bikes</option>
    <option value="10-E-Bikes">10 E-Bikes</option>
    <option value=">10">More than 10 E-bikes</option>
  </select>
</div>
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