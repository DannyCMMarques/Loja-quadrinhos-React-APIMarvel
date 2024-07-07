import React from "react";
import { ImageCardInterface } from "../../utils/interfaces/image-card-interface";

const ImageCard = ({ imageUrl, width, height, cursor }: ImageCardInterface) => {
  return (
    <div
      className={`w-${width} h-${height} hover:opacity-75 duration-100`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: `${cursor}`,
      }}
    ></div>
  );
};

export default ImageCard;
