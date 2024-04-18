import { useEffect } from "react";

//aos import from aos
import AOS from "aos";
import "aos/dist/aos.css";

const FooterPage = () => {
  useEffect(() => {
    AOS.init({ duration: "1000", delay: "1000" });
  }, []);

  return (
    <div className="bg-[#444444] w-full">
      <div className="max-w-[1600px] mx-auto h-[900px] border-none">
        <div className="flex pt-[316px] justify-between " data-AOS="fade-left">
          <div className="text-white font-[Nunito] " data-AOS="fade-up">
            <h2 className="font-[600px] text-[24px] leading-[32.74px]">
              Informacion
            </h2>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Como comprar
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Preguntas Frecuentas
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Reclamos y sugerencias
            </p>
            <div className="mt-[48px]">
              <p className="font-[600px] text-[24px] leading-[32.74px]">
                MI Cuenta
              </p>
              <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
                Acceder a mi cuenta
              </p>
            </div>
          </div>
          <div className="text-white font-[Nunito] " data-AOS="fade-left">
            <h2 className="font-[600px] text-[24px] leading-[32.74px]">
              Informacion
            </h2>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Como comprar
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Preguntas Frecuentas
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Reclamos y sugerencias
            </p>
          </div>
          <div className="text-white font-[Nunito] " data-AOS="fade-up">
            <h2 className="font-[600px] text-[24px] leading-[32.74px]">
              Informacion
            </h2>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Como comprar
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Preguntas Frecuentas
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Reclamos y sugerencias
            </p>
          </div>
          <div className="text-white font-[Nunito] " data-AOS="fade-left">
            <h2 className="font-[600px] text-[24px] leading-[32.74px]">
              Informacion
            </h2>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Como comprar
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Preguntas Frecuentas
            </p>
            <p className="font-[Nunito] text-[#9BABBF]  font-normal text-[16px] leading-[45px]">
              Reclamos y sugerencias
            </p>
          </div>
        </div>
        <div
          className="flex items-center  text-[#D96581] gap-[60px] ml-[410px] mt-[95px]"
          data-AOS="flip-right"
        >
          <p className="font-[Nunito] font-[600px] text-[16px] leading-[21px]">
            terminos y condiciones
          </p>
          <p>politica de privacidad</p>
          <p>politica envios</p>
          <p>politica de reembolsos</p>
        </div>

        <div
          className="font-[Nunito] font-normal text-[16px] leading-[21px] pl-[710px]  mt-[40px]  text-white "
          data-AOS="fade-up"
        >
          <p>Uzbekistan, Andijon 2024</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
