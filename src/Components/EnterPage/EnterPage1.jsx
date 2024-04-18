import img from "../../assets/images/logo coral png 1.png";
import google from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

const EnterPage1 = () => {
  return (
    <div
      style={{ backgroundImage: `url` }}
      className={`flex max-w-6xl mx-auto w-[1600px]  pt-[35px] gap-4  `}
    >
      <div className=" w-[800px] h-[900px] ml-[200px]  pl-[190px]  ">
        <img className="pl-[140px]" src={img} alt="" />
        <div className="font-[Nunito]   pl-[100px]   ">
          <h2 className="font-bold text-[30px] leading-[40px] text-[#D96581] mt-[28px]">
            Hush kelibsiz!
          </h2>
          <p className="font-normal text-[18px] leading-[24px] text-[#9BABBF] mt-[10px]">
            Create by CEO Coolen
          </p>
        </div>

        {/*here start a email place and code place */}
        <div className=" font-[Nunito] font-normal text-[14px] leading-[19px]">
          <p className="  mt-[42px] mb-[5px]">Email</p>
          <input
            className="w-[400px] h-[50px] bg-[#F8F8F8] rounded-[10px] pt-[14px] pb-[14px] pl-[20px]"
            type="text"
            placeholder="Emailingizni kiriting"
            required
          />
        </div>
        <div className=" font-[Nunito] font-normal text-[14px] leading-[19px]">
          <p className=" mt-[30px] mb-[5px]">Parol</p>
          <input
            className="w-[400px] h-[50px] bg-[#F8F8F8] rounded-[10px] pt-[14px] pb-[14px] pl-[20px]"
            type="text"
            placeholder="12345678"
            required
          />
        </div>

        {/*here start a check place  */}
        <div className="font-[Nonito]">
          <h2 className=" text-left  w-[177px] h-[25px] font-bold text-[18px] leading-[24px] text-[#D96581] mt-[26px] mb-[29px] ">
            Parolni qayta tiklash
          </h2>
          <Link to="/home-page">
            <button className=" cursor-wait w-[400px] h-[50px] rounded-[10px] bg-[#D96581] text-white font-normal text-[18px] leading-[24px] ">
              Kirish
            </button>
          </Link>
          <button className="flex items-center  border w-[400px] h-[50px] rounded-[10px] text-[#D96581] font-normal mt-[34px] text-[18px] leading-[24px]  ">
            <img
              className=" w-[23px] h-[24px] mt-[13px] mr-[83px] mb-[13px] ml-[20px] "
              src={google}
              alt=""
            />
            <span className=" pt-[14px] pb-[14px]">Google orqali kirish</span>
          </button>
        </div>

        {/*here start a link place  */}
        <div className="flex items-center font-[Nunito] gap-[10px] mt-[20px] mb-[175px] cursor-pointer">
          <p className="font-normal text-[14px] leading-[19px] hover:underline transition-all duration-100">
            Hali hisobingiz yo'qmi?
          </p>
          <p className="font-bold text-[14px] leading-[19px] text-[#D96581] hover:underline transition-all duration-200">
            Ro'yxatdan o'tish bepul
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnterPage1;
