const { default: Header } = require("../Header");
import React from "react";
import OverallLayout from "../OverallLayout";
import d1 from "../../public/assets/d1.png";
import d2 from "../../public/assets/d2.png";
import Image from "next/image";
import Footer from "../Footer";

const page = () => {
  return (
    <OverallLayout>
      <div className="">
        <div
          className="md:min-h-screen bg-no-repeat bg-cover  md:py-[64px]  py-[60px]  "
          style={{}}
        >
          <div className="px-[20px] lg:px-[112px]   ">
            <Header isHomePage={false} />
          </div>
          <div className="mt-[50px] py-[22px] px-[20px] md:px-0 md:py-[50px]">
            <p
              className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
font-[family-name:var(--font-bricolage-grotesque)] text-center 
"
            >
              Join KoroRYDE Today!
            </p>
            <p className="max-w-[700px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[20px] md:mt-[40px] text-center py-[50px]">
              Are you ready to earn, grow, and be part of a transportation
              revolution? Whether you want to drive and make money on your
              schedule or ride with ease and convenience, KoroRYDE is the
              platform for you!
            </p>
            <p className="text-center font-bold text-2xl">
              Become a KoroRYDE Driver
            </p>
            <p className="max-w-[700px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[20px] md:mt-[20px] text-center pb-[0px]">
              Earn a steady income while providing safe and reliable rides or
              deliveries to customers. Drive with KoroRYDE and enjoy flexible
              work, great incentives, and an opportunity to be your own boss!
            </p>
          </div>

          <div className="max-w-[1291px] mx-auto mt-[50px] md:mt-[20px] flex flex-col gap-[60px] px-[20px]">
            <div className="flex items-center flex-col md:flex-row  gap-[20px] md:gap-[60px]">
              <div
                className={` w-full md:w-[50%]  h-[500px]  rounded-[10px]`}
              >
                <Image
                  alt=""
                  className=" rounded-[10px] w-full h-full object-cover"
                  src={d1}
                />
              </div>

              <div className={`w-full md:w-[50%] `}>
                <div>
                  <p className="text-[#010101]  text-[18px] md:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-[700]">
                    Why Drive with KoroRYDE?
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Flexible Earnings – Drive on your schedule and earn more.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Incentives & Bonuses – Enjoy competitive commissions,
                    referral rewards, and performance bonuses.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Easy Sign-up – Simple onboarding process with fast
                    approvals.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Support & Training – Get ongoing support, safety
                    training, and customer service assistance.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Own Your Vehicle – Lease or buy CNG cars & EV bikes
                    through our investment program
                  </p>
                </div>

                <div className="mt-[50px]">
                  <p className="text-[#010101]  text-[18px] md:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-[700]">
                    Driver Requirements:
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Valid driver’s license
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Vehicle documents (insurance, roadworthiness, etc.)
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Android or iOS smartphone
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Completed background check & training
                  </p>
                </div>

                <button className="mt-[20px] md:mt-[20px] text-[#FDFDFD] bg-[#2D7CD0] text-[13px] md:text-[20px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px]  md:py-[16.5px]">
                  Become a KoroRYDE driver today!
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[50px] py-[22px] px-[20px] md:px-0 md:py-[50px]">
            <p className="text-center font-bold text-2xl">
              Become a KoroRYDE Delivery Rider
            </p>
            <p className="max-w-[700px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[20px] md:mt-[20px] text-center pb-[0px]">
              Make money delivering packages, food, and groceries across the
              city! With KoroRYDE Delivery, you can work full-time or part-time
              while earning great rewards.
            </p>
          </div>

          <div className="max-w-[1291px] mx-auto mt-[50px] md:mt-[20px] flex flex-col gap-[60px] px-[20px]">
            <div className="flex items-center flex-col md:flex-row-reverse gap-[20px] md:gap-[60px]">
              <div
                className={` w-full md:w-[50%]  h-[500px]  rounded-[10px]`}
              >
                <Image
                  alt=""
                  className=" rounded-[10px] w-full h-full object-cover"
                  src={d2}
                />
              </div>

              <div className={`w-full md:w-[50%] `}>
                <div>
                  <p className="text-[#010101]  text-[18px] md:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-[700]">
                    Why Drive with KoroRYDE?
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ High Demand – More deliveries, more money!
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Flexible Work – Accept orders when convenient for you.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Instant Payouts – Withdraw earnings quickly and easily.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ EV & CNG Bike Options – Get access to eco-friendly,
                    cost-effective bikes.
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✅ Bonuses & Rewards – Earn extra for peak-hour deliveries
                    and referrals.
                  </p>
                </div>

                <div className="mt-[50px]">
                  <p className="text-[#010101]  text-[18px] md:text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] font-[700]">
                    Rider Requirements:
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Valid government-issued ID
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Smartphone with internet access
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Basic knowledge of city routes
                  </p>
                  <p className="text-[#656565] text-[18px] font-[500] md:text-[18px] mt-[10px] md:mt-[10px] font-[family-name:var(--font-bricolage-grotesque)]">
                    ✔️ Commitment to safety & professionalism
                  </p>
                </div>

                <button className="mt-[20px] md:mt-[20px] text-[#FDFDFD] bg-[#2D7CD0] text-[13px] md:text-[20px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px]  md:py-[16.5px]">
                  Become a KoroRYDE delivery rider today!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#3C8CE7]  to-[#00EAFF]  w-full mb-[50px] py-[70px]">
          <p className="text-center text-white text-[20px] font-[700] max-w-[600px] m-[auto] pb-[30px]">
            Fill out the form below to start your journey with koroRYDE as a
            driver/rider
          </p>

          <div className="flex justify-center">
            <div className="bg-white rounded-[10px]  py-[20px] px-[30px] w-[500px]">
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Home Address"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Emergency Contact"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <button className="mt-[20px] md:mt-[50px] text-[#FDFDFD] bg-[#2D7CD0] text-[13px] md:text-[20px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px]  md:py-[16.5px] w-full">
                Submit
              </button>
            </div>
          </div>
          <p className="text-[15px] text-[#FEFEFE] text-center font-[700]">
            Drive, deliver and earn with koroRYDE - your road to financial
            freedom starts here!
          </p>
        </div>

        <div className="mt-[50px] py-[22px] px-[20px] md:px-0 md:py-[50px]">
          <p className="text-center font-[700] text-[50px] max-w-[1000px] m-[auto]">
            List Your Cars – Put Your CNG Car, EV Car, or EV Bike on KoroRYDE &
            Earn Daily!
          </p>
          <p className="max-w-[700px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[20px] md:mt-[20px] text-center pb-[0px]">
            Turn your vehicle into a daily income stream! List your CNG car, EV
            car, or EV bike on KoroRYDE and start earning every day while
            empowering communities with safe, affordable, and eco-friendly
            transportation.
          </p>
        </div>


        <div className="flex justify-center">
        <div className="bg-[#F6F6F6]  mb-[50px] py-[70px] px-[50px]">
          <div className="my-[20px] flex gap-10">
            <div className="flex items-center gap-2">
              <p className="text-[40px] font-[700] bg-[#2D7CD0] rounded-[50%] text-white py-[5px] px-[20px] w-fit">1</p>
              <div className="text-[#2D7CD0]">
                <p className="font-[600]">Personal Information</p>
                <p>provide your details to get started</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[40px] font-[700] bg-[#E6E6E6] rounded-[50%] text-black py-[5px] px-[20px] w-fit">2</p>
              <div className="">
                <p className="font-[600]">Vehicle Information</p>
                <p>(Must be CNG or EV)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[40px] font-[700] bg-[#E6E6E6] rounded-[50%] text-black py-[5px] px-[20px] w-fit">3</p>
              <div className="">
                <p className="font-[600]">Required documents upload</p>
                
              </div>
            </div>
          </div>
          

          <div className="flex justify-center mt-[50px]">
            <div className="bg-white rounded-[10px]  py-[20px] px-[30px] w-[500px]">
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Email Address"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Phone Number"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Home Address"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <input
                type="text"
                placeholder="Government Issued Id"
                style={{
                  width: "100%",
                  border: "1px solid #656565",
                  padding: "0px 10px",
                  outline: "none",
                  borderRadius: "10px",
                  marginTop: "20px",
                  height: "40px",
                }}
              />
              <div className="flex items-center gap-10">

              
              <button className="mt-[20px] md:mt-[50px] text-black bg-transparent text-[13px] md:text-[20px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px] md:py-[16.5px] w-full border border-[#656565]-300 hover:bg-black hover:text-white transition-colors cursor-pointer">
                Back
              </button>
              <button className="mt-[20px] md:mt-[50px] text-[#FDFDFD] bg-[#2D7CD0] text-[13px] md:text-[20px] font-bold leading-[150%] rounded-[10px] px-[20px] md:px-[30px] py-[10px]  md:py-[16.5px] w-full cursor-pointer">
              Next
              </button>
              
              </div>
            </div>
          </div>
          
        </div>
        </div>
        
        <Footer />
      </div>
    </OverallLayout>
  );
};

export default page;
