import React from "react";

const ImageCard = ({ index, dataCard }: ImageCardInterface) => {
  const imageUrl = `${dataCard?.data[index]?.thumbnail.path}.${dataCard?.data[index]?.thumbnail.extension}`;

  const handleRedirect = () => {
    window.location.href = `/comics/${dataCard?.data[index]?.id}`;
  };

  return (
    <div
      onClick={handleRedirect}
      className="w-full h-full hover:opacity-75 duration-100"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default ImageCard;
