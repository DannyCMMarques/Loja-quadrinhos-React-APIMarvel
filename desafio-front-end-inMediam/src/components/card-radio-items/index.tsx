import React from "react";
import { CardProps } from "../../utils/interfaces/card-props";
const CardRadioItem = ({ dataItem }: CardProps) => {
  const handleRedirect = (id) => {
    window.location.href = `/comics/${id}`;
  };

  return (
    <div
      className="w-full"
      onClick={() => {
        handleRedirect(dataItem.id);
      }}
    >
      <div className="w-full flex justify-center items-center cursor-pointer">
        <div
          className="w-24 rounded-full h-24 items-center"
          style={{
            backgroundImage: `url(${dataItem.imagemCartoon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div>
        <p className="text-white text-sm cursor-pointer text-center text-base text-md font-semibold mt-2 hover:text-red-800">
          {" "}
          {dataItem.nomeCartoon}
        </p>
      </div>
    </div>
  );
};

export default CardRadioItem;
