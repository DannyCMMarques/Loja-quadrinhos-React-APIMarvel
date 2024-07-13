import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MESSAGES } from "../../utils/messages";
import { AdicionarCarrinhoComponenteProps } from "../../utils/interfaces/pages/produtos-info";

const AdicionarCarrinhoComponente = ({
  handleRemoverValor,
  quantidade,
  setQuantidade,
  handleComprar,
  handleAdicionarValor,
}: AdicionarCarrinhoComponenteProps) => {
  return (
    <div className="flex gap-5 mt-5">
      <button onClick={handleRemoverValor}>
        <FiMinus size={24} className="text-white" />
      </button>
      <input
        className="w-16 h-12 text-center border-none font-bold rounded-sm"
        type="number"
        min="1"
        value={quantidade}
        onChange={(e) => {
          setQuantidade(Math.max(1, parseInt(e.target.value)));
        }}
      />
      <button onClick={handleAdicionarValor}>
        <FiPlus size={20} className="text-white" />
      </button>
      <div className="">
        <button
          onClick={handleComprar}
          className="bg-red-600 rounded-md hover:bg-red-500 duration-100 text-white p-3 w-full"
        >
          {MESSAGES.PAGE_PRODUTO_INFO.ADICIONAR_AO_CARRINHO}
        </button>
      </div>
    </div>
  );
};

export default AdicionarCarrinhoComponente;
