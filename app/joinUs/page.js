import Image from "next/image"
import DriverRequirement from "./../../public/assets/DriverRequirement.png"
const { default: Header } = require("../Header")
import rider from "./../../public/assets/rider.png"
import facebook from "./../../public/assets/facebook.webp"
import instagram from "./../../public/assets/instagram.webp"
import linkedln from "./../../public/assets/linkedin.webp"
import twitter from "./../../public/assets/twitter.webp"
import Footer from "../Footer"
const Page = () => {
    return     <div>
                      <div className="font-[family-name:var(--font-bricolage-grotesque)]">
                                <div className="lg:min-h-screen bg-no-repeat bg-cover  lg:pt-[64px]  pt-[60px]   " style={{
                                }}>
                                    <div className="px-[20px] lg:px-[112px]">
                                    <Header isHomePage={false}/>
                                    </div>
                                    {/*  */}
                                    <div className="mt-[100px]">
                                    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
                font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
                ">Join KoroRYDE Today!</p>
                                      <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  mt-[40px] mb-[100px] text-center text-[#656565]">
                                      Are you ready to earn, grow, and be part of a transportation revolution? Whether<br/>
you want to drive and make money on your schedule or ride with ease and<br/>
convenience, KoroRYDE is the platform for you!
            </p>
                                    </div>
                                    <div>
                                    <p className="text-[25px] leading-[150%]  font-[family-name:var(--font-bricolage-grotesque)] font-bold text-center text-[#010101]
">Investment Packages & Earning Potential
      KoroRyde</p>
        <p className="mt-[20px] md:mt-[40px] px-[20px] text-center max-w-[1118px] mx-auto text-[#656565]">
      KoroRYDE is transforming transportation in Nigeria by providing eco-friendly ride-hailing and delivery services.
As an investor, you have a unique opportunity to earn weekly income for 2 years while helping us build
a sustainable, efficient, and profitable transport network.
      </p>

      <div className="mx-auto px-[20px] xl:px-0 max-w-[1291px] flex items-center flex-col lg:flex-row gap-[60px] mt-[50px]">

                                <div className="h-full w-full lg:w-[50%]"><Image src={DriverRequirement} alt="" className="w-full h-full"/></div>
                                <div className="flex flex-col gap-[50px] w-full lg:w-[50%]">
                                <div>
                                    <p className="text-[#010101] text-[25px] font-bold">Why Drive with KoroRYDE?</p>
                                    <p className="mt-[30px] text-[18px] leading-[150%] text-[#656565]">
                                    ✅ Flexible Earnings – Drive on your schedule and earn more.<br/>
✅ Incentives & Bonuses – Enjoy competitive commissions, referral rewards, and performance bonuses.<br/>
✅ Easy Sign-up – Simple onboarding process with fast approvals.<br/>
✅ Support & Training – Get ongoing support, safety training, and customer service assistance.<br/>
✅ Own Your Vehicle – Lease or buy CNG cars & EV bikes through our investment program<br/>
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[#010101] text-[25px] font-bold">Driver Requirement</p>
                                    <p className="mt-[30px] text-[18px] leading-[150%] text-[#656565]">
                                    ✔️ Valid driver’s license<br/>
✔️ Vehicle documents (insurance, roadworthiness, etc.)<br/>
✔️ Android or iOS smartphone<br/>
✔️ Completed background check & training<br/>
                                    </p>
                                </div>
                                <div>
                                    <button className="px-[30px] py-[16.5px] bg-[#2D7CD0] text-[#FDFDFD] font-bold text-[18px] rounded-[10px]">
                                        Become a Kororyde driver today!
                                    </button>
                                </div>
                                </div>
      </div>
      <div className="mt-[100px]">
      <p className="text-[25px] leading-[150%]  font-[family-name:var(--font-bricolage-grotesque)] font-bold text-center text-[#010101]
">Become a KoroRYDE Delivery Rider</p>
        <p className="mt-[20px] md:mt-[40px] px-[20px] text-center max-w-[1118px] mx-auto text-[#656565]">
        Make money delivering packages, food, and groceries across the city! With KoroRYDE Delivery,<br/>
        you can work full-time or part-time while earning great rewards.
      </p>
      </div>
                                <div className="md:flex mx-auto px-[20px] lg:px-0  mt-[50px] gap-[60px] w-full max-w-[1291px] mb-[100px]">
                                 <div className="mb-[20px] md:mb-0">
                                    <div>
                                        <p className="text-[25px] leading-[150%] font-bold text-[#010101]">Why become a KoroRYDE delivery rider?</p>
                                        <p className="mt-[30px] text-[18px] leading-[150%] text-[#656565]">
                                        ✅ High Demand – More deliveries, more money!<br/>
✅ Flexible Work – Accept orders when convenient for you.<br/>
✅ Instant Payouts – Withdraw earnings quickly and easily.<br/>
✅ EV & CNG Bike Options – Get access to eco-friendly, cost-effective bikes.<br/>
✅ Bonuses & Rewards – Earn extra for peak-hour deliveries and referrals.<br/>
                                        </p>

                                    </div>
                                    <div>
                                        <p className="text-[25px] leading-[150%] font-bold text-[#010101] mt-[50px]">Rider Requirement</p>
                                        <p className="mt-[30px] text-[18px] leading-[150%] text-[#656565] ">
                                        ✅ High Demand – More deliveries, more money!<br/>
✅ Flexible Work – Accept orders when convenient for you.<br/>
✅ Instant Payouts – Withdraw earnings quickly and easily.<br/>
✅ EV & CNG Bike Options – Get access to eco-friendly, cost-effective bikes.<br/>
✅ Bonuses & Rewards – Earn extra for peak-hour deliveries and referrals.<br/>
                                        </p>
                                        
                                    </div>
                                    <div>
                                        <button className="px-[30px] py-[16.5px] bg-[#2D7CD0] text-[#FDFDFD] font-bold text-[18px] rounded-[10px] mt-[50px]">Become a Kororyde delivery rider today!</button>
                                    </div>
                                    </div> 

                                  
                                    <div> <Image src={rider} alt=""/></div>
                                </div>


                                <div className="footerBg py-[140px] px-[20px] lg:px-0">
<p className="text-white font-bold text-[18px] md:text-[25px] leading-[150%] text-center ">Fill out the form below to start your journey with KoroRYDE<br/>
as a driver/rider</p>
<div className="mt-[50px] flex flex-col gap-[20px] md:w-[700px] mx-auto bg-[#FEFEFE] px-[20px] md:px-[50px] py-[50px] rounded-[10px]">
    <div className="py-[11.5px] px-[30.5px] border-[1px] w-full rounded-[10px] border-[#656565] "><input type="text" placeholder="Full Name:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] w-full rounded-[10px] border-[#656565] "><input type="email" placeholder="Email Address:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] w-full rounded-[10px] border-[#656565] "><input type="number" placeholder="Phone Number:" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] w-full rounded-[10px] border-[#656565] "><input type="number" placeholder="Home Address" className="outline-0 border-0 w-full"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] w-full rounded-[10px] border-[#656565] "><input type="number" placeholder="Emergency Contact" className="outline-0 border-0 w-full"/></div>

    <button className="bg-[#2D7CD0] py-[16.5px]  rounded-[10px] text-[#FDFDFD] text-[18px] font-bold mt-[30px] mx-auto w-full">Submit</button>
</div>
<p className="mt-[20px] flex items-center justify-center text-[14px] px-[10px] md:px-[20px] md:text-[16px] leading-[150%] text-[#FEFEFE] font-bold">Drive, deliver, and earn with KoroRYDE – your road to financial freedom starts here!</p>
        </div>

         <div className="bg-[#133457] rounded-[10px] mb-[100px] max-w-[1258px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] py-[50px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[100px]">
                          <div className="text-[#FEFEFE] w-full font-bold font  text-[30px] md:text-[50px]  [text-shadow:3px_2px_0px_0px_#2D7CD0]">  
                          Join The Movement,
Submit Your
Application Today!
                           </div>
                           <div className="w-full flex flex-col gap-[20px]">
                               <div>
                                   <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Email us:</h2>
                                   <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Send your CV to - careers@kororyde.com.ng </h3>
                               </div>
                               <div>
                                   <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Contact us:</h2>
                                   <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">+234 700 887 5665</h3>
                               </div>
                               <div>
                                   <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Visit:</h2>
                                   <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">www.kororyde.com</h3>
                               </div>
                               <div>
                                   <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Follow us:</h2>
                                   <div className="text-[#FEFEFE] mt-[12.5px] flex items-center gap-[20px] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                                       <div><Image src={facebook} alt=""/></div>
                                      <div> <Image src={twitter} alt=""/></div>
                                      <div> <Image src={linkedln} alt=""/></div>
                                       <div><Image src={instagram} alt=""/></div>
                                   </div>
                               </div>
                           </div>
                           </div>

<Footer />
                                    </div>
                                </div>
                                </div>
    </div>
}


export default Page