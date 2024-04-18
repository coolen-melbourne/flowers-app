// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import trunk from "../../assets/images/trunk.png";

import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Products from "../../data.js";

const React = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "1000" });
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto  " data-AOS="fade-right\">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
      >
        {Products.map((product) => (
          <SwiperSlide key={product.key}>
            <div className="ml-[100px] ">
              <img src={product.img_url} alt="product.title" />
              <div className="ml-[20px] mt-[20px]" data-AOS="fade-left">
                <h2 className="max-w-[150px] h-[25px] text-black font-[Nunito] font-bold text-[18px] leading-[24px]">
                  {product.title}{" "}
                </h2>
                <p className='className="text-[#818181] font-normal text-[14px] leading-[21px] mb-[10px]'>
                  {product.description}{" "}
                </p>
                <p className="text-[#D96581] font-[Poppins] font-normal text-[14px] leading-[21px]">
                  {" "}
                  {product.category}{" "}
                </p>
                <p className="text-black font-[Poppins] font-[600px] text-[22px] leading-[33px] mb-[10px] ">
                  {" "}
                  ${product.price}{" "}
                </p>
                <div className="flex items-center gap-[26px] ">
                  <button className="w-[220px] h-[44px] bg-[#D96581] rounded-[10px] text-white  hover:bg-white hover:text-[#D96581] hover:border hover:border-[#D96581] transition-all duration-200 flex items-center">
                    <p className="pl-[53px]">Agregar al carrito</p>
                  </button>
                  <img className="animate-trans-right" src={trunk} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default React;
