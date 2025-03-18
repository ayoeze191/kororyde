const { default: Header } = require("../Header")
import innovation from "./../../public/assets/ai-innovation-01.png"
import career from "./../../public/assets/plant-04.png"
import impact from "./../../public/assets/rocket.png"
import Inclusive from "./../../public/assets/user-group.png"
import Benefits from "./../../public/assets/money-bag-02.png"
import tech from "./../../public/assets/iStock-1146417905-e1585580412998 1.png"
import operation from "./../../public/assets/smiling-portrait-handsome-african-american-600nw-1945399810 1.png"
import marketting from "./../../public/assets/Black-people-workplace 1.png"
import finance from "./../../public/assets/Black-ownedBanks-05a058927d4d4f4cb941b4bc5d65b22a 1.png"
import smilling from "./../../public/assets/smiling-african-american-manager-sitting-600nw-1414700966 1.png"

import social from "./../../public/assets/Social.webp"
import facebook from "./../../public/assets/facebook.webp"
import instagram from "./../../public/assets/instagram.webp"
import linkedln from "./../../public/assets/linkedin.webp"
import twitter from "./../../public/assets/twitter.webp"

import Image from "next/image"
import Footer from "../Footer"


const steps = [{number: innovation, title: "Innovative Environment", description: "Work with cutting-edge technology in the mobility sector."},
{number: career, title: "Career Growth", description: "We provide learning, mentorship, and opportunities to advance."},
{number: impact, title: "Impact-Driven", description: "Make a difference in communities through empowerment and sustainability"},
{number: Inclusive, title: "Diverse & Inclusive", description: "We celebrate creativity, collaboration, and individuality."},
{number: Benefits, title: "Competitive Benefits", description: "Enjoy attractive salaries, flexible work options, and great perks"},
]


const careers = [
    {
        image: tech,
        title: "Tech & Engineering",
        desc: "Software Development, App & Web Development, Data Science, Software Development, App & Web Development, Data Science"
    },
    {
        image: operation,
        title: "Operations & Logistics",
        desc: "Fleet Management, Customer Support, Driver Relations",
    },
    {
        image: marketting,
        title: "Marketing & Sales",
        desc: "Social Media, Growth Marketing, Influencer & Partner Relations",
    },
    {
        image: finance,
        title: "Finance & Investment",
        desc: "Investor Relations, Business Development",
    },
    {
        image: smilling,
        title: "Human Resources",
        desc: "Talent Acquisition, Training & Development",
    },
    
]

const page = () => {
    return <div>
          <div className="font-[family-name:var(--font-bricolage-grotesque)]">
                    <div className="lg:min-h-screen bg-no-repeat bg-cover  lg:pt-[64px]  pt-[60px]   " style={{
                    }}>
                        <div className="px-[20px] lg:px-[112px]">
                        <Header isHomePage={false}/>
                        </div>
                        {/*  */}
                        <div className="mt-[100px]">
                        <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    ">Careers at KoroRYDE – Join the<br/> Future of Mobility!</p>
                          <p className="px-[20px] md:px-0 max-w-[1118px] mx-auto flex flex-col gap-[20px] text-base md:text-[18px] font-normal leading-[150%]  mt-[40px] text-center text-[#656565]">
                          At KoroRYDE, we are building the future of smart transportation, delivery, and sustainable mobility,<br/>
                          and we want YOU to be part of this exciting journey!
</p>
                        </div>
                        <div className="my-[50px] mx-auto">
                        <p className="text-[#010101] text-[18px] lg:text-[25px] font-bold leading-[150%] text-center ">Why Work With Us</p>
                        <p className="text-[14px] md:text-[18px] mx-auto text-center text-[#656565] mt-[20px] leading-[150%] px-[20px] md:px-0">
                            Joining KoroRYDE means being part of an innovative, fast-growing company that is<br/>
                            transforming ride-hailing, delivery services, and eco-friendly transportation across Africa
                        </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full gap-[20px] lg:gap-[60px] lg:max-w-[1140px] px-[20px]"> 
        {steps.map((step, index) => {return  <div key={index} className={`w-full md:w-fit lg:w-[340px] p-[20px] bg-[#F6F6F6] rounded-[10px] flex flex-col gap-[30px]
            ${
                index === steps.length - 2 ? 'lg:col-span-1 lg:col-start-2' : ''
              } ${index === steps.length - 1 ? 'lg:col-span-1 lg:col-start-3' : ''}
            `}>
                <p className="text-[#FEFEFE] text-[50px] leading-[150%] font-bold  bg-[#EAF2FA] h-[80px] w-[80px] rounded-[100px] text-center flex items-center justify-center"><Image src={step.number} alt="" /></p>
                <p className="text-[#010101] font-bold text-sm md:text-base lg:text-[18px] leading-[150%]">
                {step.title}
                </p>
                <div>
 <li key={index} className="ml-[20px] list-disc  text-[#656565] text-sm md:text-base lg:text-[18px] ">
                            {step.description}
                        </li>

                </div>
                </div>
        })}
        </div>

        {/* Career oppurtuinity */}
        <div className="mx-auto lg:max-w-[1140px] px-[20px]">
     
        <div className="my-[50px] ">
                        <p className="text-[#010101] text-[18px] lg:text-[25px] font-bold leading-[150%] text-center ">Career Oppurtunities</p>
                        <p className="text-[14px] md:text-[18px] mx-auto text-center text-[#656565] mt-[20px] leading-[150%] px-[20px] md:px-0">
                        We’re always looking for talented and passionate individuals to<br/>
                        join our team! Explore exciting roles in:
                        </p>
                        </div>
                <div className="grid  grid-cols-1 gap-[20px] md:gap-[40px] md:grid-cols-2 lg:grid-cols-3 mx-auto lg:gap-[60px]">
                    {careers.map((career, index) => {return <div className="bg-[#F6F6F6] p-[20px] flex flex-col gap-[20px] rounded-[10px]" key={index}>
                        <div className="rounded-[10px] w-full"><Image src={career.image} alt="" className="rounded-[10px] w-full"/></div>
                        <div>
                        <p className="text-[#010101] text-[14px] md:text-base lg:text-[18px] font-bold">{career.title}</p>
                        <p className="text-[#656565] text-[14px] md:text-base lg:text-[18px] font-normal mt-[20px]">{career.desc}</p>
                        </div>

                    </div>})}
                </div>

        </div>

        {/*  */}

          <div className="bg-[#133457] rounded-[10px] mb-[100px] max-w-[1258px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] py-[50px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[200px]">
           <div> <p className="text-[#FEFEFE] w-full font-bold font text-[30px] md:text-[50px] [text-shadow:3px_2px_0px_0px_#2D7CD0]">
          Be part of the movement
            </p>
            <p className=" text-[14px] md:text-[18px] leading-[150%] text-[#FEFEFE] mt-[20px]">
            At KoroRYDE, you’re not just an employee, 
you’re a changemaker shaping the future of
mobility. Whether you want to drive, deliver, 
innovate, or invest, there’s a place for you here!
            </p>
            </div>
            <div className="w-full flex flex-col gap-[20px]">
                <div>
                    <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">Email us:</h2>
                    <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">Send your CV to - careers@kororyde.com.ng </h3>
                </div>
                <div>
                    <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">Contact us:</h2>
                    <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">+234 700 887 5665</h3>
                </div>
                <div>
                    <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">Visit:</h2>
                    <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">www.kororyde.com</h3>
                </div>
                <div>
                    <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[18px]">Follow us:</h2>
                    <div className="text-[#FEFEFE] mt-[12.5px] flex items-center gap-[20px] font-normal leading-[150%] text-[13px] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px]">
                        <div><Image src={facebook} alt=""/></div>
                       <div> <Image src={twitter} alt=""/></div>
                       <div> <Image src={linkedln} alt=""/></div>
                        <div><Image src={instagram} alt=""/></div>
                    </div>
                </div>
            </div>
            </div>

        <div>
            <Footer />
        </div>

        <div>
            
        </div>

                        </div>
                        </div>
    </div>
}

export default page