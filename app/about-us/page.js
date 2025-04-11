import Image from "next/image";
import Header from "../Header";
import invest from "./../../public/assets/Invest.webp";
import vision from "./../../public/assets/vision.png";
import mission from "./../../public/assets/mission.png";
import Template, { TemplateTwo } from "./temp";
import empowering from "./../../public/assets/Enpowering.webp";
import delivery from "./../../public/assets/delivery.webp";
import sustainability from "./../../public/assets/sustainability.webp";
import social from "./../../public/assets/Social.webp";
import facebook from "./../../public/assets/facebook.webp";
import instagram from "./../../public/assets/instagram.webp";
import linkedln from "./../../public/assets/linkedin.webp";
import twitter from "./../../public/assets/twitter.webp";
import FooterBg from "../FooterBg";
import Footer from "../Footer";
import OverallLayout from "../OverallLayout";
import a1 from "./../../public/assets/a1.png";
import a2 from "./../../public/assets/a2.png";
import a3 from "./../../public/assets/a3.png";
import a4 from "./../../public/assets/a4.png";
import a5 from "./../../public/assets/a5.png";
import a6 from "./../../public/assets/a6.png";
import a7 from "./../../public/assets/a7.png";
import a8 from "./../../public/assets/a8.png";
import a9 from "./../../public/assets/a9.png";
import a10 from "./../../public/assets/a10.png";
import a11 from "./../../public/assets/a11.png";
import a12 from "./../../public/assets/a12.png";
import c1 from "./../../public/assets/c1.png";
import c2 from "./../../public/assets/c2.png";
import c3 from "./../../public/assets/c3.png";
import c4 from "./../../public/assets/c4.png";
import c5 from "./../../public/assets/c5.png";
import r1 from "./../../public/assets/r1.png";
import r2 from "./../../public/assets/r2.png";
import r3 from "./../../public/assets/r3.png";
import r4 from "./../../public/assets/r4.png";
import r5 from "./../../public/assets/r5.png";

const Page = () => {
  return (
    <OverallLayout>
      <div className="">
        <div
          className="lg:min-h-screen bg-no-repeat bg-cover  md:pt-[64px]  pt-[60px] "
          style={{}}
        >
          <div className="px-[20px] lg:px-[112px]  ">
            <Header isHomePage={false} />
          </div>
          <div className="mt-[100px] bg-[url('/assets/ServiceHeroBg.webp')] bg-cover py-[113px]">
            <p
              className="text-[#2D7CD0] text-[30px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    "
            >
              About Us
            </p>
            <p className="px-[20px] max-w-[1118px] mx-auto flex flex-col gap-[20px] text[13px] md:text-[18px] font-normal leading-[150%]  mt-[40px] text-center text-[#010101]">
              KoroRYDE is a technology company transforming the way people and
              goods move across Nigeria and Africa. Our innovative mobility and
              logistics platform connects riders, drivers, investors, and
              businesses through smart digital solutions.
              <span className="text-[#656565]">
                We provide seamless ride-hailing, delivery, freight, and
                investment opportunities while ensuring affordability, safety,
                and efficiency.
              </span>
            </p>
          </div>
          <Template title={"Why KoroRYDE?"} img={invest} position={1}>
            Whether you’re a rider, driver, business owner, or investor,
            KoroRYDE offers an opportunity to be part of Africa’s transportation
            revolution.
            <br />
            ✅ Eco-Friendly Transportation – We prioritize CNG-powered vehicles
            and electric bikes to reduce carbon emissions.
            <br />
            ✅ Driver Empowerment – Our platform allows drivers to own their
            vehicles, earn more, and access benefits such as insurance and
            training.
            <br />
            ✅ Affordable & Transparent Pricing – No hidden fees, no surge
            surprises! We offer fair, predictable pricing for riders.
            <br />
            ✅ Multiple Earning Opportunities – From riding and driving to
            investing in vehicles, KoroRYDE creates wealth-building
            opportunities for everyone.
            <br />
            ✅ Localized & Community-Driven – We understand the unique needs of
            African transportation and tailor our services to solve real
            problems.
            <br />
          </Template>

          <div className="mt-[100px] ">
            <p
              className="text-[#2D7CD0] text-[25px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    "
            >
              KoroRyde Impact
            </p>
            <p className="max-w-[1118px] mx-auto text-[#656565]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] mt-[40px] text-center">
              At KoroRYDE, we are more than just a ride-hailing and delivery
              platform—we are a movement dedicated to empowering communities,
              creating economic opportunities, and driving sustainable change.
              Our technology is transforming the way people move, work, and earn
              across Nigeria.
            </p>
          </div>
          {/* Impacts */}
          <div className="px-[20px]">
            <TemplateTwo
              title={"Empowering Drivers & Riders"}
              img={empowering}
              position={1}
            >
              We provide fair earnings and financial independence for thousands
              of drivers, couriers, and partners. Through KoroRYDE, drivers gain
              access to:
              <br />
              <br />
              ✅ Flexible income opportunities – Earn on your terms, with no
              fixed schedules.
              <br />
              ✅ Vehicle ownership programs – Drivers can own their cars or
              bikes through investment partnerships.
              <br />
              ✅ Safety & security features – Real-time tracking, SOS buttons,
              and verified drivers for peace of mind.
              <br />
              <br />
              Riders also enjoys:
              <br /> <br />
              ✅ Affordable, safe, and convenient transportation.
              <br />
              ✅ Transparent pricing – No hidden charges, no surge surprises.
              <br />
              ✅ Reliable services – Ride with ease, whether for work, errands,
              or social outings.
              <br />
            </TemplateTwo>
            {/*  */}

            <TemplateTwo
              title={"Revolutionizing Delivery Services"}
              img={delivery}
              position={2}
            >
              KoroRYDE Delivery makes it easy for businesses and individuals to
              send packages, groceries, and food seamlessly. Our impact
              includes:
              <br />
              <br />✅ Supporting small businesses by providing cost-effective
              logistics.
              <br /> ✅ Fast & reliable last-mile delivery solutions.
              <br /> ✅ Employment for couriers – creating more job
              opportunities in urban and rural areas.
            </TemplateTwo>
            <TemplateTwo
              title={"Driving Sustainability with CNG & EV Vehicles"}
              img={sustainability}
              position={1}
            >
              We are committed to a cleaner, greener future by promoting
              Compressed Natural Gas (CNG) and Electric Vehicles (EVs).
              <br />
              <br />
              ✅ Lower emissions – Helping reduce carbon footprints and improve
              air quality.
              <br />
              ✅ Affordable transportation – CNG & EV options mean lower fuel
              costs for drivers and cheaper fares for riders.
              <br />
              ✅ Encouraging eco-friendly investments – Investors can earn while
              contributing to sustainability.
              <br />
            </TemplateTwo>
            {/* Open */}
            <TemplateTwo
              title={"Corporate Social Responsibility (CSR) & Community Impact"}
              img={social}
              position={2}
            >
              KoroRYDE is deeply committed to giving back and making a
              difference in society. Our initiatives include:
              <br />
              <br />
              ✅ Empowerment programs – Providing job opportunities for youth
              and women.
              <br />
              ✅ Educational sponsorships – Supporting drivers with skill
              development and training.
              <br />
              ✅ Free & discounted rides – Partnering with government and NGOs
              for transport solutions in healthcare, education, and emergency
              services.
              <br />
            </TemplateTwo>
          </div>

          <div className="flex flex-col md:flex-row gap-[30px] md:gap-[60px] max-w-[1291px] mx-auto mt-[100px] mb-[50px] px-[20px]">
            <div className="bg-[#EAF2FA]  w-full rounded-2xl flex p-[20px] gap-5 items-center">
              <div>
                <Image
                  alt=""
                  className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                  src={mission}
                />
              </div>
              <div>
                <p className="font-[700] text-[20px] pb-[10px]">Our Mission</p>
                <p>
                  To deliver secure, affordable, and eco-conscious ride-hailing
                  and delivery services while empowering drivers, riders, and
                  investors.
                </p>
              </div>
            </div>

            <div className="bg-[#EAF2FA]  w-full rounded-2xl flex p-[20px] gap-5 items-center">
              <div>
                <Image
                  alt=""
                  className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                  src={vision}
                />
              </div>
              <div>
                <p className="font-[700] text-[20px] pb-[10px]">Our Vission</p>
                <p>
                  To be Africa’s leading mobility and logistics platform,
                  transforming transportation through innovation and
                  sustainability
                </p>
              </div>
            </div>
          </div>

          {/* HOW TO USE KORORYDE APP */}

          <div className="mt-[100px] ">
            <p
              className="text-[#2D7CD0] text-[25px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    "
            >
              How to use the KoroRYDE App
            </p>
            <p className="max-w-[800px] mx-auto text-[#656565] pb-[30px]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] text-center">
              KoroRYDE provides seamless, safe, and affordable ride-hailing
              services at your fingertips. Our technology connects riders with
              professional drivers for a smooth and convenient transportation
              experience.
            </p>
            <p className="font-[700] py-[20px] text-center text-[25px]">
              Step-by-Step Guide to Booking a Ride on KoroRYDE
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] ">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px] h-[300px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                1
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Open the App & Enter Your Destination
              </p>
              <p>- Open the koroRYDE app. </p>
              <p>- In the “Where to?” box, enter your destination. </p>
              <p>
                - View ride options, including economy, premium, or carpooling
                with details on price and estimated drop-off time.
              </p>
              <p>
                - Choose your preferred ride option and confirm your pickup.
              </p>
            </div>
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px] h-[300px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                2
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Get Matched with a Driver
              </p>
              <p>
                - A nearby KoroRYDE driver will receive and accept your
                request..{" "}
              </p>
              <p>
                - You’ll be notified once the driver is close to your location.
              </p>
              <p>- Track your driver’s location in real-time on the app.</p>
            </div>
          </div>

          <div className="flex flex-col my-[30px] md:flex-row items-center justify-center gap-[30px]  ">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px] h-[300px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                3
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Enjoy Your Ride
              </p>
              <p>
                - Verify the driver’s name and vehicle details before getting
                in.{" "}
              </p>
              <p>
                - The driver starts the ride and follows the most efficient
                route.{" "}
              </p>
              <p>- Relax and enjoy a comfortable, secure journey.</p>
            </div>
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px] h-[300px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                4
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Arrive at Your Destination
              </p>
              <p>- The driver drops you off safely at your location.</p>
              <p>
                - Cash or cashless? Pay directly through the app or in cash{" "}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-[30px] mb-[70px]">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px] h-[300px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                5
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Rate & Review Your Experience
              </p>
              <p>- Give feedback by rating your driver from 1 to 5 stars </p>
              <p>- Leave compliments or tips for excellent service. </p>
            </div>
          </div>

          {/* HOW TO USE KORORYDE DELIVERY */}

          <div className="mt-[100px] ">
            <p
              className="text-[#2D7CD0] text-[25px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center 
    "
            >
              How to use the KoroRyde Delivery App
            </p>
            <p className="max-w-[800px] mx-auto text-[#656565] pb-[30px]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] text-center">
              KoroRYDE Delivery makes sending and receiving packages fast,
              affordable, and hassle-free. Whether it’s food, groceries,
              parcels, or business logistics, our technology connects you with
              reliable couriers for efficient deliveries.
            </p>
            <p className="font-[700] py-[20px] text-center text-[25px]">
              Step-by-Step Guide to Sending a Delivery on KoroRYDE
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] ">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                1
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Open the App & Enter Delivery Details
              </p>
              <p>- Open the KoroRYDE Delivery app </p>
              <p>- Enter the pickup and drop-off locations. </p>
              <p>
                - Choose the type of package (small parcel, food, fragile items,
                etc).
              </p>
            </div>
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                2
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Choose a Delivery Option
              </p>
              <p>
                - Select the best delivery option based on speed and price.{" "}
              </p>
              <p>
                - Choose between motorbikes for small items or cars for larger
                packages
              </p>
              <p>- Confirm your order and request a courier.</p>
            </div>
          </div>

          <div className="flex flex-col my-[30px] md:flex-row items-center justify-center gap-[30px] ">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                3
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Get Matched with a Courier
              </p>
              <p>- A KoroRYDE courier nearby will accept your request </p>
              <p>
                - You’ll receive the courier’s details and estimated arrival
                time{" "}
              </p>
              <p>- Track your package in real-time as it moves.</p>
            </div>
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                4
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Package Pickup & Delivery
              </p>
              <p>- Hand over your package to the courier.</p>
              <p>
                - The courier follows the best route to ensure fast and secure
                delivery.{" "}
              </p>
              <p>- The recipient is notified once the package arrives.</p>
            </div>
          </div>

          <div className="flex justify-center gap-[50px] mb-[70px]">
            <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[500px]">
              <p className="rounded-[65%] bg-[#2D7CD0] py-[10px] px-[20px] text-white text-[25px] font-bold w-fit">
                5
              </p>
              <p className="py-[20px] text-[18px] font-[700]">
                Rate Your Experience
              </p>
              <p>- Give feedback by rating your courier’s service </p>
              <p>- Help us improve by leaving a review </p>
            </div>
          </div>

          <div className="py-[50px] md:py-[100px] mt-[100px] bg-[#133457]  ">
            <p className="text-[24px] md:text-[40px] font-[700] text-white text-center">
              Your Safety is Our priority at KoroRYDE
            </p>
            <p className="font-[400] text-[18px] py-[30px] text-white text-center max-w-[800px] m-[auto]">
              At KoroRYDE, safety is at the heart of everything we do. Whether
              you&apos;re a rider, driver, or delivery partner, we are committed
              to providing a secure, reliable, and comfortable experience. Our
              advanced safety measures ensure that every trip is protected,
              monitored, and backed by technology for your peace of mind.
            </p>
            <p className="text-[25px] font-[700] text-center text-white">
              Safety Features for Riders & Drivers
            </p>
            {/* <div className="flex justify-center gap-[20px] my-[20px]"> */}
            <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white h-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a1}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Driver & Rider Verification
                </p>
                <p>
                  Every driver undergoes a strict screening process, including
                  background checks and document verification. Riders must also
                  register with valid identification.
                </p>
              </div>
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white h-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a2}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Real-Time Ride Tracking
                </p>
                <p>
                  Share your ride details with family or friends for added
                  security. Your trip is tracked from pickup to drop-off.
                </p>
              </div>
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white h-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a3}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                   In-App SOS Button
                </p>
                <p>
                  Instantly alert emergency services or our safety response team
                  if you ever feel unsafe during a ride.
                </p>
              </div>
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white h-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a4}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  24/7 Support Team
                </p>
                <p>
                  Our support team is available around the clock to assist with
                  any safety concerns.
                </p>
              </div>
            </div>
            <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a5}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Two-Way Ratings & Reviews
                </p>
                <p>
                  Both drivers and riders can rate each other after every trip.
                  Low-rated users are flagged and reviewed to maintain high
                  safety standards.
                </p>
              </div>
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a6}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Strict Vehicle Inspection
                </p>
                <p>
                  All vehicles must meet roadworthiness standards and undergo
                  regular inspections for safety and performance
                </p>
              </div>
              <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={a7}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Mask & Sanitization Standards
                </p>
                <p>
                  Health and hygiene are key. Drivers are encouraged to maintain
                  clean vehicles, and hand sanitizers are available for use.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[25px] font-[700] py-[30px] text-center text-white">
                Safety Features for Riders & Drivers
              </p>
              <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
                <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                  <div>
                    <Image
                      alt=""
                      // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                      src={a8}
                    />
                  </div>
                  <p className="py-[20px] text-[18px] font-[700]">
                    Follow all traffic regulations and speed limits
                  </p>
                </div>
                <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                  <div>
                    <Image
                      alt=""
                      // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                      src={a9}
                    />
                  </div>
                  <p className="py-[20px] text-[18px] font-[700]">
                    Do not drive under the influence of alcohol or drugs.
                  </p>
                </div>
                <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                  <div>
                    <Image
                      alt=""
                      // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                      src={a10}
                    />
                  </div>
                  <p className="py-[20px] text-[18px] font-[700]">
                    Always use seatbelts and encourage passengers to do the
                    same.
                  </p>
                </div>
              </div>

              <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
                <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                  <div>
                    <Image
                      alt=""
                      // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                      src={a11}
                    />
                  </div>
                  <p className="py-[20px] text-[18px] font-[700]">
                    Avoid distractions while driving, such as using your phone.
                  </p>
                </div>
                <div className="bg-[#2D7CD0] rounded-[20px] p-[20px] max-w-[300px] text-white">
                  <div>
                    <Image
                      alt=""
                      // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                      src={a12}
                    />
                  </div>
                  <p className="py-[20px] text-[18px] font-[700]">
                    Ensure proper vehicle maintenance and report issues
                    immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[100px] ">
            <p
              className="text-[#2D7CD0] text-[25px] md:text-[50px] font-bold leading-[150%]
    font-[family-name:var(--font-bricolage-grotesque)] text-center max-w-[800px] mx-auto
    "
            >
              Careers at KoroRYDE – Join the Future of Mobility!
            </p>
            <p className="max-w-[800px] mx-auto text-[#656565] pb-[30px]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] text-center">
              At KoroRYDE, we are building the future of smart transportation,
              delivery, and sustainable mobility, and we want YOU to be part of
              this exciting journey!
            </p>
            <p className="font-[700] py-[20px] text-center text-[25px]">
              Why Work With Us?
            </p>
            <p className="max-w-[800px] mx-auto text-[#656565] pb-[30px]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] text-center">
              Joining KoroRYDE means being part of an innovative, fast-growing
              company that is transforming ride-hailing, delivery services, and
              eco-friendly transportation across Africa
            </p>

            <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={c1}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Innovative Environment
                </p>
                <p>Work with cutting-edge technology in the mobility sector</p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={c2}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Career Growth
                </p>
                <p>
                  We provide learning, mentorship, and opportunities to advance
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={c3}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Impact-Driven
                </p>
                <p>
                  Make a difference in communities through empowerment and
                  sustainability
                </p>
              </div>
            </div>

            <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={c4}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Diverse & Inclusive
                </p>
                <p>
                  We celebrate creativity, collaboration, and individuality.
                </p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={c5}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Competitive Benefits
                </p>
                <p>
                  Enjoy attractive salaries, flexible work options, and great
                  perks.
                </p>
              </div>
            </div>
            <p className="font-[700] py-[20px] text-center text-[25px]">
              Career Opportunities
            </p>
            <p className="max-w-[700px] mx-auto text-[#656565] pb-[30px]  flex flex-col gap-[20px] text-[18px] font-normal leading-[150%] text-center">
              We’re always looking for talented and passionate individuals to
              join our team! Explore exciting roles in:
            </p>
            <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={r1}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Tech & Engineering
                </p>
                <p>Data Science, Software Development, App & Web Development</p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={r2}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Operations & Logistics
                </p>
                <p>Fleet Management, Customer Support, Driver Relations</p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={r3}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Marketing & Sales
                </p>
                <p>
                  Social Media, Growth Marketing, Influencer & Partner Relations
                </p>
              </div>
            </div>
            <div className="flex flex-col my-[20px] md:flex-row items-center justify-center gap-[30px] ">
              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={r4}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Finance & Investment
                </p>
                <p>Investor Relations, Business Development</p>
              </div>

              <div className="bg-[#F6F6F6] rounded-[20px] p-[20px] max-w-[300px]">
                <div>
                  <Image
                    alt=""
                    // className=" rounded-[10px] w-[500px] h-[150px] object-cover"
                    src={r5}
                  />
                </div>
                <p className="py-[20px] text-[18px] font-[700]">
                  Human Resources
                </p>
                <p>Talent Acquisition, Training & Development</p>
              </div>
            </div>
            <div className="bg-[#133457] mb-[100px] max-w-[1258px] font-[family-name:var(--font-bricolage-grotesque)] mx-auto mt-[100px] py-[50px] px-[20px] md:px-[100px] flex flex-col md:flex-row items-center gap-[20px] md:gap-[200px]">
              <p className="text-[#FEFEFE] w-full font-bold font text-[50px] [text-shadow:3px_2px_0px_0px_#2D7CD0]">
                Partner with us. Ride with us. Invest in the future.
              </p>
              <div className="w-full flex flex-col gap-[20px]">
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

          <FooterBg />
          <Footer />
        </div>
      </div>
    </OverallLayout>
  );
};

export default Page;
