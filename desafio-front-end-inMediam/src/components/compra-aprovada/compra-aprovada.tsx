import React from "react";
import { MdCheckCircleOutline } from "react-icons/md";
import { MESSAGES } from "../../utils/messages";

const CompraAprovada = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-green-100 bg-opacity-70 flex justify-center items-center z-1">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="border-4 border-t-transparent border-green-400 rounded-full w-12 h-12"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <MdCheckCircleOutline size={25} className="text-green-400" />
            </div>
          </div>
          <span className="text-green-400 text-xl">
            {MESSAGES.CARRINHO_COMPRA.COMPRA_APROVADA}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CompraAprovada;
