import React from "react";
import { MESSAGES } from "../../utils/messages";
import { PrecoPaginaInfoProps } from "./../../utils/interfaces/pages/produtos-info";

const PrecoPaginaInfo = ({ data, formatacao }: PrecoPaginaInfoProps) => {
  return (
    <div>
      {" "}
      <h2 className="font-bold text-3xl mt-0 sm:mt-0 md:mt-3 uppercase text-white">
        {data?.title}
      </h2>
      <p className="font-medium text-md w-96 text-gray-300 uppercase">
        Series: {data?.series?.name}
      </p>
      <div className="mt-10 mb-10">
        {data?.prices && (
          <>
            <h5 className="font-bold text-3xl text-orange-500">
              {data?.prices[0]?.price === 0 ? "$" + 5.99 : formatacao}
            </h5>
            <p className="font-bold text-xl text-red-500 ">
              {data?.prices[0]?.price === 0
                ? MESSAGES.PAGE_PRODUTO_INFO.PARCELAS + "0.59"
                : MESSAGES.PAGE_PRODUTO_INFO.PARCELAS +
                  (parseFloat(data?.prices[0]?.price) / 10).toFixed(2)}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PrecoPaginaInfo;
