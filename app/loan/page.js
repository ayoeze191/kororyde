const { default: Header } = require("../Header");
import React from "react";
import OverallLayout from "../OverallLayout";
import Image from "next/image";
import Footer from "../Footer";
import t1 from "./../../public/assets/t1.png";
import t2 from "./../../public/assets/t2.png";
import t3 from "./../../public/assets/t3.png";
import social from "./../../public/assets/Social.webp";
import facebook from "./../../public/assets/facebook.webp";
import instagram from "./../../public/assets/instagram.webp";
import linkedln from "./../../public/assets/linkedin.webp";
import twitter from "./../../public/assets/twitter.webp";

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
              Switch to CNG & Save Big with KoroRYDE! 
            </p>
            <p className="max-w-[900px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[20px] md:mt-[40px] text-center py-[10px]">
              Are you an e-hailing driver looking to slash your fuel costs and
              boost your earnings? Converting your car to CNG is the best
              decision you’ll ever make! 
            </p>
            <p className="text-center font-bold text-2xl py-[20px]">
              CNG Conversion Costs: ₦1.1M – ₦2.5M (Varies by Car Type)
            </p>
            <p className="max-w-[700px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  md: text-center pb-[0px]">
              We understand that not everyone can afford this upfront—that’s why
              we’re making it happen for 10000 drivers!
            </p>
            <p className="max-w-[700px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  md: text-center pb-[0px]">
              KoroRYDE’s CNG Finance Scheme now offers you a chance to convert
              your car and pay over 12 months, no financial strain, just
              long-term savings!
            </p>
          </div>
          <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
              <div>
                <Image
                  alt=""
                  // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                  src={t1}
                />
              </div>
              <p className="py-[20px] text-[18px] font-[700]">
                Cut your fuel cost significantly
              </p>
            </div>

            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
              <div>
                <Image
                  alt=""
                  // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                  src={t2}
                />
              </div>
              <p className="py-[20px] text-[18px] font-[700]">
                Increase your e-hailing profits
              </p>
            </div>

            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
              <div>
                <Image
                  alt=""
                  // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                  src={t3}
                />
              </div>
              <p className="py-[20px] text-[18px] font-[700]">
                Enjoy a clearner eco-friendly ride
              </p>
            </div>
          </div>



          <div className="bg-[#133457] mb-[100px] max-w-[1258px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] py-[50px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[100px]">
           <div>
            <p className="text-[#FEFEFE] max-w-[500px] w-full font-bold font text-[50px] [text-shadow:3px_2px_0px_0px_#2D7CD0]">
              Limited Slots Available
            </p>
            <p className="text-[#fefefe] max-w-[400px]">Don’t miss this opportunity to transform your earnings.</p>
            </div>


            <div className=" flex flex-col gap-[20px]">
              <div>
                <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  Available in your city:
                </h2>
                <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  55e Adebisi Omotola close, VI behind Zenith HQ
                </h3>
              </div>
              <div>
                <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  Contact us:
                </h2>
                <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  08132448005
                </h3>
              </div>
              <div>
                <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  Email:
                </h2>
                <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  info@kororyde.com
                </h3>
                <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  info@kororyde.com.ng
                </h3>
              </div>
              <div>
                <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  Visit:
                </h2>
                <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  www.kororyde.com
                </h3>
              </div>
              <div>
                <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  Follow us:
                </h2>
                <div className="text-[#FEFEFE] mt-[12.5px] flex items-center gap-[20px] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">
                  <div>
                    <Image src={facebook} alt="" />
                  </div>
                  <div>
                    {" "}
                    <Image src={twitter} alt="" />
                  </div>
                  <div>
                    {" "}
                    <Image src={linkedln} alt="" />
                  </div>
                  <div>
                    <Image src={instagram} alt="" />
                  </div>
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
