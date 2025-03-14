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
import picture6 from "./../public/assets/picture6.png"
import picture7 from "./../public/assets/picture7.png"
import picture5 from "./../public/assets/picture5.png"

// import service3 from "./../public/assets"
import Header from "./Header";
import Footer from "./Footer";
import FooterBg from "./FooterBg";
import ImageSlider, { ImageSliderThree, ImageSliderTwo } from "./components/PictureSlider";
import SideBar from "./Sidebars";
import OverallLayout from "./OverallLayout";

export default function Home() {
  
  return (
    <OverallLayout>
    <div className="">
     <div className="lg:min-h-screen bg-no-repeat bg-cover lg:px-[112px] lg:py-[64px] px-[20px] py-[60px] lg:bg-[url('/assets/HeroBg.png')] bg-[#010101]" style={{
      //  backgroundImage: "url('/assets/HeroBg.png')",
     }}>
     <Header isHomePage={true}/>
     <SideBar />
      <div className="bg-black p-[50px] rounded-[10px]  lg:mt-[59px] w-full max-w-[655px] mx-auto lg:ml-0">
     <div className="bg-white mx-auto lg:mx-0 flex items-center gap-[10px] lg:gap-[20px] px-[20px] py-[5px]  text-[#010101] w-fit rounded-[10px] text-[15px] lg:text-[18px] font-[family-name:var(--font-bricolage-grotesque)]">
      <p>
        <Image src={sparkles} alt="" />
      </p>
      Welcome to KoroRYDE</div>
     <div className="font-[family-name:var(--font-bricolage-grotesque)] font-bold leading-[150%] text-[30px] text-center lg:text-left lg:text-[60px] mt-[30px] md:mt-[50px] text-[#FEFEFE]" > 
     The Future of 
Smart Mobility 
& Logistics
     </div>
     <p className="text-[15px] text-center lg:text-left lg:text-[18px] mt-[20px] text-[#FDFDFD]">
      KoroRYDE is a next-generation ride-hailing and delivery platform
     </p>
     <div className="flex gap-[20px] items-center mt-[30px] lg:mt-[50px] justify-center lg:justify-start">
      <div className="flex bg-[#252B42] py-[8.6px] px-[15.21px] lg:py-[20px] lg:px-[33.5px] items-center gap-[11.49px] lg:gap-[25px]  border-white border rounded-[10px]">
        <Image src={google} alt="" className="w-[15.94px] h-[18.33px] lg:w-[initial] lg:h-[initial]"/>
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold lg:leading-[24px] text-[6.76px] leading-[11.59px] lg:text-[14px] text-white">Download on the</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[9.6px] leading-[14.49px] lg:leading-[initial] lg:text-[20px] text-white">Google play</h2>
        </div>
      </div>
      <div className="flex bg-[#252B42] py-[8.6px] px-[15.21px] lg:py-[20px] lg:px-[33.5px] items-center gap-[11.49px] lg:gap-[25px]  border-white border rounded-[10px]">
        <Image src={apple} alt="" className="w-[15.94px] h-[18.33px] lg:w-[initial] lg:h-[initial]" />
        <div>
          <p className="font-[family-name:var(--font-montserrat)] font-bold lg:leading-[24px] text-[6.76px] leading-[11.59px] lg:text-[14px] text-white" >Download on the</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[9.6px] leading-[14.49px] lg:leading-[initial] lg:text-[20px] text-white">App Store</h2>
        </div>
      </div>
     </div>
      </div>
     </div>

     <Image src={heroBg} alt="" className="w-full block md:hidden"/>


     <div className=" bg-white ">
        <p className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold pt-[50px] w-[179px] mx-auto md:pt-[150px] mb-[50px] md:w-full text-center font-[family-name:var(--font-bricolage-grotesque)] [text-shadow:3px_2px_0px_#252B42]">KoroRYDE in numbers</p>
        <div className="flex md:gap-[154px] gap-[27px] mx-auto w-fit mt-[50px]">
          {[{numb: 100, title: 'CNG Cars'}, {numb: 500, title: 'EV Bikes'}, {numb: 50, title: 'EV Cars'}, {numb: 12250, title: 'Total Rides'}].map((kor, index) => {
            return           <div key={index} className="flex flex-col text-center text-[18px]">
            <p className="text-[#010101] text-[25px] md:text-[50px] font-bold leading-[150%] font-[family-name:var(--font-bricolage-grotesque)] "  >{kor.numb}+</p>
            <p className="text-[#010101] text-[13px] md:text-base mt-[10px] text-center">{kor.title}</p>
          </div>
          })}
        </div>
     </div>

     <div className="bg-white pt-[50px] md:pt-[150px] md:px-[140px] px-[21px] w-full ">
      <h2 className="text-[#030303] text-[25px] text-center md:text-[50px] font-bold leading-[150%] mx-auto w-fit font-[family-name:var(--font-bricolage-grotesque)] [text-shadow:3px_2px_0px_0px_#2D7CD0]
">Ready to Experience KoroRYDE</h2>
     <p className="mt-[20px] text-[#656565] text-[13px]  md:text-[18px] leading-[150%] font-normal mx-auto w-fit font-[family-name:var(--font-bricolage-grotesque)]">Check out our range of services</p>
      <div className="mt-[50px] flex gap-[39px] overflow-x-scroll w-full">
        <div className="max-w-[initial] rounded-[10px] min-w-[250px] h-[292px] md:min-w-[600px] relative md:h-fit ">
          <div className="h-full w-full"><Image src={service1} alt="" className="h-full"/></div>
          <div className="bg-[#010101] p-[10px] md:p-[30px] flex flex-col gap-[10px] md:gap-[20px] absolute bottom-0 w-full rounded-[10px]" >
            <div className=" text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[25px] flex gap-[10px] font-bold"><p>Ride hailing</p>
            <div><Image src={arrowup} alt=""/></div>
            </div>
            
            <p className="text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px] leading-[150%] font-normal text-[13px] ">Get to your destination safely and affordably</p>
          </div>
        </div>
        <div className="max-w-[initial] rounded-[10px] min-w-[250px] h-[292px] md:min-w-[600px] relative md:h-fit ">
          <div className="h-full w-full"><Image src={service2} alt="" className="h-full"/></div>
          <div className="bg-[#010101] p-[10px] md:p-[30px] flex flex-col gap-[20px] absolute bottom-0 w-full rounded-[10px]" >
            <div className=" text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[25px] flex gap-[10px] font-bold"><p>Ride hailing</p>
            <div><Image src={arrowup} alt=""/></div>
            </div>
            
            <p className="text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px] leading-[150%] font-normal text-[13px] ">Get to your destination safely and affordably</p>
          </div>
        </div>

        <div className="max-w-[initial] rounded-[10px] min-w-[250px] h-[292px] md:min-w-[600px] relative md:h-fit ">
          <div className="h-full w-full"><Image src={service3} alt="" className="h-full"/></div>
          <div className="bg-[#010101] p-[10px] md:p-[30px] flex flex-col gap-[20px] absolute bottom-0 w-full rounded-[10px]" >
            <div className=" text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[25px] flex gap-[10px] font-bold"><p>Ride hailing</p>
            <div><Image src={arrowup} alt=""/></div>
            </div>
            
            <p className="text-[#FEFEFE] font-[family-name:var(--font-bricolage-grotesque)] md:text-[18px] leading-[150%] font-normal text-[13px] ">Get to your destination safely and affordably</p>
          </div>
        </div>
      </div>
      <p className="text-[25px] md:text-[50px] mt-[50px] md:mt-[150px] leading-[150%] text-[#2D7CD0] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-center [text-shadow:3px_2px_0px_0px_#252B42]
">
      The 4 focal commitments to<br/>
      our users
      </p>
     </div>

     <div className=" px-[26px] md:px-[140px] mx-auto bg-white py-[40px] md:py-[130px]" style={{
       backgroundImage: "url('/assets/Frame.png')"}}>
      <div className="md:grid flex flex-col md:grid-cols-2 gap-[34px] md:gap-[60px]  mx-auto ">
       <div>
        <div className="relative">
          <div className="overlay absolute w-full h-full top-0 bg-black opacity-[0.3] z-1"></div>
          <Image src={safeandaffordavle} alt="" className="w-full"/>
          <p className="z-2 text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[40px] top-[8px] md:top-[27px] left-[17px] absolute">Safety & ease</p>
        </div>
        <div className="text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[25px] leading-[150%]">
        <p>Safe and affordable</p>
        <p>Transportation</p>
        </div>
       </div>

       <div className="">
        <div className="relative">
        <div className="overlay absolute w-full h-full top-0 bg-black opacity-[0.3] z-1"></div>

          <Image src={green} alt="" className="w-full"/>
          <p className="z-2 text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[40px] top-[27px] left-[17px] absolute">Safety & ease</p>
        </div>
        <div className="text-[13px] md:text-[25px] text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] leading-[150%]">
        <p>CNG-powered cars and</p>
        <p>EV bikes</p>
        </div>
       </div>

       <div>
        <div className="relative">
        <div className="overlay absolute w-full h-full top-0 bg-black opacity-[0.3] z-1"></div>

          <Image src={delivery} alt="" className="w-full"/>
          <p className="z-2 text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[40px] top-[27px] left-[17px] absolute">Fast delivery</p>
        </div>
        <div className="text-[13px] md:text-[25px] text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)]  leading-[150%]">
        <p>Offering a seamless, fast</p>
        <p>delivery service</p>
        </div>
       </div>

       <div>
        <div className="relative">
        <div className="overlay absolute w-full h-full top-0 bg-black opacity-[0.3] z-1"></div>
          <Image src={investment} alt="" className="w-full"/>
          <p className="z-2 text-[#FEFEFE] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[18px] md:text-[40px] top-[27px] left-[17px] absolute">Investment</p>
        </div>
        <div className="text-[#010101] mt-[20px] font-bold font-[family-name:var(--font-bricolage-grotesque)] text-[13px] md:text-[25px] leading-[150%]">
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
      <div className="flex gap-[40px] overflow-x-scroll mt-[50px] w-full">
       <ImageSlider />
      </div>
      <div className="mt-[40px] flex gap-[40px] mx-auto w-full justify-center">
      <Image src={picture5} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/>
            <Image src={picture6} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/>
            <Image src={picture7} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/>
      </div>
      <div className="flex gap-[40px] mt-[40px] w-full overflow-x-scroll mx-auto ">
      <ImageSliderThree />
      </div>
     </div>

     <div className="bg-white py-[150px]">
      <p className="text-[50px] mb-[50px] text-[#2D7CD0] leading-[150%]  font-[family-name:var(--font-bricolage-grotesque)] font-bold text-center [text-shadow:3px_2px_0px_0px_#252B42]
">Testimonies</p>
<div className="flex gap-[40px] overflow-x-scroll mb-[40px]">
  <div className="p-[10px] md:p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[247px]  md:min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[18px] md:text-[25px]  font-bold">James O. –</span> Frequent Commuter
    </p>
    <p className="text[13px] md:text-[18px] leading-[150%] text-[#656565]">
    &quot KoroRyde has been a game-changer for my daily 
commute! The drivers are polite, the cars are clean, and the fares
are super affordable. I love how easy it is to book a ride and track
my driver in real time! &quot
    </p>
  </div>

  <div className="p-[10px] md:p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[247px]  md:min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[18px] md:text-[25px] font-bold">Chinwe A. –</span>  Business Professional
    </p>
    <p className="text[13px] md:text-[18px] leading-[150%] text-[#656565]">
    &quot As a businesswoman, I need a reliable and professional ride-hailing service, and
KoroRyde delivers every time. The rides are always smooth, and the drivers are
punctual. I highly recommend it for corporate travel &quot
    </p>
  </div>

  <div className="rounded-[10px] p-[10px] md:p-[20px] text-center min-w-[247px]  md:min-w-[713px]  w-full bg-[#F6F6F6] font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[18px] md:text-[25px] font-bold">Tunde E. –</span> First-Time User
    </p>
    <p className="text[13px] md:text-[18px] leading-[150%] text-[#656565]">
    &quot I was skeptical at first, but KoroRyde exceeded my expectations.
The sign-up process was seamless, and my first ride was hassle-free.
Definitely my go-to ride-hailing app from now &quot
    </p>
  </div>
</div>



{/*  */}
<div className="flex gap-[40px] overflow-x-scroll mb-[40px]">
  <div className="p-[10px] md:p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[247px]  md:min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[18px] md:text-[25px] font-bold">Grace M. –</span> Student
    </p>
    <p className="text[13px] md:text-[18px] leading-[150%] text-[#656565]">
    &quot KoroRyde is a lifesaver for students like me! The fares
are budget-friendly, and I always feel safe, especially with the in-app
safety features. I don’t have to worry about getting
around the city anymore. &quot
    </p>
  </div>

  <div className="p-[10px] md:p-[20px] rounded-[10px] bg-[#F6F6F6] min-w-[247px]  md:min-w-[713px] w-full text-center font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[18px] md:text-[25px] font-bold">Babatunde K. –</span>  Driver Partner
    </p>
    <p className="text-[13px] md:text-[18px] leading-[150%] text-[#656565]">
    &quot As a KoroRyde driver, I appreciate how fair the company is to its drivers. The
earnings are good, the app is easy to use, and I get to meet amazing passengers
every day. Best decision I made! &quot
    </p>
  </div>

  <div className="rounded-[10px] p-[10px] md:p-[20px] text-center min-w-[247px]  md:min-w-[713px] w-full bg-[#F6F6F6] font-[family-name:var(--font-bricolage-grotesque)]">  
    <p className="text-[#010101]"><span className="text-[18px] md:text-[25px] font-bold">Amina S –</span> Mother of Two
    </p>
    <p className="text[13px] md:text-[18px] leading-[150%] text-[#656565]">
    &quot I use KoroRyde whenever I need a safe and reliable ride with my kids.
The drivers are patient and professional, and I love that I can schedule rides in
advance. It makes life so much easier! &quot
    </p>
  </div>
</div>
</div>

<FooterBg />

{/* Footer */}
<Footer />
      </div>
      </OverallLayout>
    
  );
}



// text-7xl font-[family-name:var(--font-bricolage-grotesque)]