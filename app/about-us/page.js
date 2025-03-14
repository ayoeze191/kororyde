import Image from "next/image"
import Header from "../Header"
import invest from "./../../public/assets/Invest.webp"
import Template, { TemplateTwo } from "./temp"
import empowering from "./../../public/assets/Enpowering.webp"
import delivery from "./../../public/assets/Delivery.webp"
import sustainability from "./../../public/assets/sustainability.webp"
import social from "./../../public/assets/Social.webp"
import facebook from "./../../public/assets/facebook.webp"
import instagram from "./../../public/assets/instagram.webp"
import linkedln from "./../../public/assets/linkedin.webp"
import twitter from "./../../public/assets/twitter.webp"
import FooterBg from "../FooterBg"
import Footer from "../Footer"

const Page = () => {
    return <div className="">
    <div className="md:min-h-screen bg-no-repeat bg-cover  md:pt-[64px]  pt-[60px]  " style={{
    }}>
        <div className="px-[20px] md:px-[112px]">
    <Header isHomePage={false}/>
    </div>
    <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[113px]">
    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
    ">About Us</p>
        <p className="px-[20px] max-w-[1118px] mx-auto flex flex-col gap-[20px] text[13px] md:text-[18px] font-normal leading-[150%]  mt-[40px] text-center text-[#010101]">KoroRYDE is a technology company transforming the way people and goods move across Nigeria and Africa. Our innovative mobility and logistics platform connects riders, drivers, investors, and businesses through smart digital solutions.
        <span className="text-[#656565]">We provide seamless ride-hailing, delivery, freight, and investment opportunities while ensuring affordability, safety, and efficiency.</span></p>
    </div> 
    <Template title={'Why KoroRYDE?'} img={invest} position={1}>
    Whether you’re a rider, driver, business owner, or investor, KoroRYDE offers an opportunity to be part
of Africa’s transportation revolution.<br/>

✅ Eco-Friendly Transportation – We prioritize CNG-powered vehicles and electric bikes to reduce carbon emissions.<br/>

✅ Driver Empowerment – Our platform allows drivers to own their vehicles, earn more, and access benefits such as insurance and training.<br/>

✅ Affordable & Transparent Pricing – No hidden fees, no surge surprises! We offer fair, predictable pricing for riders.<br/>

✅ Multiple Earning Opportunities – From riding and driving to investing in vehicles, KoroRYDE creates wealth-building opportunities for everyone.<br/>

✅ Localized & Community-Driven – We understand the unique needs of African transportation and tailor our services to solve real problems.<br/>
    </Template>

    <div className="mt-[100px] ">
    <p className="text-[#2D7CD0] text-[25px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
    ">KoroRyde Impact</p>
   <p className="max-w-[1118px] mx-auto text-[#656565]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[40px] text-center">At KoroRYDE, we are more than just a ride-hailing and delivery platform—we are a movement dedicated to
empowering communities, creating economic opportunities, and driving sustainable change.
Our technology is transforming the way people move, work, and earn across Nigeria.</p>
    </div>
{/* Impacts */}
    <div className="px-[20px]">
    <TemplateTwo title={'Empowering Drivers & Riders'} img={empowering} position={1}> 
    We provide fair earnings and financial independence for thousands of drivers, couriers, and partners. Through KoroRYDE, drivers gain access to:<br />
                            <br/>

✅ Flexible income opportunities – Earn on your terms, with no fixed schedules.<br/>
✅ Vehicle ownership programs – Drivers can own their cars or bikes through investment partnerships.<br/>
✅ Safety & security features – Real-time tracking, SOS buttons, and verified drivers for peace of mind.<br/>
<br/>

Riders also enjoys:<br/> <br/>

✅ Affordable, safe, and convenient transportation.<br/>
✅ Transparent pricing – No hidden charges, no surge surprises.<br/>
✅ Reliable services – Ride with ease, whether for work, errands, or social outings.<br/>

    </TemplateTwo>
    {/*  */}

    <TemplateTwo title={'Revolutionizing Delivery Services'} img={delivery} position={2}>
    KoroRYDE Delivery makes it easy for businesses and individuals to send packages, groceries, and food seamlessly. Our impact includes:<br/><br/>

✅ Supporting small businesses by providing cost-effective logistics.
✅ Fast & reliable last-mile delivery solutions.
✅ Employment for couriers – creating more job opportunities in urban and rural areas.
    </TemplateTwo>
    <TemplateTwo title={'Driving Sustainability with CNG & EV Vehicles'} img={sustainability} position={1}>
    We are committed to a cleaner, greener future by promoting Compressed Natural Gas (CNG) and Electric Vehicles (EVs).
<br />
                            <br/>
                            ✅ Lower emissions – Helping reduce carbon footprints and improve air quality.<br/>
✅ Affordable transportation – CNG & EV options mean lower fuel costs for drivers and cheaper fares for riders.<br/>
✅ Encouraging eco-friendly investments – Investors can earn while contributing to sustainability.<br/>
    </TemplateTwo>
{/* Open */}
    <TemplateTwo title={'Corporate Social Responsibility (CSR) & Community Impact'} img={social} position={2}>
    KoroRYDE is deeply committed to giving back and making a difference in society. Our initiatives include:
<br />
                            <br/>
                            ✅ Empowerment programs – Providing job opportunities for youth and women.<br/>
✅ Educational sponsorships – Supporting drivers with skill development and training.<br/>
✅ Free & discounted rides – Partnering with government and NGOs for transport solutions in healthcare, education, and emergency services.<br/>
    </TemplateTwo>
    </div>


    <div className="bg-[#133457] mb-[100px] max-w-[1258px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] py-[50px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[200px]">
    <p className="text-[#FEFEFE] w-full font-bold font text-[50px] [text-shadow:3px_2px_0px_0px_#2D7CD0]">
    Partner with us.
Ride with us.
Invest in the future.
    </p>
    <div className="w-full flex flex-col gap-[20px]">
        <div>
            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Available in your city:</h2>
            <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">134 Calabar-Akampa Road, Akampka, Cross River</h3>
        </div>
        <div>
            <h2 className="text-[#FEFEFE] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">Contact us:</h2>
            <h3 className="text-[#FEFEFE] font-normal leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-[18px]">+234 700 887 566</h3>
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

    <FooterBg/>
    <Footer />
    </div>
    </div>
}

export default Page




