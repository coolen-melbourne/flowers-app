// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css"

// import Swiper core and required modules
import { Navigation, Pagination,  A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Elements from '../../scroll';





const Card = () => {


  useEffect(() => {
    AOS.init({duration:"1000", delay: "1000"})
  },[])


  return (
    <div className="w-full min-h-screen bg-[#F8F8F8] bg-fixed ">
        <div className="max-w-[1600px]  mx-auto h-[900px]  " data-AOS="fade-left">
          <div className=" ml-[585px] pt-[60px]  ">
            <h2 className="h-[73px]  font-[Cormorant Upright] font-[600px] text-[60px] leading-[72.66px] text-[#444444] mb-[40px] hover:text-red-500 cursor-pointer ">¿Por qué elegirnos?</h2>
            <p className="pl-[40px]  h-[27px] font-[Nunito] font-normal text-[20px] leading-[27px] text-[#9BABBF]">No solo entregamos flores. Nos preocupamos</p>
          </div>
  <div className='mt-[170px]' data-AOS="fade-right">
      <Swiper
         // install Swiper modules
         modules={[Navigation, Pagination,  A11y]}
         spaceBetween={50}
         slidesPerView={4}
         navigation
         
        >
            {Elements.map((element) => (
                <SwiperSlide key={element.key}>
                    <div className=' pl-[100px] items-center '>
                        <img className='' src={element.img_url} alt="" />
                    </div>
                </SwiperSlide>
            ))}
          
         
          
        </Swiper>
  </div>

        </div>


        <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: #D96581;
            } // Change color to red
          }
        `}
      </style>




    </div>
  )
}

export default Card
