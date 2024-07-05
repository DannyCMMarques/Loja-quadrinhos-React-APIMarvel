import React from "react";
import { MESSAGES } from "../../utils/messages";
import { CardProps } from "../../utils/interfaces/card-props";
import { FaBasketShopping } from "react-icons/fa6";

const CardItem = ({ dataItem }: CardProps) => {
  return (
    <>
      <div className="w-full">
        <div
          className="w-full cursor-pointer bg-center h-72"
          style={{
            backgroundImage: `url(${dataItem.imagemCartoon})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex  h-full items-center justify-center bg-neutral-700 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div>
              <p className="text-white font-bold text-3xl text-center">
                R${dataItem.precoCartoon}
              </p>
              <div>
                <button className="text-white uppercase text-xs font-bold  py-2 px-4 rounded border border-white mt-5 hover:border-red-800 hover:bg-red-800">
                  {MESSAGES.BOTAO_CARD_ITEM}
                </button>
                <p className="text-white items-center font-bold uppercase text-xs flex gap-1 hover:text-amber-500 mt-5 text-center">
                  {MESSAGES.BOTAO_COMPRAR_CARD_ITEM}
                  <FaBasketShopping size={16} />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-white cursor-pointer text-center text-base text-md font-semibold mt-2 hover:text-red-500">
            {dataItem.nomeCartoon}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
