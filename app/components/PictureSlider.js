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
const pictures = [picture1, picture2, picture3, picture4]
const ImageSlider = () => {
    return  <Swiper
    modules={[Autoplay]}
    spaceBetween={20}
    breakpoints={{
      320: { slidesPerView: 1.5, spaceBetween: 10 }, // Small screens
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
      1024: { slidesPerView: 3.7, spaceBetween: 30 }, // Large screens
    }}
    autoplay={{ delay: 3000 }}
    loop={true}
  >
    {pictures.map((picture, index) => (
      <SwiperSlide key={index}>
        <Image
          src={picture}
          alt=""
          width={300}
          height={278}
          className="w-full h-auto md:h-[278px] object-cover rounded-lg"
        />
      </SwiperSlide>
    ))}
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
    const images = [picture8, picture9, picture10, picture11];
  
    return (
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10 }, // Small phones
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 3.7, spaceBetween: 30 }, // Large screens
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt=""
              width={300}
              height={278}
              className="w-full h-auto md:h-[278px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default ImageSliderThree;