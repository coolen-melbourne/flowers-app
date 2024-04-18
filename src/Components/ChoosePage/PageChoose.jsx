import { useState } from "react";
import vector1 from "../../assets/images/Vector1.svg";
import banana from "../../assets/images/banana.png";
import lemon from "../../assets/images/Group 367.svg";
import mandarin from "../../assets/images/Group 366.png";
import apple from "../../assets/images/next.btn.png";

const PageChoose = () => {
  //here i use all useState hook for only border when i press the button which is expanding
  const [expanded, setExpanded] = useState(false);

  const [panded, setPanded] = useState(true);

  const tooglePanded = () => {
    setPanded(!panded);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="max-w-[1600px] h-[4000px] mx-auto">
      {/* begin of choose panel from here */}
      <div className="flex items-center justify-between mt-[40px] font-[Nunito] font-normal text-[16px] leading-[21px] text-[#9BABBF] ">
        <div className="flex gap-[20px]">
          <span className="flex items-center gap-[10px]">
            <h2 className="hover:font-bold hover:text-[#D96581] transition-all duration-200">
              Estado de México
            </h2>
            <img className="" src={vector1} alt="" />
          </span>
          <span className="flex items-center gap-[10px]">
            <h2 className="hover:font-bold hover:text-[#D96581] transition-all duration-200">
              Estado de México
            </h2>
            <img className="" src={vector1} alt="" />
          </span>
          <span className="flex items-center gap-[10px]">
            <h2 className=" hover:font-bold hover:text-[#D96581] transition-all duration-200">
              Estado de México
            </h2>
          </span>
        </div>
        <div className="flex items-center gap-[20px] ">
          <h2 className="hover:font-bold hover:text-[#444444] transition-all duration-200">
            Enviar a
          </h2>
          <div className="h-[28px] w-[1px] bg-[#818181]"></div>
          <h2 className="hover:font-bold hover:text-[#444444] transition-all duration-200">
            Providencia
          </h2>
        </div>
      </div>
      <div className="pt-[53px] ml-[621px]">
        <h2 className="font-[Nunito] font-bold text-[30px] leading-[40px]">
          Ramo orange
        </h2>
        <div className="flex items-center justify-between pt-[31px] ">
          <div className="bg-[#D96581] rounded-lg  text-[white] flex items-center w-[348px] h-[60px] font-[Nunito] font-bold text-[30px] leading-[40px] justify-between p-6">
            <p>$22.457</p>
            <p>Suecia VIP</p>
          </div>
          <p>
            puntos : <span className="text-[red]">22.457</span>
          </p>
        </div>
        <div className="w-[780px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black mt-[51px]"></div>
        <div className="font-[Nunito] mt-[20px]">
          <h className=" font-bold text-[24px] leading-[32px]">
            1.- Selecciona un horario
          </h>
          <p className="text-[#9BABBF] text-[18px] leading-[27px]">
            Se hará un cargo de envío de $3.990
          </p>
        </div>
        <div className="h-[300px] mb-[30px]  flex items-center gap-[20px]  ">
          <button
            onClick={toggleExpand}
            className={`border border-[#9BABBF]" scroll-smooth w-[245px] h-[110px] font-[Nunito] font-normal text-[18px] leading-[24px] text-[#9BABBF] text-center pt-[25px] rounded-lg expanded ? "expanded" : ""`}
          >
            <h2 className="">Hoy</h2>
            <p>16 April</p>
            <span>
              {expanded ? (
                <div className="h-[200[x] border border-[#9BABBF] pt-[10px] z-[-99]  ">
                  <button className="bg-[#D96581] rounded-lg font-[Nunito] font-normal text-[16px] leading-[21px] p-4 text-[white]">
                    08:00am - 02:00pm
                  </button>
                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    10:00am - 04:00pm
                  </p>
                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    03:00am - 08:00pm
                  </p>

                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    Elegir horario más acotado
                  </p>
                </div>
              ) : (
                ""
              )}
            </span>
          </button>
          <button
            onClick={tooglePanded}
            className={`border border-[#9BABBF]" scroll-smooth w-[245px] h-[110px] font-[Nunito] font-normal text-[18px] leading-[24px] text-[#9BABBF] text-center pt-[25px] rounded-lg expanded ? "expanded" : ""`}
          >
            <h2 className="">Hoy</h2>
            <p>16 April</p>
            <span>
              {expanded ? (
                <div className="h-[200[x] border border-[red] pt-[10px] z-[-99]  ">
                  <button className="bg-[#D96581] rounded-lg font-[Nunito] font-normal text-[16px] leading-[21px] p-4 text-[white]">
                    08:00am - 02:00pm
                  </button>
                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    10:00am - 04:00pm
                  </p>
                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    03:00am - 08:00pm
                  </p>

                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    Elegir horario más acotado
                  </p>
                </div>
              ) : (
                ""
              )}
            </span>
          </button>
          <button
            onClick={toggleExpand}
            className={`border border-[#9BABBF]" scroll-smooth w-[245px] h-[110px] font-[Nunito] font-normal text-[18px] leading-[24px] text-[#9BABBF] text-center pt-[25px] rounded-lg expanded ? "expanded" : ""`}
          >
            <h2 className="">Hoy</h2>
            <p>16 April</p>
            <span>
              {expanded ? (
                <div className="h-[200[x] border border-[#9BABBF] pt-[10px] z-[-99] ">
                  <button className="bg-[#D96581] rounded-lg font-[Nunito] font-normal text-[16px] leading-[21px] p-4 text-[white]">
                    08:00am - 02:00pm
                  </button>
                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    10:00am - 04:00pm
                  </p>
                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    03:00am - 08:00pm
                  </p>

                  <p className="font-[Nunito] font-normal text-[16px] leading-[21px] p-4">
                    Elegir horario más acotado
                  </p>
                </div>
              ) : (
                ""
              )}
            </span>
          </button>
        </div>

        <div className="w-[780px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black mt-[51px]"></div>

        <div>
          <p className="font-[Nunito] font-bold text-[24px] leading-[32px] pt-[20px] pb-[33px]">
            2.-Agrandar producto (opcional)
          </p>

          <div className="flex items-center gap-[24px] ">
            <button className="w-[245px] h-[180px] border border-[#9BABBF] rounded-lg hover:border-[#D96581] group">
              <p className="font-[Nunito]  text-[24px] leading-[32px] text-[#9BABBF] group-hover:text-[#D96581]">
                $84.990
              </p>
              <p className="font-[Nunito] text-[24px] leading-[32px] pb-[14px] text-[#9BABBF] group-hover:text-[#D96581]">
                GRAND
              </p>
              <p className="font-[Nunito] text-[18px] leading-[24px] text-[#9BABBF]">
                JG Rose Stems <br />
                Triple line Blooms
              </p>
            </button>
            <button className="w-[245px] h-[180px] border border-[#9BABBF] rounded-lg hover:border-[#D96581] group">
              <p className="font-[Nunito]  text-[24px] leading-[32px] text-[#9BABBF] group-hover:text-[#D96581]">
                $84.990
              </p>
              <p className="font-[Nunito] text-[24px] leading-[32px] pb-[14px] text-[#9BABBF] group-hover:text-[#D96581]">
                GRAND
              </p>
              <p className="font-[Nunito] text-[18px] leading-[24px] text-[#9BABBF]">
                JG Rose Stems <br />
                Triple line Blooms
              </p>
            </button>
            <button className="w-[245px] h-[180px] border border-[#9BABBF] rounded-lg hover:border-[#D96581] group">
              <p className="font-[Nunito]  text-[24px] leading-[32px] text-[#9BABBF] group-hover:text-[#D96581]">
                $84.990
              </p>
              <p className="font-[Nunito] text-[24px] leading-[32px] pb-[14px] text-[#9BABBF] group-hover:text-[#D96581]">
                GRAND
              </p>
              <p className="font-[Nunito] text-[18px] leading-[24px] text-[#9BABBF]">
                JG Rose Stems <br />
                Triple line Blooms
              </p>
            </button>
          </div>
        </div>

        <div className="w-[780px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black mt-[20px]"></div>

        <div className=" pt-[20px] pb-[40px]">
          <h2 className="font-[Nunito] font-bold text-[24px] leading-[32px]">
            3.- Complementar pedido (opcional)
          </h2>
          <div className="flex items-center gap-[21px] pt-[24px] ">
            <img src={banana} alt="" />
            <img src={lemon} alt="" />
            <img src={mandarin} alt="" />
          </div>
        </div>

        <div className="w-[780px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black mt-[20px]"></div>

        <div className="pt-[20px] border ">
          <h2 className="font-[Nunito] font-bold text-[24px] leading-[32px] pb-[10px]">
            4.- Agregar a tu carrito
          </h2>
          <p className="font-[Nunito] font-normal text-[18px] leading-[24px] text-[#9BABBF]">
            Podrás escribir un mensaje en una tarjeta más adelante en el Carrito
          </p>
        </div>

        <button className="bg-[#D96581] border w-[780px] h-[60px] flex items-center justify-center gap-[23px] text-[white] font-bold font-[Nunito] text-[18px] leading-[21px] mt-[20px] rounded-lg hover:bg-[white] hover:text-[#D96581] hover:border hover:border-[#D96581] transition-all duration-200">
          <p>Agregar ( $1,150.00 CLP)</p>
          <img className="w-[20px] h-[18px]" src={apple} alt="" />
        </button>

        <div className="w-[780px] mt-[30px] h-[2px] bg-gradient-to-r from-[#fff] via-[#9BABBF] to-[#fff]  dark:from-black "></div>
      </div>

      <div className=" mt-[227px] border">
        <div className="flex items-center justify-center gap-[201px] font-[Nunito] font-bold text-[18px] leading-[24px] text-[#9BABBF]">
          <p className="hover:text-[#D96581] transition-all duration-200 cursor-wait">
            Descripción del producto
          </p>
          <p className="hover:text-[#D96581] transition-all duration-200 cursor-wait">
            Políticas de envío
          </p>
          <p className="hover:text-[#D96581] transition-all duration-200 cursor-wait">
            Políticas de Sustitución
          </p>
        </div>
      </div>

      <div className="mt-[117px] border">
        <h2 className="font-[Nunito] font-bold text-[30px] leading-[40px]">
          Vino 3V y botanas con globo "Love You"
        </h2>

        <p className="w-[1400px] h-[154px] pt-[14px] pb-[36px] text-[#9BABBF]">
          Demuestra tu agradecimiento y cariño con nuestra exclusiva canasta
          Vinum la cual contiene la combinación perfecta de vino y botanas que{" "}
          <br />
          hará de este, el regalo perfecto junto con un globo con la frase "Love
          you". <br />
          Nuestra caja titulada Vinum, palabra de origen latin que significa
          Vino, conecta el origen de esta bebida que tiene presencia desde
          antiguas civilizaciones, y se posiciona hasta el día de hoy como la
          bebida por excelencia para celebraciones.
        </p>
        <h2 className="font-[Nunito] font-bold text-[24px] leading-[32px] text-[#444444]">
          Especificaciones del Empaque:
        </h2>
        <div className="flex items-center pt-[13px] pb-[23px] gap-[10px]">
          <div className="w-[6px] h-[24px] bg-[#D96581] rounded-lg"></div>
          <p>
            Caja rígida decorativa o reutilizable tipo libro color hueso y foil
            color champagne
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="w-[6px] h-[24px] bg-[#D96581] rounded-lg"></div>
          <p>Medidas de la caja: 36.5 cm x 21 cm x 9.5 cm</p>
        </div>
        <button className="hover:text-[#D96581] hover:underline pt-[20px] font-[Nunito] font-bold text-[24px] leading-[32px]">
          Ver más
        </button>
      </div>
    </div>
  );
};

{
  /* https://www.letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react/    by this link i can create vertical a slider*/
}

export default PageChoose;
