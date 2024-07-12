import React from "react";
import ImageCard from "./../image-card/index";
const DestaqueComponente = (data) => {
  return (
    <div className="w-full h-full ">
      <div className="bg-black px-2 py-2 grid grid-cols-2 gap-4 w-full h-full">
        <ImageCard index={1} dataCard={data} />

        <div className="w-full h-full grid grid-cols-2 gap-4">
          <ImageCard index={18} dataCard={data} />
          <ImageCard index={19} dataCard={data} />
          <ImageCard index={4} dataCard={data} />
          <ImageCard index={5} dataCard={data} />
        </div>
      </div>
    </div>
  );
};

export default DestaqueComponente;
