import Line from "../../assets/images/Line 48.png";

const category = () => {
  return (
    <div className='max-w-[1600px] mx-auto'>

      {/* here start Cumpleanos section*/}
    <div className='font-[Nunito] flex items-center w-[1413px] justify-between gap-[40px] pl-[100px] pt-[56px]'>
        <h2 className='font-[600] text-[40px] leading-[54px] text-[#DB6E88] w-[320px] h-[55px]'>CUMPLEAÑOS</h2>
        <img className='h-[100px]' src={Line} alt="" />
       <div  className='font-[Nunito]'>
          <p className=' font-normal text-[18px] leading-[24px] text-[#000000]'>Encuentra arreglos florales y regalos para celebrar cualquier ocasion especial con envios a domicilio.</p>
          <p className='pt-[15px] font-normal text-[16px] leading-[21px] text-[#818181] w-[1030px]'>Hermosos arregñps y regalos perfectos para celebrar ese dia especial. Nuestros arreglos están culdadosamente elaborados por expertos floistas. eligiendo siempre Ias flores mas frescas y de la mas alta calidad. La mejor experiencia de compra y envio de regalos en Benito Juarez.</p>
       </div>
      </div>

      
      {/* here start select section*/}
      <div className='flex items-center gap-[20px] pl-[820px] pt-[52px]'>
        <span className='w-[88px] h-[22px] text-[#818181] font-normal text-[16px] leading-[21px] font-[Nunito]  '>Ordenar por</span>

        <div className='gap-[20px] flex items-center'>
          <div>
            <select className='border border-[#9BABBF] rounded-lg w-[220px] h-[44px] pl-[20px] pr-[20px]' name="" id="">
              <option value="">$ Mayor a menor</option>
              <option value="">$ Mayor a menor</option>
            </select>
          </div>

          <button className='border border-[#9BABBF] rounded-lg w-[220px] h-[44px] pl-[20px] pr-[20px]'>
          $ Mayor a menor
          </button>
        </div>
      </div>
    </div>
  )
}

export default category
