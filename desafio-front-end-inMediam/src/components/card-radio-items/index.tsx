import React from "react";
import SwiperComponent from "../swiper";
import SkeletonBones from "../skeletonBones";
import { DataItemInterface } from "../../utils/interfaces/dataItem-interface";
import { CardRadioItemProps } from "../../utils/interfaces/components/card-radio-items-interface";

const CardRadioItem = ({ dataItem, categorias }: CardRadioItemProps) => {
  const handleRedirect = (id: any) => {
    window.location.href = `/${categorias}/${id}`;
  };

  return (
    <div>
      <SwiperComponent quantItemMobile={5} quantItems={10}>
        {dataItem.length <= 0 && (
          <div className="w-full">
            <div className="w-full flex justify-center items-center cursor-pointer">
              {Array.from({ length: 30 }).map((_, index) => (
                <div className="flex gap-5" key={index}>
                  <SkeletonBones
                    height="h-24"
                    width="w-24"
                    display="flex"
                    justify="justify-between"
                    rounded="rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between w-full">
          {dataItem.map((item: DataItemInterface) => (
            <div
              key={item?.id}
              className="w-full"
              onClick={() => handleRedirect(item?.id)}
            >
              <div className="w-full flex justify-center items-center cursor-pointer">
                <div
                  className="w-24 rounded-full h-24 items-center"
                  style={{
                    backgroundImage: `url(${item?.thumbnail?.path}.${item?.thumbnail?.extension})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
              <div>
                <p className="text-white text-sm cursor-pointer text-center text-base text-md font-semibold mt-2 hover:text-red-800">
                  {item?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SwiperComponent>
    </div>
  );
};

export default CardRadioItem;
