import React, { useState } from "react";
import ContainerItem from "../container";
import { FaUser } from "react-icons/fa6";
import { MESSAGES } from "./../../utils/messages/index";
import { CardBannerItemProps } from "../../utils/interfaces/pages/page-home";

const CardBannerItem = ({ dataItem }: CardBannerItemProps) => {
  const [mostrarDescricaoLonga, setMostrarDescricaoLonga] = useState(false);

  const description = dataItem?.description === "#N/A" ? "" : dataItem?.description;
  const descricaoLonga = description?.length > 150;
  const creators = dataItem?.creators?.items ?? [];
  const mostrarCreators = creators.slice(0, 5);
  const creatorsLonga = creators.length > 5;

  const handleRedirect = () => {
    window.location.href = `/comics/${dataItem?.id}`;
  };

  return (
    <>
      <div
        className="relative w-full h-96"
        style={{
          backgroundImage: `
            linear-gradient(to right, #171717 -2%, transparent 70%),
            linear-gradient(to top, #171717 10%, transparent 90%),
            url(${dataItem?.thumbnail?.path}.${dataItem?.thumbnail?.extension})
          `,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "100%",
          backgroundSize: "50%",
        }}
      >
        <div className="absolute top-10 bottom-20 md:bottom-28 sm:bottom-20 w-full text-center items-center p-4 sm:text-center md:text-start">
          <ContainerItem>
            <h5 className="text-amber-500 font-bold text-3xl md:text-4xl sm:text-3xl uppercase mb-2">
              {dataItem?.title}
            </h5>
            <p className="text-white flex w-fullflex gap-2 sm:w-full md:2/4 mb-2 justify-center md:justify-start sm:justify-center">
              <FaUser
                className="text-white items-center text-center md:text-start sm:text-center"
                size={16}
              />
              Criador(es):{" "}
              {mostrarCreators.map((creator) => creator?.name).join(", ")}
              {creatorsLonga && "..."}
            </p>
            <p className="text-white w-full font-sm md:w-2/4 sm:w-full mb-5 text-gray-300">
              {mostrarDescricaoLonga
                ? description
                : `${description?.slice(0, 150)}${descricaoLonga ? "..." : ""}`}
            </p>

            <button
              onClick={handleRedirect}
              className="bg-red-700 p-2 rounded-md w-auto text-white uppercase font-bold hover:bg-red-500 duration-300"
            >
              {MESSAGES?.BOTAO_BANNER}
            </button>
          </ContainerItem>
        </div>
      </div>
    </>
  );
};

export default CardBannerItem;
