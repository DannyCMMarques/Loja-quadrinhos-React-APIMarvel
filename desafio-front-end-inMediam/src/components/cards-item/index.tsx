import React from "react";
import { MESSAGES } from "../../utils/messages";
import SkeletonBones from "../skeletonBones";
import { Comic } from "../../utils/interfaces/pages/page-home";
import SwiperComponent from "../swiper";

interface CardItemProps extends Comic {
  useSwiper?: boolean;
}

const CardItem = ({ dataItem, useSwiper = true }: CardItemProps) => {
  const handleRedirect = (id: number) => {
    window.location.href = `/comics/${id}`;
  };

  const renderContent = () => {
    if (dataItem?.length <= 0) {
      return Array.from({ length: 20 }).map((_, index) => (
        <div className="p-1 " key={index}>
          <SkeletonBones
            height="h-72"
            width="w-48 md:w-60 sm:w-40"
            display="flex"
            justify="justify-between"
          />
        </div>
      ));
    } else {
      return dataItem.map((dataItem) => (
        <div
          className={`p-2 ${
            useSwiper ? "w-full" : "w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          }`}
          key={dataItem?.id}
        >
          <div
            className="w-full cursor-pointer bg-center h-72"
            style={{
              backgroundImage: `url(${dataItem?.thumbnail?.path}.${dataItem?.thumbnail?.extension})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex h-full w-full items-center justify-center bg-neutral-700 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="w-full">
                <p className="text-white font-bold text-3xl text-center">
                  R$
                  {dataItem?.prices[0]?.price === 0
                    ? 5.99
                    : dataItem?.prices[0]?.price}
                </p>
                <div className="w-full flex justify-center">
                  <button
                    onClick={() => handleRedirect(dataItem?.id)}
                    className="text-white uppercase text-xs font-bold py-2 px-4 rounded border border-white mt-5 hover:border-red-800 hover:bg-red-800"
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
      ));
    }
  };

  return (
    <>
      {useSwiper ? (
        <SwiperComponent quantItemMobile={2} quantItems={5}>
          {renderContent()}
        </SwiperComponent>
      ) : (
        <div className="flex flex-wrap p-2">{renderContent()}</div>
      )}
    </>
  );
};

export default CardItem;
