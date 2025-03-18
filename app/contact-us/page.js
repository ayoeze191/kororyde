const { default: Header } = require("../Header")
import location from "./../../public/assets/location.webp"
import phone from "./../../public/assets/phone.webp"
import mail from "./../../public/assets/mail.webp"
import call from "./../../public/assets/call.webp"
import website from "./../../public/assets/website.webp"
import Image from "next/image"
import FooterBg from "../FooterBg"
import Footer from "../Footer"
import OverallLayout from "../OverallLayout"




const ContactUs = () => {
    return (
        <OverallLayout><div className="">
    <div className="lg:min-h-screen bg-no-repeat bg-cover  md:pt-[64px]  pt-[60px]  " style={{
    }}>
        <div className="px-[20px]  lg:px-[112px]     ">
    <Header isHomePage={false}/>
    </div>
    <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[113px]">
    <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    ">Contact Us</p>
        <p className="max-w-[1118px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%]  mt-[40px] text-center  text-[#656565]" >Have questions or need assistance? We’re here to help! Reach out to us through
        any of the following channels:</p>
    </div> 

    <div className="mt-[100px] mx-auto w-fit flex flex-col">
        <div className="flex flex-col lg:flex-row gap-[30px] px-[44.5px] md:gap-[60px]">
    <div className="bg-[#F6F6F6] w-full md:min-w-[373px] md:max-w-[373px] md:min-h-[238px] p-[20px] rounded-[10px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-[#EAF2FA] rounded-[10px] p-[10px]"><Image src={location} alt=""/></div><p className="text-[25px] text-[#010101] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Address</p>
            </div>
            <div className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">KoroRyde Headquarters</div>
            <div className="text-[#656565] leading-[150%] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-normal">134 Calabar-Akampa Road, Akampka,
            Cross River</div>
    </div>

    <div className="bg-[#F6F6F6] w-full md:min-w-[373px] md:max-w-[373px] md:min-h-[238px] p-[20px] rounded-[10px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-[#EAF2FA] rounded-[10px] p-[10px]"><Image src={call} alt=""/></div><p className="text-[25px] text-[#010101] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Phone</p>
            </div>
            <div className="flex flex-col mt-[40px]">
           <div> <span className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">Customer Support:</span> <span className="text-[#656565] leading-[150%] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-normal">+234 700 887 5665</span></div>
            <div><span className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">Driver Support:</span> <span className="text-[#656565] leading-[150%] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-normal">+234 814 101 8302</span></div>
            </div>
    </div>

    <div className="bg-[#F6F6F6] w-full md:min-w-[373px] md:max-w-[373px] md:min-h-[238px] p-[20px] rounded-[10px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-[#EAF2FA] rounded-[10px] p-[10px]"><Image src={mail} alt=""/></div><p className="text-[25px] text-[#010101] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Email</p>
            </div>
            <div className="flex flex-col mt-[40px]">
           <div> <span className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">General Inquiries: </span> <span className="text-[#656565] leading-[150%] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-normal">support@kororyde.com</span></div>
            <div><span className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">Partnerships: </span> <span className="text-[#656565] leading-[150%] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-normal">partnerships@kororyde.com</span></div>
            </div>
    </div>
    </div>

    <div className="mt-[60px]  w-full flex gap-[60px] flex-col lg:flex-row mx-auto  px-[44.5px]">

    <div className="bg-[#F6F6F6] w-full md:min-w-[373px] md:max-w-[373px] md:min-h-[238px] p-[20px] rounded-[10px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-[#EAF2FA] rounded-[10px] p-[10px]"><Image src={website} alt=""/></div><p className="text-[25px] text-[#010101] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Website</p>
            </div>
            <div className="flex flex-col mt-[40px]">
           <div> <span className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">www.kororyde.com</span></div>
            </div>
    </div>

    <div className="bg-[#F6F6F6] w-full md:min-w-[373px] md:max-w-[373px] md:min-h-[238px] p-[20px] rounded-[10px]">
            <div className="flex gap-[20px] items-center">
                <div className="bg-[#EAF2FA] rounded-[10px] p-[10px]"><Image src={phone} alt=""/></div><p className="text-[25px] text-[#010101] font-bold font-[family-name:var(--font-bricolage-grotesque)]">Social media</p>
            </div>
            <div className="flex flex-col mt-[40px]">
           <div> <span className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">Follow us on:</span></div>
            </div>
    </div>
    </div>

    </div>
{/* Contact Form */}
    <div className="bg-[#F6F6F6] px-[20px] md:px-[100px] max-w-[839px] mx-auto mt-[100px] py-[50px]">
    <p className="text-[#030303] text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#2D7CD0]
    ">Contact Form</p>
<p className="max-w-[1118px] mt-[30px] mx-auto flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] text-center  text-[#656565]" >Still have more questions? fill out the form below, and our team will get back
to you as soon as possible:</p>
<div className="mt-[50px] flex flex-col gap-[20px]">
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]"><input type="text" placeholder="Full Name:" className="outline-0 border-0"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]"><input type="email" placeholder="Email Address:" className="outline-0 border-0"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]"><input type="number" placeholder="Phone Number:" className="outline-0 border-0"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]"><input type="text" placeholder="Subject:" className="outline-0 border-0"/></div>
    <div className="py-[11.5px] px-[30.5px] border-[1px] rounded-[10px] border-[#656565]">
        <textarea placeholder="Message:" rows={7} className="border-0 outline-0 w-full"/>
    </div>
    <button className="bg-[#2D7CD0] py-[16.5px]  rounded-[10px] text-[#FDFDFD] text-[18px] font-bold w-fit mx-auto px-[118px]">Submit</button>
</div>
    </div>
<div className="mt-[200px]">
    <FooterBg/>
    <Footer />
    </div>
    </div>
    </div>
    </OverallLayout>
    )
}

export default ContactUs





const Contact = ({icon, title, details}) => {
        <div className="bg-[#F6F6F6] p-[20px] rounded-[10px]">
            <div className="flex gap-[20px]">
                <div>{icon}</div><p className="text-[25px] text-[#010101] font-bold font-[family-name:var(--font-bricolage-grotesque)]">{title}</p>
            </div>
            <div className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-bold">{sub}</div>
            <div className="text-[#656565] text-[18px] font-[family-name:var(--font-bricolage-grotesque)] mt-[40px] font-normal">{details}</div>


    </div>
}