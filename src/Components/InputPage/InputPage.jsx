import Tik from "../../assets/images/tik_tok.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";

import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css";

const InputPage = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "1000" });
  }, []);
  return (
    <div className=" justify-center items-center pb-5 translate-y-[200px] outline-none   ">
      <div
        className="w-[1400px] mx-auto h-[420px]  pt-[60px]   bg-[#D96581] rounded-[40px] justify-center items-center"
        data-AOS="fade-right"
      >
        <h2 className="text-center font-[Cormorant Upright] font-bold text-[60px] leading-[72.66px] text-white">
          Suscríbete a nuestro newsletter
        </h2>

        <div
          className="flex  items-center justify-center pt-[60px]"
          data-AOS="fade-left"
        >
          <label className="relative  ">
            <input
              required
              type="text"
              className="outline-none text-lg py-2 
            px-4 border-2 border-gray-400 bg-inherit  rounded-[20px] focus:border-gray-600 duration-200 peer bg-white w-[460px] h-[60px]"
            />
            <span
              className="absolute left-0 top-8 px-1 text-lg uppercase tracking-wide peer-focus:text-indigo-200 pointer-events-none  duration-200 peer-focus:text-sm 
             peer-focus:-translate-y-5 bg-none text-[#9BABBF] ml-2 peer-valid:text-sm peer-valid:-translate-y-5"
            >
              Email
            </span>

            <button className="font-[Nunito] font-[500px] text-[16px] h-[60px] w-[140px] leading-[21.82px] text-[#fff] m-5 p-2 border border-[#9BABBF] rounded-[10px] hover:bg-[#fff] hover:text-[#9BABBF]">
              Suscribirme
            </button>
          </label>
        </div>

        <div
          className="flex items-center justify-center gap-[46px] cursor-pointer "
          data-AOS="fade-up"
        >
          <img
            className="max-w-[50px] h-[50px] hover:shadow-2xl hover:shadow-white rounded-lg"
            src={Tik}
            alt=""
          />
          <img
            className="max-w-[50px] h-[50px] hover:shadow-2xl hover:shadow-white rounded-lg"
            src={Instagram}
            alt=""
          />
          <img
            className="max-w-[50px] h-[50px] hover:shadow-2xl hover:shadow-white rounded-lg"
            src={Facebook}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default InputPage;
