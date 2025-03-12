import Image from "next/image";
// import HeroBg from "./../assets/HeroBg.png"
import sparkles from "./../public/assets/sparkles.png"
import apple from "./../public/assets/apple.png"
import google from "./../public/assets/google.png"
import service1 from "./../public/assets/service1.png"
import service2 from "./../public/assets/service2.png"
import service3 from "./../public/assets/service3.png"
import heroBg from "./../public/assets/HeroBg.png"
import arrowup from "./../public/assets/arrowupright.png"
import safeandaffordavle from "./../public/assets/SafeandAffordable.png"
import green from "./../public/assets/green.png"
import delivery from "./../public/assets/delivery.png"
import investment from "./../public/assets/investment.png"
import picture1 from "./../public/assets/picture1.png"
import frame from "./../public/assets/Frame.png"
import picture2 from "./../public/assets/picture2.png"
import picture3 from "./../public/assets/picture3.png"
import picture4 from "./../public/assets/picture4.png"
import picture5 from "./../public/assets/picture5.png"
import picture6 from "./../public/assets/picture6.png"
import picture7 from "./../public/assets/picture7.png"
import picture8 from "./../public/assets/picture8.png"
import picture9 from "./../public/assets/picture9.png"
import picture10 from "./../public/assets/picture10.png"
import picture11 from "./../public/assets/picture11.png"  
import logo from "./../public/assets/logo.png"

// import service3 from "./../public/assets"
import group from "./../public/assets/Group.png"
import Header from "./Header";

export default function Home() {
  
  return (
    <div className="">
     <div className="md:min-h-screen bg-no-repeat bg-cover md:px-[112px] md:py-[64px] px-[20px] py-[60px] md:bg-[url('/assets/HeroBg.png')] bg-[#010101]" style={{
      //  backgroundImage: "url('/assets/HeroBg.png')",
     }}>
     <Header />
      <div className="bg-black p-[50px] rounded-[10px]  md:mt-[59px] w-full max-w-[655px] mx-auto md:ml-0">
     <div className="bg-white mx-auto md:mx-0 flex items-center gap-[10px] md:gap-[20px] px-[20px] py-[5px]  text-[#010101] w-fit rounded-[10px] text-[15px] md:text-[18px] font-[family-name:var(--font-bricolage-grotesque)]">
      <p>
        <Image src={sparkles} alt="" />
      </p>
      Welcome to KoroRYDE</div>
     <div className="font-[family-name:var(--font-bricolage-grotesque)] font-bold leading-[150%] text-[30px] text-center md:text-left md:text-[60px] mt-[30px] md:mt-[50px]"> 
     The Future of 
Smart Mobility 
& Logistics
     </div>
     <p className="text-[15px] text-center md:text-left md:text-[18px] mt-[20px]">
      KoroRYDE is a next-generation ride-hailing and delivery platform
     </p>
     <div className="flex gap-[20px] items-center mt-[30px] md:mt-[50px] justify-center md:justify-start">
      <div className="flex bg-[#252B42] py-[8.6px] px-[15.21px] md:py-[20px] md:px-[33.5px] items-center gap-[11.49px] md:gap-[25px]  border-white border rounded-[10px]">
        <Image src={google} alt="" className="w-[15.94px] h-[18.33px] md:w-[initial] md:h-[initial]"/>
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold md:leading-[24px] text-[6.76px] leading-[11.59px] md:text-[14px]">Download on the</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[9.6px] leading-[14.49px] md:leading-[initial] md:text-[20px]">Google play</h2>
        </div>
      </div>
      <div className="flex bg-[#252B42] py-[8.6px] px-[15.21px] md:py-[20px] md:px-[33.5px] items-center gap-[11.49px] md:gap-[25px]  border-white border rounded-[10px]">
        <Image src={apple} alt="" className="w-[15.94px] h-[18.33px] md:w-[initial] md:h-[initial]" />
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold md:leading-[24px] text-[6.76px] leading-[11.59px] md:text-[14px]">Download on the</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[9.6px] leading-[14.49px] md:leading-[initial] md:text-[20px]">App Store</h2>
        </div>
      </div>
     </div>
      </div>
     </div>

     <Image src={heroBg} alt="" className="w-full block md:hidden"/>


     <div className=" bg-white ">
        <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold pt-[50px] w-[179px] mx-auto md:pt-[150px] mb-[50px] md:w-full text-center font-[family-name:var(--font-bricolage-grotesque)] [text-shadow:3px_2px_0px_#252B42]">KoroRYDE in numbers</p>
        <div className="flex gap-[154px] mx-auto w-fit mt-[50px]">
          <div className="flex flex-col text-center text-[18px]">
            <p className="text-[#010101] text-[25px] md:text-[50px] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)]" >100+</p>
            <p className="text-[#010101] text-[13px] md:text-base mt-[10px] text-center">CNG Cars</p>
          </div>
          <div className="flex flex-col text-center text-[18px] font-[family-name:var(--font-bricolage-grotesque)]">
            <p className="text-[#010101] text-[50px] font-bold">500+</p>
            <p className="text-[#010101] mt-[10px]">EV Bikes</p>
          </div>
          <div className="flex flex-col text-center text-[18px] font-[family-name:var(--font-bricolage-grotesque)]">
            <p className="text-[#010101] text-[50px] font-bold font-[family-name:var(--font-bricolage-grotesque)]">50+</p>
            <p className="text-[#010101] mt-[10px]">EV Cars</p>
          </div>
          <div className="flex flex-col text-center text-[18px]">
            <p className="text-[#010101] text-[50px] font-bold font-[family-name:var(--font-bricolage-grotesque)]">12,250+</p>
            <p className="text-[#010101] mt-[10px]">Total Rides</p>
          </div>
        </div>
     </div>

     <div className="bg-white py-[150px] px-[140px] w-full ">
      <h2 className="text-[#030303] text-[50px] font-bold leading-[150%] mx-auto w-fit font-[family-name:var(--font-bricolage-grotesque)] [text-shadow:3px_2px_0px_0px_#2D7CD0]
">Ready to Experience KoroRYDE</h2>
     <p className="mt-[20px] text-[#656565]  text-[18px] leading-[150%] font-normal mx-auto w-fit font-[family-name:var(--font-bricolage-grotesque)]">Check out our range of services</p>
      <div className="mt-[50px] flex gap-[39px] overflow-x-scroll ">
        <div className="min-w-[600px] relative h-fit">
          <div><Image src={service1} alt=""/></div>
          <div className="bg-[#010101] p-[30px] flex flex-col gap-[20px] absolute bottom-0 w-full rounded-[10px]" >
            <div className=" text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[25px] flex gap-[10px] font-bold"><p>Ride hailing</p>
            <div><Image src={arrowup} alt=""/></div>
            </div>
            
            <p className="text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[18px] leading-[150%] font-normal">Get to your destination safely and affordably</p>
          </div>
        </div>

        <div className="min-w-[600px] relative h-fit">
          <div><Image src={service2} alt=""/></div>
          <div className="bg-[#010101] p-[30px] flex flex-col gap-[20px] absolute bottom-0 w-full rounded-[10px]" >
            <div className=" text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[25px] flex gap-[10px] font-bold"><p>Ride hailing</p>
            <div><Image src={arrowup} alt=""/></div>
            </div>
            
            <p className="text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[18px] leading-[150%] font-normal">Get to your destination safely and affordably</p>
          </div>
        </div>

        <div className="min-w-[600px] relative h-fit">
          <div><Image src={service3} alt=""/></div>
          <div className="bg-[#010101] p-[30px] flex flex-col gap-[20px] absolute bottom-0 w-full rounded-[10px]" >
            <div className=" text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[25px] flex gap-[10px] font-bold"><p>Ride hailing</p>
            <div><Image src={arrowup} alt=""/></div>
            </div>
            
            <p className="text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[18px] leading-[150%] font-normal">Get to your destination safely and affordably</p>
          </div>
        </div>

      </div>
      <p className="text-[50px] mt-[150px] leading-[150%] text-[#2D7CD0] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
">
      The 4 focal commitments to<br/>
      our users
      </p>
     </div>

     <div className=" px-[140px] mx-auto bg-white py-[130px]" style={{
       backgroundImage: "url('/assets/Frame.png')"}}>
      <div className="grid grid-cols-2 gap-[60px]  mx-auto ">
       <div>
        <div className="relative">
          <Image src={safeandaffordavle} alt="" className="w-full"/>
          <p className="text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[40px] top-[27px] left-[17px] absolute">Safety & ease</p>
        </div>
        <div className="text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[25px] leading-[150%]">
        <p>Safe and affordable</p>
        <p>Transportation</p>
        </div>
       </div>

       <div className="">
        <div className="relative">
          <Image src={green} alt="" className="w-full"/>
          <p className="text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[40px] top-[27px] left-[17px] absolute">Safety & ease</p>
        </div>
        <div className="text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[25px] leading-[150%]">
        <p>CNG-powered cars and</p>
        <p>EV bikes</p>
        </div>
       </div>

       <div>
        <div className="relative">
          <Image src={delivery} alt="" className="w-full"/>
          <p className="text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[40px] top-[27px] left-[17px] absolute">Fast delivery</p>
        </div>
        <div className="text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[25px] leading-[150%]">
        <p>Offering a seamless, fast</p>
        <p>delivery service</p>
        </div>
       </div>

       <div>
        <div className="relative">
          <Image src={investment} alt="" className="w-full"/>
          <p className="text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[40px] top-[27px] left-[17px] absolute">Investment</p>
        </div>
        <div className="text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[25px] leading-[150%]">
        <p>Investment opportunities for</p>
        <p>individuals and businesses.</p>
        </div>
       </div>
       </div>
     </div>

     <div className="bg-white  text-[#010101] pt-[150px]">
      <p className="text-[50px] leading-[150%]  font-[family-name:var(--font-bricolage-grotesque)] font-bold text-center [text-shadow:3px_2px_0px_0px_#2D7CD0]
">What pictures have to say about<br/>
      KoroRyde</p>
      <div className="flex gap-[40px] overflow-x-scroll mt-[50px]">
        <Image src={picture1} alt=""/>
        <Image src={picture2} alt=""/>
        <Image src={picture3} alt=""/>
        <Image src={picture4} alt=""/>  
      </div>
      <div className="mt-[40px] flex gap-[40px] px-[150px]">
      <Image src={picture5} alt=""/>
        <Image src={picture6} alt=""/>
        <Image src={picture7} alt=""/>  
      </div>
      <div className="flex gap-[40px] mt-[40px] w-full overflow-x-scroll mx-auto ">
      <Image src={picture8} alt=""/>
        <Image src={picture9} alt=""/>
        <Image src={picture10} alt=""/>  
        <Image src={picture11} alt="" className="h-fit bg-cover"/>  
      </div>
     </div>

     <div className="bg-white py-[150px]">
      <p className="text-[50px] mb-[50px] text-[#2D7CD0] leading-[150%]  font-[family-name:var(--font-bricolage-grotesque)] font-bold text-center [text-shadow:3px_2px_0px_0px_#252B42]
">Testimonies</p>
<div className="flex gap-[40px] overflow-x-scroll mb-[40px]">
  <div className="p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[25px] font-bold">James O. –</span> Frequent Commuter
    </p>
    <p className="text-[18px] leading-[150%] text-[#656565]">
"KoroRyde has been a game-changer for my daily 
commute! The drivers are polite, the cars are clean, and the fares
are super affordable. I love how easy it is to book a ride and track
my driver in real time!"
    </p>
  </div>

  <div className="p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[25px] font-bold">Chinwe A. –</span>  Business Professional
    </p>
    <p className="text-[18px] leading-[150%] text-[#656565]">
"As a businesswoman, I need a reliable and professional ride-hailing service, and
KoroRyde delivers every time. The rides are always smooth, and the drivers are
punctual. I highly recommend it for corporate travel"
    </p>
  </div>

  <div className="rounded-[10px] p-[20px] text-center min-w-[713px] w-full bg-[#F6F6F6] font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[25px] font-bold">Tunde E. –</span> First-Time User
    </p>
    <p className="text-[18px] leading-[150%] text-[#656565]">
"I was skeptical at first, but KoroRyde exceeded my expectations.
The sign-up process was seamless, and my first ride was hassle-free.
Definitely my go-to ride-hailing app from now"
    </p>
  </div>
</div>



{/*  */}
<div className="flex gap-[40px] overflow-x-scroll mb-[40px]">
  <div className="p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[25px] font-bold">Grace M. –</span> Student
    </p>
    <p className="text-[18px] leading-[150%] text-[#656565]">
"KoroRyde is a lifesaver for students like me! The fares
are budget-friendly, and I always feel safe, especially with the in-app
safety features. I don’t have to worry about getting
around the city anymore."
    </p>
  </div>

  <div className="p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[25px] font-bold">Babatunde K. –</span>  Driver Partner
    </p>
    <p className="text-[18px] leading-[150%] text-[#656565]">
"As a KoroRyde driver, I appreciate how fair the company is to its drivers. The
earnings are good, the app is easy to use, and I get to meet amazing passengers
every day. Best decision I made!"
    </p>
  </div>

  <div className="rounded-[10px] p-[20px] text-center min-w-[713px] w-full bg-[#F6F6F6] font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[25px] font-bold">Amina S –</span> Mother of Two
    </p>
    <p className="text-[18px] leading-[150%] text-[#656565]">
"I use KoroRyde whenever I need a safe and reliable ride with my kids.
The drivers are patient and professional, and I love that I can schedule rides in
advance. It makes life so much easier!"
    </p>
  </div>
</div>
</div>

<div className="bg-red-300 relative flex justify-center flex-col items-center">
  <Image src={group} className="w-full" alt=""/>
  <div className="absolute top-0 py-[134px] flex items-center w-fit mx-auto flex-col"> 
  <p className="font-bold text-[50px] text-center w-fit mx-auto font-[family-name:var(--font-bricolage-grotesque)] leading-[150%]">
    Get The App Today <br/> Start Your Ride
  </p>

  <div className="flex gap-[20px] items-center mt-[50px]">
      <div className="flex bg-[#252B42] py-[20px] px-[33.5px] items-center gap-[25px] border-white border rounded-[10px]">
        <Image src={google} alt="" />
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold leading-[24px] text-[14px]">Download on the</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[20px]">Google play</h2>
        </div>
      </div>
      <div className="flex bg-[#252B42] py-[20px] px-[33.5px] items-center gap-[25px] border-white border rounded-[10px]">
        <Image src={apple} alt="" />
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold leading-[24px] text-[14px]">Download on the</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[20px]">App Store</h2>
        </div>
      </div>
     </div>
  </div>
</div>

<div className="py-[100px] px-[235px] flex gap-[210px]">
  <div>
<Image src={logo} alt=""/>
</div>
<div className="flex  gap-[28px]">
  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center">Services</p>
    <hr className="border-[1px] my-[20px]"/>
    <div className="flex flex-col gap-[20px]">
      <p className="flex  items-center justify-center gap-2.5 text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">Ride-hailing
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-2.5 justify-center text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">Delivery
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-2.5 justify-center text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">Private/Solo ride
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-2.5 justify-center text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center"> Co-Sharing ride
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
     
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center">Investment Opportunities</p>
    <hr className="border-[0.5px] my-[20px] w-[160px] mx-auto"/>
    <div className="flex flex-col gap-[20px]">
      <p className="flex  items-center justify-center gap-2.5 text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">Invest a ride
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-2.5 justify-center text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">Invest a bus
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
      <p className="flex  items-center gap-2.5 justify-center text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">Advertisement
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
     
    </div>
  </div>


  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center">About Us</p>
    <hr className="border-[0.5px] my-[20px] w-[111px] mx-auto"/>
    <div className="flex flex-col gap-[20px]">
      <p className="flex  items-center justify-center gap-2.5 text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center">About Us
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
     
    </div>
  </div>
  
  <div className="w-fit flex flex-col font-[family-name:var(--font-bricolage-grotesque)]">
    <p className="text-[#FEFEFE] font-bold text-[25px] leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] text-center">Contact Us</p>
    <hr className="border-[0.5px] my-[20px] w-[127px] border-[#FEFEFE]"/>
    <div className="flex flex-col gap-[20px]">
      <p className="flex  items-center gap-2.5 justify-center text-[18px] leading-[150%] font-normal font-[family-name:var(--font-bricolage-grotesque)] text-center"> Contact Us
<Image src={arrowup} alt="" className="w-[25px] h-[25px]"/>
      </p>
     
    </div>
  </div>

</div>
</div>
      </div>
    
  );
}



// text-7xl font-[family-name:var(--font-bricolage-grotesque)]