import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css";

//marquee tag which can help to scroll many items from to head to bottom without any code

const Linear = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "1000" });
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto">
      {/*here start a linear-gradient*/}
      <div>
        <div className="w-[1600px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black "></div>
      </div>

      {/*here end a linear-gradient*/}

      {/* ?here begin of navigation panel*/}
      <div
        className={`flex items-center  w-[1600px] pl-[320px] pr-[319px] justify-between font-[Nanito] font-normal text-[16px] leading-[21px] mt-[27px] mb-[27px]`}
        data-AOS="zoom-in-right"
        data-aos-anchor=".example-selector"
      >
        <button className="hover:text-[#D96581] transition-all duration-400">
          novedades
        </button>
        <button className="hover:text-[#D96581] transition-all duration-400">
          mas vendidos
        </button>
        <button className="hover:text-[#D96581] transition-all duration-400">
          cumpleaños
        </button>
        <button className="hover:text-[#D96581] transition-all duration-400">
          aniversario
        </button>
        <button className="hover:text-[#D96581] transition-all duration-400">
          Ofertas
        </button>
        <button className="hover:text-[#D96581] transition-all duration-400">
          porque sí
        </button>
      </div>

      {/*here start a linear-gradient*/}
      <div>
        <div className="w-[1600px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black "></div>
      </div>
      {/*here end a linear-gradient*/}
    </div>
  );
};

export default Linear;
