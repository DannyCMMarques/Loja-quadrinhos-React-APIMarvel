import React from "react";
import ContainerItem from "../container";
import { FaUser } from "react-icons/fa6";
import { MESSAGES } from "./../../utils/messages/index";
import { CardBannerHeroProps } from "../../utils/interfaces/card-banner-hero";

const CardBannerItem = ({ dataItem }: CardBannerHeroProps) => {
  return (
    <>
      <div
        className="relative w-full h-96"
        style={{
          backgroundImage: `
            linear-gradient(to right, #171717 25%, transparent 70%),
            linear-gradient(to top, #171717 10%, transparent 90%),
            url(${dataItem?.imagemCartoon})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-20 md:bottom-28 sm:bottom-20 w-full text-center items-center p-4  sm:text-center md:text-start">
          <ContainerItem>
            <h5 className="text-amber-500 font-bold text-3xl md:text-4xl sm:text-3xl uppercase mb-2">
              {dataItem?.nomeCartoon}
            </h5>
            <p className="text-white flex gap-2 items-center mb-2 justify-center md:justify-start sm:justify-center">
              <FaUser
                className="text-white items-center text-center md:text-start sm:text-center"
                size={16}
              />
              Criador(es): {dataItem?.criadores}
            </p>
            <p className="text-white w-full font-sm md:w-2/4 sm: w-full mb-5 text-gray-300">
              {dataItem?.descricao}
            </p>
            <button className="bg-red-700 p-2 rounded-md w-auto text-white uppercase font-bold hover:bg-red-500 duration-300">
              {MESSAGES?.BOTAO_BANNER}
            </button>
          </ContainerItem>
        </div>
      </div>
    </>
  );
};

export default CardBannerItem;
