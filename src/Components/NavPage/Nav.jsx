import img from "../../assets/images/logo coral png 1.png";
import union from "../../assets/images/Union.png";
import trunk from "../../assets/images/trunk.png";
import cash from "../../assets/images/cash.png";
import person from "../../assets/images/person.png";

const Nav = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/*here begin of header */}
      <div className="flex items-center mt-[38px] mb-[30px]">
        <img className=" ml-[106px]  " src={img} alt="site-logo" />
        <div className="flex items-center gap-[43px]">
          <input
            className="w-[645px] h-[50px] border bg-[#F8F8F8] rounded-[10px] pt-[14px] pb-[14px] pl-[20px] ml-[201px]"
            type="text"
            placeholder="¿Qué andas buscando?"
          />
          <button className="w-[200px] h-[50px] flex items-center justify-between pl-[37px] pr-[43px] group-hover:text-white  border border-[#D96581] rounded-[10px] ">
            <img src={union} alt="" />
            <p className="text-[#D96581] font-[Nunito] font-[700px] text-[16px] leading-[21px]  ">
              Suecia VIP
            </p>
          </button>
        </div>
        <div className="flex items-center  ml-[86px] gap-[30px]">
          <button className="">
            <img
              className="w-[34px] h-[29px] ml-[15px] animate-trans-right"
              src={trunk}
              alt=""
            />
            <p className="text-[#D96581] font-[Nunito] font-[700px] text-[12px] leading-[16.37px] ">
              Seguimiento
            </p>
          </button>
          <button className="">
            <img
              className="w-[34px] h-[34px] ml-[4px] animate-trans-right"
              src={cash}
              alt=""
            />
            <p className="text-[#D96581] font-[Nunito] font-[700px] text-[12px] leading-[16.37px]">
              Carrito
            </p>
          </button>
          <button className="">
            <img
              className="w-[34px] h-[34px] ml-[4px] animate-trans-right"
              src={person}
              alt=""
            />
            <p className="text-[#D96581] font-[Nunito] font-[700px] text-[12px] leading-[16.37px]">
              Paloma
            </p>
          </button>
        </div>
      </div>
      {/*here end of header */}
    </div>
  );
};

export default Nav;
