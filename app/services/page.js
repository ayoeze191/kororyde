const { default: Header } = require("../Header")
import Footer from "../Footer"
import FooterBg from "../FooterBg"
import OverallLayout from "../OverallLayout"
import service1 from "./../../public/assets/service1.webp"
import service2 from "./../../public/assets/service2.webp"
import service3 from "./../../public/assets/service3.png"
import service4 from "./../../public/assets/service4.png"
import service5 from "./../../public/assets/service5.png"
import service6 from "./../../public/assets/service6.png"

import Service from "./Service"
const allservices = [
    {
        img: service1,
        title: "Ride Hailing",
        description: "KoroRYDE provides a seamless ride-hailing experience, connecting riders with professional drivers through our user-friendly mobile app. Whether it’s a quick trip across town, a premium ride, or a shared carpool option, KoroRYDE ensures affordable and reliable transportation for everyone"
    },
    {
        img: service2,
        title: "KoroRYDE Delivery",
        description: "Beyond passenger rides, KoroRYDE connects consumers, businesses, and independent delivery riders, ensuring fast, secure, and efficient delivery services for food, groceries, parcels, and more. We empower small businesses and e-commerce platforms by providing a robust logistics network across Nigeria."
    },
    {
        img: service3,
        title: "Investment - Earn weekly by investment in EV and CNG vehicles",
        description: "We offer a unique investment opportunity where individuals and businesses can invest in CNG cars, electric bikes, and delivery vehicles through our platform. Investors earn weekly passive income while helping to empower drivers and contribute to a greener environment.",
    },
    {
        img: service4,
        title: "Freight & Logistics Solutions",
        description: "KoroRYDE connects shippers with reliable carriers to transport goods across cities, ensuring efficient and cost-effective freight services. We partner with businesses to optimize supply chain logistics."
    },
    {
        img: service5,
        title: "Advertise on KoroRYDE Vehicles",
        description: "Businesses can place ads on our cars for maximum brand exposure across different locations"
    },
    {
        img: service6,
        title: "Pay Bills & Buy Recharge Cards",
        description: "Our platform allows users to pay utility bills and buy airtime easily within the app."
    },
    {
        img: service6,
        title: "CNG Conversion",
        description: "Enjoy a quiet and comfortable ride tailored just for you. Our private ride option ensures that you have the entire vehicle to yourself, allowing for a peaceful and uninterrupted journey. Whether you're heading to an important meeting, the airport, or simply prefer a solo travel experience, we've got you covered."
    }
]
const Services = () => {
    return <OverallLayout>
        <div className="">
    <div className="md:min-h-screen bg-no-repeat bg-cover  md:py-[64px]  py-[60px]  " style={{
    }}>
        <div className="px-[20px] lg:px-[112px]   ">
    <Header isHomePage={false}/>
    </div>
    <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[22px] px-[20px] md:px-0 md:py-[113px]">
    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    ">Product & Services</p>
    <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[20px] md:mt-[40px] text-center">At KoroRyde, we offer a range of transportation solutions designed to meet the diverse needs of our customers. Whether you’re commuting to work, running errands, or planning a long-distance trip, KoroRyde ensures a seamless, safe, and convenient experience. 
<span className="text-[#474747]">Explore our services below:</span></p>
    </div> 
    <div className="px-[20px] lg:px-0 max-w-[1291px] mx-auto mt-[100px] flex flex-col  gap-[30px] md:gap-[60px]">
        {allservices.map((serv, index) => <Service {...serv} key={index} position={index + 1}/>)}
        </div> 
    </div>
    <FooterBg />
    <Footer />
    </div>
    </OverallLayout>
}

export default Services