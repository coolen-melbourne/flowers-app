import icon from "../../assets/images/icon.svg";
import rex1 from "../../assets/images/Rectangle 5.png";
import kel from "../../assets/images/kalendar.png";

import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css";

//import a link from react router dom
import { Link } from "react-router-dom";

const Main = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "1000" });
  }, []);

  return (
    <div className="max-w-[1600px] mx-auto" data-AOS="fade-right">
      {/*begin of first section in main */}
      <div className="w-[1600px] flex items-center ">
        <div className="block ">
          <h2 className="w-[491px] mb-[22px] h-[61px] font-[Cormorant Upright] font-bold text-[50px] leading-[60px]">
            Florería Suecia
          </h2>
          <p className="w-[460px] text-[#9BABBF] h-[150px] font-[Nunito] font-normal text-[20px] leading-[24px] ">
            ¿Necesitas regalar algo y no sabes qué? Tenemos todo para que puedas
            elegir el regalo perfecto de forma rápida y sencilla. Además podemos
            entregar hoy mismo si deseas
          </p>
          <Link to="/Category">
            <button className="bg-[#D96581] flex items-center w-[260px] h-[60px]  rounded-[30px] ">
              <h2 className="cursor-wait max-w-[200px] h-[22px] text-[white] font-[Nunito] font-[700px] text-[16px] leading-[21px] ml-[46px] gap-[10px]">
                Tanlash bolimiga o'ting
              </h2>
              <img
                className="w-[20px] h-[18px] animate-trans-right"
                src={icon}
                alt=""
              />
            </button>
          </Link>
        </div>
        <img className="translate-x-[350px] " src={rex1} alt="" />
      </div>

      {/*end of first section in main */}

      {/*begin of new section in main */}

      <div className="w-[1410px] h-[110px] bg-[#444444] rounded-[20px] ml-[104px] flex gap-[40px] items-center -translate-y-[50px]">
        <h2 className="font-[Poppins] font-bold mt-[25px] text-[20px] leading-[30px] text-[white]  ml-[40px] ">
          BUSCA TU REGALO
        </h2>
        <div className="flex items-center gap-[20px]">
          <div>
            <h2 className="text-[#C8CED4] w-[101px] h-[19px] mb-[10px] ">
              ¿Donde envías?
            </h2>
            <input
              className="w-[260px] h-[40px] text-[#9BABBF] rounded-[10px] pl-[20px] "
              type=" text"
              placeholder="Comuna"
            />
          </div>

          <div>
            <h2 className="text-[#C8CED4] w-[101px] h-[19px] mb-[10px]">
              Ocasión
            </h2>

            <select className="w-[260px] h-[40px] text-[#9BABBF] rounded-[10px] pl-[20px]">
              <option value="someOption">Ocasion</option>
              <option value="otherOption">Ocasion</option>
            </select>
          </div>

          <div>
            <h2 className="text-[#C8CED4] w-[101px] h-[19px] mb-[10px]">
              ¿Cuando debe llegar?
            </h2>
            <label className="flex items-center " htmlFor="">
              <input
                className="w-[230px] h-[40px] rounded-s-[10px] pl-[20px]"
                type="text"
                placeholder="Lunes, 21 feb"
              />
              <img
                className="bg-[white] h-[40px] border  rounded-end-[10px]"
                src={kel}
                alt=""
              />
            </label>
          </div>
          <button className="w-[260px] h-[40px] bg-[#D96581] mt-[25px] rounded-[10px] font-[Nunito] font-[500px] text-[16px] leading-[21px] text-white hover:bg-white hover:text-[#D96581] transition-all duration-100 hover:border hover:border-red-900">
            encontrar regalo
          </button>
        </div>
      </div>

      {/*end of new section in main */}
    </div>
  );
};

export default Main;
