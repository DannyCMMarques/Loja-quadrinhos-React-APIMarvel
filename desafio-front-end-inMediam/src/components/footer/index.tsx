import React, { useEffect, useState } from "react";
import logo from "/Marvel_Logo.svg";
import { cardMethod } from "../../utils/mocks/cards";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MESSAGES } from "../../utils/messages";

const Footer = () => {
  const methodsCard = cardMethod;
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <footer className="w-full bg-black text-white h-auto items-center px-10 py-2 mt-12">
        <div className="w-full items-center md:flex justify-between max-w-7xl mx-auto mb-2">
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div>
                <img src={logo} alt="logo" style={{ width: 150 }} />
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-xl mb-2 mt-8 sm:mt-10 md:mt-0 text-center md:text-start sm:text-center">
              {MESSAGES.FOOTER.ATENDIMENTO}{" "}
            </h5>
            <div className="flex justify-center md:justify-start sm:justify-center gap-5 mt-2 mb-2 items-center">
              <FaWhatsapp
                size={24}
                className="  hover:text-orange-700 duration-150 cursor-pointer"
              />

              <p className="text-sm">{MESSAGES.FOOTER.TELEFONE} </p>
            </div>

            <div className="flex justify-center md:justify-start sm:justify-center  gap-5 mt-2 mb-2">
              <MdOutlineMail
                size={24}
                className="  hover:text-orange-700 duration-150 cursor-pointer"
              />

              <p className="text-sm"> {MESSAGES.FOOTER.EMAIL_CONTATO}</p>
            </div>
            <hr></hr>
            <p className="text-sm mt-2 text-center sm:text-center md:text-start">
              {MESSAGES.FOOTER.HORARIO_ATENDIMENTO}
            </p>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-0 w-full hidden sm:hidden md:block md:w-auto text-center md:text-right">
            <h5 className="font-bold text-xl mb-2">
              {MESSAGES.FOOTER.FORMAS_DE_PAGAMENTOS}
            </h5>
            <div className="gap-5 items-center flex justify-center md:justify-end sm:justify-center">
              {methodsCard.map((item) => (
                <img
                  className="mt-5"
                  key={item.id}
                  src={item.image}
                  alt="card"
                />
              ))}
            </div>
          </div>
          <div className="mt-8 sm:mt-8 md:mt-0 w-full md:w-auto text-center md:text-right">
            <h5 className="font-bold text-xl mb-2">
              {MESSAGES.FOOTER.REDES_SOCIAIS}
            </h5>
            <div className="gap-5 flex sm:flex md:block items-center justify-center md:justify-start sm:justify-center">
              <div className="flex justify-center md:justify-start sm:justify-center gap-5 mt-2 mb-2">
                <FaInstagram
                  size={26}
                  className=" hover:text-orange-700 duration-150 cursor-pointer"
                />
                {windowSize.width >= 768 ? MESSAGES.FOOTER.INSTAGRAM : ""}
              </div>

              <div className="flex justify-center md:justify-start sm:justify-center gap-5 mt-2 mb-2">
                <FaFacebook
                  size={26}
                  className=" hover:text-orange-700 duration-150 cursor-pointer"
                />
                {windowSize.width >= 768 ? MESSAGES.FOOTER.FACEBOOK : ""}
              </div>

              <div className="flex justify-center md:justify-start sm:justify-center gap-5 ">
                <MdOutlineMail
                  size={26}
                  className=" hover:text-orange-700 duration-150 cursor-pointer"
                />
                {windowSize.width >= 768 ? MESSAGES.FOOTER.EMAIL : ""}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full items-center flex justify-center mt-9">
          <p>{MESSAGES.FOOTER.DIREITOS_RESERVADOS}</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
