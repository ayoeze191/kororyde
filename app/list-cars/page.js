const { default: Header } = require("../Header")

import Image from "next/image"
import facebook from "./../../public/assets/facebook.webp"
import instagram from "./../../public/assets/instagram.webp"
import linkedln from "./../../public/assets/linkedin.webp"
import twitter from "./../../public/assets/twitter.webp"
import Footer from "../Footer"

const listingCars = [{number: 1, title: "Personal Information - Provide your details to get started:", description: ["Full Name", "Phone Number", "Email Address", "Residential Address", "Government-issued ID"]},
{number: 2, title: "Vehicle Information (Must Be CNG or EV)", description: ["Vehicle Type: (CNG Car / EV Car / EV Bike)", "Vehicle Brand & Mode", "Year of Manufacture", "Plate Number"]},
{number: 3, title: "Required Documents Upload", description: ["Driver’s License", "Vehicle Registration Certificate", "Insurance Document", "Roadworthiness Certificate", "Government-issued ID"]},
]
const page = () => {
    return (
        <div>
                  <div className="font-[family-name:var(--font-bricolage-grotesque)]">
                            <div className="lg:min-h-screen bg-no-repeat bg-cover  lg:pt-[64px]  pt-[60px]   " style={{
                            }}>
                                <div className="px-[20px] lg:px-[112px]">
                                <Header isHomePage={false}/>
                                </div>
                                {/*  */}
                                <div className="mt-[100px]">
                                <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%] px-[20px] md:px-0
            font-[family-name:var(--font-bricolage-grotesque)] text-center 
            ">List Your Cars – Put Your CNG Car, EV Car,<br/> or EV Bike on KoroRYDE & Earn Daily!</p>
                                  <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] px-[20px] md:text-[18px] font-normal leading-[150%]  mt-[40px] mb-[100px] text-center text-[#656565]">
                                  Turn your vehicle into a daily income stream! List your CNG car, EV car, or EV bike<br/>
on KoroRYDE and start earning every day while empowering communities<br/>
with safe, affordable, and eco-friendly transportation.
        </p>
                                </div>

                                <div className="px-[20px] md:px-0 grid grid-cols-1 md:grid-cols-2 mx-auto w-fit gap-[20px] lg:gap-[60px]"> 
        {listingCars.map((step, index) => {return  <div key={step.number} className={`w-full md:w-fit lg:w-[532px] p-[20px] bg-[#F6F6F6] rounded-[10px] flex flex-col gap-[30px] ${
        index === listingCars.length - 1 ? 'md:col-span-2 md:mx-auto' : ''
      }`}>
                <p className="text-[#FEFEFE] text-[30px] md:text-[50px] leading-[150%] font-bold  bg-[#2D7CD0] w-[50px] h-[50px] md:h-[80px] md:w-[80px] rounded-[100px] text-center flex items-center justify-center">{step.number}</p>
                <p className="text-[#010101] font-bold  md:text-[18px] leading-[150%]">
                {step.title}
                </p>
                <div>
                    {step.description.map((lis, index) => { return <li key={index} className="ml-[20px] list-disc  text-[#656565] text-[14px] md:text-[18px] ">
                            {lis}
                        </li>
                    })}
                </div>
                </div>
        })}
        </div>

         <div className="bg-[#133457] rounded-[10px] mb-[100px] max-w-[1258px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] py-[50px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[100px]">
                   <div className="text-[#FEFEFE] w-full font-bold font text-[30px] md:text-[50px] [text-shadow:3px_2px_0px_0px_#2D7CD0]">  
                   Start earning daily
                   with KoroRYDE!
                    </div>
                    <div className="w-full flex flex-col gap-[20px]">
                        <div>
                            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">Email us:</h2>
                            <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">Send your CV to - careers@kororyde.com.ng </h3>
                        </div>
                        <div>
                            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">Contact us:</h2>
                            <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">+234 700 887 5665</h3>
                        </div>
                        <div>
                            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">Visit:</h2>
                            <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)]md:text-[18px]">www.kororyde.com</h3>
                        </div>
                        <div>
                            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">Follow us:</h2>
                            <div className="text-[#FEFEFE] mt-[12.5px] flex items-center gap-[20px] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">
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
    )
}

export default page