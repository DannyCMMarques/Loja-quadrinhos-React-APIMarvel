import React from "react";
import { MESSAGES } from "../../utils/messages";
import { CardProps } from "../../utils/interfaces/card-props";
import { FaBasketShopping } from "react-icons/fa6";

const CardItem = ({ dataItem }: any) => {
  const handleRedirect = (id) => {
    window.location.href = `/comics/${id}`;
  };

  return (
    <>
      <div className="w-full">
        <div
          className="w-11/12 cursor-pointer bg-center h-72"
          style={{
            backgroundImage: `url(${dataItem?.thumbnail?.path}.${dataItem?.thumbnail?.extension})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex  h-full w-full items-center justify-center bg-neutral-700 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div>
              <p className="text-white font-bold text-3xl text-center">
                R$
                {dataItem?.prices[0]?.price === 0
                  ? 5.99
                  : dataItem?.prices[0]?.price}
              </p>
              <div>
                <button
                  onClick={() => {
                    handleRedirect(dataItem.id);
                  }}
                  className="text-white uppercase text-xs font-bold  py-2 px-4 rounded border border-white mt-5 hover:border-red-800 hover:bg-red-800"
                >
                  {MESSAGES.BOTAO_CARD_ITEM}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-white cursor-pointer text-center text-base text-md font-semibold mt-2 hover:text-red-800">
            {dataItem?.title}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
