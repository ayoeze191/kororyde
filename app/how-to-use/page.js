const { default: Header } = require("../Header")
import Image from "next/image"
import stepsImage from "./../../public/assets/steps.png"
import Footer from "../Footer"

const steps = [{number: 1, title: "Open the App & Enter Your Destination", description: ["Open the KoroRYDE app.", "In the “Where to?” box, enter your destination.", "View ride options, including economy, premium, or carpooling with details on price and estimated drop-off time.", "Choose your preferred ride option and confirm your pickup."]},
{number: 2, title: "Get Matched with a Driver", description: ["A nearby KoroRYDE driver will receive and accept your request.", "You’ll be notified once the driver is close to your location", "Track your driver’s location in real-time on the app."]},
{number: 3, title: "Enjoy Your Ride", description: ["Verify the driver’s name and vehicle details before getting in.", "The driver starts the ride and follows the most efficient route.", "Relax and enjoy a comfortable, secure journey"]},
{number: 4, title: "Arrive at Your Destination", description: ["The driver drops you off safely at your location.", "Cash or cashless? Pay directly through the app or in cash."]},
{number: 5, title: "Rate & Review Your Experience", description: ["Give feedback by rating your driver from 1 to 5 stars.", "Leave compliments or tips for excellent service."]},
]
const deliverySteps = [{number: 1, title: "Open the App & Enter Delivery details", description: ["Open the KoroRYDE Delivery app.", "Enter the pickup and drop-off locations.", "Choose the type of package (small parcel, food, fragile items, etc.)."]},
{number: 2, title: "Choose a Delivery Option", description: ["Select the best delivery option based on speed and price.", "Choose between motorbikes for small items or cars for larger packages.", "Confirm your order and request a courier."]},
{number: 3, title: "Get Matched with a Courier", description: ["A KoroRYDE courier nearby will accept your request.", "You’ll receive the courier’s details and estimated arrival time.", "Track your package in real-time as it moves"]},
{number: 4, title: "Package Pickup & Delivery", description: ["Hand over your package to the courier.", "The courier follows the best route to ensure fast and secure delivery.", "The recipient is notified once the package arrives."]},
{number: 5, title: "Rate Your Experience", description: ["Give feedback by rating your courier’s service.", "Help us improve by leaving a review."]},
]
const page = () => {
    return (
        <div className="font-[family-name:var(--font-bricolage-grotesque)]">
            <div className="lg:min-h-screen bg-no-repeat bg-cover  lg:pt-[64px]  pt-[60px]   " style={{
            }}>
                <div className="px-[20px] lg:px-[112px]">
                <Header isHomePage={false}/>
                </div>
                {/*  */}
                <div>
                <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[113px]">
    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
    ">How to Use the KoroRYDE APP</p>
        <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  mt-[40px] text-center text-[#656565] px-[20px]">
        KoroRYDE provides seamless, safe, and affordable ride-hailing services at your fingertips.<br/>
Our technology connects riders with professional drivers for a smooth and
convenient transportation experience.
</p>
    </div> 
    <div className="px-[20px] md:px-0">
        <p className="text-[#010101] text-[18px] md:text-[25px] font-bold leading-[150%] text-center my-[50px]">Step-by-Step Guide to Booking a Ride on KoroRYDE</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-fit gap-[20px] md:gap-[40px] lg:gap-[60px]"> 
        {steps.map((step, index) => {return  <div key={step.number} className={`max-w-[627px] p-[20px] bg-[#F6F6F6] rounded-[10px] flex flex-col gap-[30px] ${
        index === steps.length - 1 ? 'lg:col-span-2 lg:mx-auto' : ''
      }`}>
                <p className="text-[#FEFEFE] text-[25px] md:text-[30px] lg:text-[50px] leading-[150%] font-bold  bg-[#2D7CD0] h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] rounded-[100px]  flex items-center justify-center text-center">{step.number}</p>
                <p className="text-[#010101] text-[14px] md:text-base  font-bold lg:text-[18px] leading-[150%]">
                {step.title}
                </p>
                <div>
                    {step.description.map((lis, index) => { return <li key={index} className="ml-[20px] list-disc  text-[#656565] text-[18px] ">
                            {lis}
                        </li>
                    })}
                </div>
                </div>
        })}
        </div>
    </div>
    </div>
    {/*  */}
{/* using delivery app */}
<div className="px-[20px] md:px-0">
                <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[113px]">
    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
    ">How to Use the KoroRYDE Delivery APP</p>
        <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  mt-[40px] text-center text-[#656565]">
        KoroRYDE Delivery makes sending and receiving packages fast, affordable, and hassle-free.
Whether it’s food, groceries, parcels, or business logistics, our technology connects
you with reliable couriers for efficient deliveries.
</p>
    </div> 
    <div className="">
        <p className="text-[#010101] text-[18px] md:text-[25px] font-bold leading-[150%] text-center my-[50px]">Step-by-Step Guide to Booking a Ride on KoroRYDE</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-fit gap-[20px] md:gap-[40px] lg:gap-[60px]"> 
        {deliverySteps.map((step, index) => {return  <div key={step.number} className={`max-w-[627px] p-[20px] bg-[#F6F6F6] rounded-[10px] flex flex-col gap-[30px] ${
        index === steps.length - 1 ? 'lg:col-span-2 lg:mx-auto' : ''
      }`}>
                <p className="text-[#FEFEFE] text-[25px] md:text-[30px] lg:text-[50px] leading-[150%] font-bold  bg-[#2D7CD0] h-[50px] w-[50px] lg:h-[80px] lg:w-[80px] rounded-[100px]  flex items-center justify-center text-center">{step.number}</p>
                <p className="text-[#010101] text-[14px] md:text-base  font-bold lg:text-[18px] leading-[150%]">
                {step.title}
                </p>
                <div>
                    {step.description.map((lis, index) => { return <li key={index} className="ml-[20px] list-disc  text-[#656565] text-[14px] md:text-base lg::text-[18px] ">
                            {lis}
                        </li>
                    })}
                </div>
                </div>
        })}
        </div>
    </div>
    </div>

    {/*  */}

  <div className="steps mb-[100px] max-w-[1280px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] p-[20px] md:p-[50px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[60px] rounded-[10px]">
   <div className="w-full md:w-[50%]">
    <Image src={stepsImage} alt="" className="w-full"/>
   </div>
    <div className="w-full md:w-1/2 flex flex-col gap-[20px] md:gap-[20px]">
        <div>
            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[20px] md:text-[25px]">Need Fast & Reliable Delivery?</h2>
        </div>
        <div>
            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[30px] lg:text-[50px]">KoroRYDE is Here!</h2>
        </div>
        <div>
            <h2 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-base md:text-[18px]">Book your delivery now and enjoy quick, affordable, and safe service.</h2>
        </div>
      <div>
        <button className="bg-[#2D7CD0] font-bold text text-[14px] md:text-[18px] leading-[150%] text-white py-[14px] px-[10px] md:py-[16.5px] md:px-[13.5px] rounded-[10px]">
        Make a delivery booking today!
        </button>
      </div>
    </div>
    </div>
    <Footer />
        </div>
        </div>
    )
}

export default page