'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import picture1 from "./../../public/assets/picture1.png"
import picture2 from "./../../public/assets/picture2.png"
import picture3 from "./../../public/assets/picture3.png"
import picture4 from "./../../public/assets/picture4.png"
import picture6 from "./../../public/assets/picture6.png"
import picture7 from "./../../public/assets/picture7.png"
import picture8 from "./../../public/assets/picture8.png"
import picture9 from "./../../public/assets/picture9.png"
import picture10 from "./../../public/assets/picture10.png"
import picture11 from "./../../public/assets/picture11.png"  
import picture5 from "./../../public/assets/picture5.png"

const ImageSlider = () => {
    return  <Swiper
                modules={[ Autoplay]}
                spaceBetween={50}
                slidesPerView={3.7}
                navigation={false}
                pagination={false}
                autoplay={{ delay: 3000 }}
                loop
            >
            <SwiperSlide><Image src={picture1} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide>
            <SwiperSlide><Image src={picture2} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide>
            <SwiperSlide><Image src={picture3} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide>
            <SwiperSlide> <Image src={picture4} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/>  </SwiperSlide>
            </Swiper>
}

// export const ImageSliderTwo = () => {
//     return  <Swiper
//                 // modules={[ Autoplay]}
//                 // spaceBetween={1}
//                 // slidesPerView={3}
//                 // autoplay={{ delay: 4000 }}
//             >

//             {/* <SwiperSlide><Image src={picture7} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide> */}

//             </Swiper>
// }

export const ImageSliderThree = () => {
    return  <Swiper
                modules={[ Autoplay]}
                spaceBetween={50}
                slidesPerView={3.7}
                loop
                navigation={false}
                pagination={false}
                autoplay={{ delay: 5000 }}
            >
            <SwiperSlide><Image src={picture8} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide>
            <SwiperSlide><Image src={picture9} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide>
            <SwiperSlide><Image src={picture10} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/></SwiperSlide>
            <SwiperSlide> <Image src={picture11} alt="" className="min-w-[150px] md:min-w-[initial] h-[85px] md:h-[278px] md:min-h-[initial] object-cover"/>  </SwiperSlide>
            </Swiper>
}

export default ImageSlider