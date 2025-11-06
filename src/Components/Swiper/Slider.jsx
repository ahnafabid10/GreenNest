import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../../assets/ivy-4152057.jpg"
import img2 from "../../assets/ivy-8229375.jpg"
import img3 from "../../assets/leaves-1835780.jpg"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img className='w-full h-[90vh] object-cover' src={img1} alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Bring Home Serenity
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
              Fill your home with calm, air-purifying plants that refresh your space and soul.
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh] object-cover ' src={img2} alt="" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Grow a Greener You
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
              Discover easy-care plants that thrive with your lifestyle — even on busy days.
            </p>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-[90vh] object-cover' src={img3} alt="" />
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Small Pots, Big Smiles
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
              Bring charm to every corner with our tiny indoor plants made for cozy spaces.
            </p>
          </div>
      </SwiperSlide>
    </Swiper>
    );
};

export default Slider;