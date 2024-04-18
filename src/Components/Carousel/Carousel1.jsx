import trunk from "../../assets/images/trunk.png";
import flower from "../../assets/images/flowers.png";
import rec from "../../assets/images/Rectangle_9.png";
import tangle from "../../assets/images/tangle.svg";

const Carousel = () => {
  return (
    <div className="max-w-[1600px] mx-auto">
      {/** here begin of carousel section */}
<div className="flex items-center gap-[40px] ml-[100px]">
  <div className="w-[330px] h-[550px] bg-[#F8F8F8]">
    <img src={flower} alt="" />
    <div>
      <div className="ml-[20px] mt-[16px]">
        <h2 className="max-w-[150px] h-[25px] text-black font-[Nunito] font-bold text-[18px] leading-[24px]">Bouquet Rainbow</h2>
        <p className="text-[#818181] font-normal text-[14px] leading-[21px] mb-[10px]">Compra hoy, entrega cuando quieras</p>
        <p className="text-[#D96581] font-[Poppins] font-normal text-[14px] leading-[21px]">!Entrega el Mismo Día!</p>
        <span className="text-black font-[Poppins] font-[600px] text-[22px] leading-[33px] mb-[10px]">$19.990</span>
      </div>

      <div className="flex items-center gap-[26px] ml-[20px] mt-[20px]">
        <button className="w-[220px] h-[44px] bg-[#D96581] rounded-[10px] text-white  hover:bg-white hover:text-[#D96581] hover:border hover:border-[#D96581] transition-all duration-200 ">Agregar al carrito</button>
        <img className="animate-trans-right" src={trunk} alt="" />
      </div>
    </div>
    

  </div>

  <div className="w-[330px] h-[550px] bg-[#F8F8F8]">
    <img src={rec} alt="" />
    <div>
      <div className="ml-[20px] mt-[16px]">
        <h2 className="max-w-[150px] h-[25px] text-black font-[Nunito] font-bold text-[18px] leading-[24px]">Bouquet Rainbow</h2>
        <p className="text-[#818181] font-normal text-[14px] leading-[21px] mb-[10px]">Compra hoy, entrega cuando quieras</p>
        <p className="text-[#D96581] font-[Poppins] font-normal text-[14px] leading-[21px]">!Entrega el Mismo Día!</p>
        <span className="text-black font-[Poppins] font-[600px] text-[22px] leading-[33px] mb-[10px]">$19.990</span>
      </div>
      <div className="flex items-center gap-[26px] ml-[20px] mt-[20px]">
        <button className="w-[220px] h-[44px] bg-[#D96581] rounded-[10px] text-white  hover:bg-white hover:text-[#D96581] hover:border hover:border-[#D96581] transition-all duration-200 ">Agregar al carrito</button>
        <img className="animate-trans-right" src={trunk} alt="" />
      </div>
    </div>
    

  </div>

  <div className="w-[330px] h-[550px] bg-[#F8F8F8]">
    <img src={tangle} alt="" />
    <div>
      <div className="ml-[20px] mt-[16px]">
        <h2 className="max-w-[150px] h-[25px] text-black font-[Nunito] font-bold text-[18px] leading-[24px]">Bouquet Rainbow</h2>
        <p className="text-[#818181] font-normal text-[14px] leading-[21px] mb-[10px]">Compra hoy, entrega cuando quieras</p>
        <p className="text-[#D96581] font-[Poppins] font-normal text-[14px] leading-[21px]">!Entrega el Mismo Día!</p>
        <span className="text-black font-[Poppins] font-[600px] text-[22px] leading-[33px] mb-[10px]">$19.990</span>
      </div>
      <div className="flex items-center gap-[26px] ml-[20px] mt-[20px]">
        <button className="w-[220px] h-[44px] bg-[#D96581] rounded-[10px] text-white  hover:bg-white hover:text-[#D96581] hover:border hover:border-[#D96581] transition-all duration-200 ">Agregar al carrito</button>
        <img className="animate-trans-right" src={trunk} alt="" />
      </div>
    </div>
    

  </div>
  <div className="w-[330px] h-[550px] bg-[#F8F8F8]">
    <img src={flower} alt="" />
    <div>
      <div className="ml-[20px] mt-[16px]">
        <h2 className="max-w-[150px] h-[25px] text-black font-[Nunito] font-bold text-[18px] leading-[24px]">Bouquet Rainbow</h2>
        <p className="text-[#818181] font-normal text-[14px] leading-[21px] mb-[10px]">Compra hoy, entrega cuando quieras</p>
        <p className="text-[#D96581] font-[Poppins] font-normal text-[14px] leading-[21px]">!Entrega el Mismo Día!</p>
        <span className="text-black font-[Poppins] font-[600px] text-[22px] leading-[33px] mb-[10px]">$19.990</span>
      </div>
      <div className="flex items-center gap-[26px] ml-[20px] mt-[20px]">
        <button className="w-[220px] h-[44px] bg-[#D96581] rounded-[10px] text-white hover:bg-white hover:text-[#D96581] hover:border hover:border-[#D96581] transition-all duration-200  ">Agregar al carrito</button>
        <img className="animate-trans-right" src={trunk} alt="" />
      </div>
    </div>
  </div>
</div>
{/** here begin of carousel section */}
    </div>
  )
}

export default Carousel
