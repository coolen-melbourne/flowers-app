import AllFlower from "../../assets/images/allFlowers.svg";
import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css"


const Section = () => {
  

  useEffect(() => {
    AOS.init({duration:"1000", delay: "1000"})
  },[])


  return (
    <div className="max-w-[1600px] mx-auto h-[600px] bg-sticky">
      
      <div className="text-center mt-[100px] "data-AOS="fade-right"> 

        <h2 className="font-[Cormorant Upright] mb-[29px]  font-[700px] text-[50px] leading-[60px] ">Nosotras</h2>

        <p className="font-[Nunito] text-[20px] leading-[27px] paragraph-[24px] text-[#9BABBF]">En Florería Suecia estamos orgullosos de entregar la experiencia de enviar flores en línea, recordando a las personas lo especial que <br /> es enviar y recibir flores.
Nuestro objetivo es combinar un servicio de entrega de flores hermoso, flexible y fácil de usar con la magia que solo nuestras excelentes floristas pueden brindar a nuestros bellos ramos y arreglos. <br />
Seleccionamos cuidadosamente cada flor con las que trabajamos para asegurarnos de mantener una altísima calidad y ofrecer una increíble experiencia en las flores o regalos que envíes a tus seres queridos.</p>
      </div>

      <div className="w-[880px] h-[300px]  " data-AOS="fade-left">

        <img className="ml-[371px]  mt-[60px]"  src={AllFlower} alt="" />

      </div>
    </div>
  )
}

export default Section
