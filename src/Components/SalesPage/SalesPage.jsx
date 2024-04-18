import { Link } from "react-router-dom";
import flowers from "../../assets/images/flowers.png";
import rextan from "../../assets/images/Rectangle_9.png";
import tang from "../../assets/images/tangle.svg";
import trunk from "../../assets/images/trunk.png";

import { useState } from "react";
//import slider from npm slider
import Slider from "react-slider";

const SalesPage = () => {
  const MIN = 0;
  const MAX = 10000;
  const [values, setvalues] = useState([MIN, MAX]);

  return (
    <div className="max-w-[1403px] mx-auto h-[2615px]">
      <div className="flex gap-[100px] ">
        <div className="w-[330px] h-[840px] shadow shadow-[#9BABBF4D] pl-[20px]">
          <h2 className="font-[Nunito] font-bold text-[16px] leading-[21px] pt-[20px]">
            Filtrlar
          </h2>
          <input
            className="w-[290px] h-[44px] bg-[#F8F8F8] m-[10px] p-1 border-2 rounded-lg "
            type="text"
            id="filter"
            placeholder="Qidirish ...."
          />
          <h2 className="font-[Nunito] font-bold text-[16px] leading-[21px] pt-[20px]">
            Narx ozgarishi
          </h2>

          <div className="app">
            <div className="box">
              <div className={"values"}>
                {values[0]} UZS- {setvalues[0]}
              </div>
              <Slider
                className={"slider"}
                onChange={setvalues}
                value={values}
                min={MIN}
                max={MAX}
              />
            </div>
          </div>

          <div className=" w-[290x] h-[2px ] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black"></div>
        </div>

        <div className="w-[990x]">
          <div className=" flex items-center gap-[20px] pt-[20px] ">
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={flowers} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>

                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={rextan} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={tang} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-[20px] pt-[20px]">
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={flowers} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={rextan} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={tang} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-[20px] pt-[20px]">
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={flowers} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={rextan} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={tang} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-[20px] pt-[20px] ">
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={flowers} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={rextan} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[330px] h-[550px] bg-[#F8F8F8] rounded-lg">
              <img src={tang} alt="" />
              <div className="pl-[20px]">
                <h2 className="font-[Nunito] font-bold text-[18px] leading-[24px] pt-[16px]">
                  O'sha kuni yetkazib berish!
                </h2>
                <p className="font-[Poppins] font-normal text-[14px] leading-[21px]">
                  Bugun xarid qiling, xohlagan vaqtda yetkazib bering!
                </p>
                <p className=" text-[#D96581] font-[Poppins] font-normal leading-[21px] pt-[10px]">
                  Kun guldastasi
                </p>
                <p className="font-[Poppins] font-semibold  text-[22px] leading-[33px] pt-[10px]">
                  $19.990
                </p>
              </div>
              <div className="flex items-center gap-[20px] pt-[20px] pl-[20px]">
                <button className="px-3 rounded-lg text-white bg-[#D96581] font-[Nunito] font-[500px] text-[14px] leading-[19px] w-[220px] h-[44px]">
                  Savatchaga qo'shish
                </button>
                <div className="w-[44px] h-[44px] rounded-lg py-2 px-2 ">
                  <img className="w-[24px] h-[22px]" src={trunk} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPage;
