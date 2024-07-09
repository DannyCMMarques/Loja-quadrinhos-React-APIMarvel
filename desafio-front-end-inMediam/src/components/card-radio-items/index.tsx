import React from "react";
import { CardProps } from "../../utils/interfaces/card-props";
import SwiperComponent from "../swiper";

interface CardRadioItemProps {
  dataItem: Array<CardProps>;
  categorias: string;
}

const CardRadioItem: React.FC<CardRadioItemProps> = ({
  dataItem,
  categorias,
}) => {

  const handleRedirect = (id: any) => {
    window.location.href = `/${categorias}/${id}`;
  };

  return (
    <div>
      <SwiperComponent quantItemMobile={5} quantItems={10}>
        {dataItem.map((item: CardProps) => (
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
      </SwiperComponent>
    </div>
  );
};

export default CardRadioItem;
