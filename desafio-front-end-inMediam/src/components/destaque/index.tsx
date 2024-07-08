import React from "react";
import { DestaqueMock } from "../../utils/mocks/destaquesMocks";
import ImageCard from "../image-card";

const DestaqueComponente = () => {
  const mock = DestaqueMock;

  return (
    <div className="w-full">
      <div className="flex gap-x-5 w-96 h-96">
        <ImageCard
          imageUrl={mock[4]?.imagemCartoon}
          width="[85rem]"
          height="[45rem]"
          cursor="pointer"
        />
        <div className="w-full">
          <div className="flex w-full gap-x-5 mb-5">
            <ImageCard
              imageUrl={mock[1]?.imagemCartoon}
              width="72"
              height="[21.875rem]"
              cursor="pointer"
            />
            <ImageCard
              imageUrl={mock[2]?.imagemCartoon}
              width="72"
              height="[21.875rem]"
              cursor="pointer"
            />
          </div>
          <div className="flex w-full gap-x-5">
            <ImageCard
              imageUrl={mock[3]?.imagemCartoon}
              width="72"
              height="[21.875rem]"
              cursor="pointer"
            />
            <ImageCard
              imageUrl={mock[4]?.imagemCartoon}
              width="72"
              height="[21.875rem]"
              cursor="pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestaqueComponente;
