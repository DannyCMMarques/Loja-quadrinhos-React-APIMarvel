import React from "react";
import SwiperComponent from "../swiper";
import SkeletonBones from "../skeletonBones";
import { DataItemInterface } from "../../utils/interfaces/dataItem-interface";
import { CardRadioItemProps } from "../../utils/interfaces/components/card-radio-items-interface";

const CardRadioItem = ({ dataItem, categorias }: CardRadioItemProps) => {
  const handleRedirect = (id: any) => {
    window.location.href = `/${categorias}/${id}`;
  };
  const cortarTitle = (title: string, compMax: number) => {
    return title.length > compMax ? `${title.slice(0, compMax)}` : title;
  };
  return (
    <div>
      {dataItem?.length <= 0 ? (
        <>
          <SwiperComponent quantItemMobile={5} quantItems={10}>
            {Array.from({ length: 20 }).map((_, index) => (
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
          </SwiperComponent>
        </>
      ) : (
        <SwiperComponent quantItemMobile={5} quantItems={10}>
          {dataItem?.map((item: DataItemInterface) => (
            <div
              key={item?.id}
              className="w-full"
              onClick={() => handleRedirect(item?.id)}
            >
              <div className="w-full flex justify-center items-center cursor-pointer hover:opacity-75 duration-100">
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
                <p className="text-white  cursor-pointer text-center text-sm  font-semibold mt-2 hover:text-red-800">
                  {categorias === "series"
                    ? cortarTitle(item?.title, 32)
                    : item?.name}{" "}
                </p>
              </div>
            </div>
          ))}
        </SwiperComponent>
      )}
    </div>
  );
};

export default CardRadioItem;
