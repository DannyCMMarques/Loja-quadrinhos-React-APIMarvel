import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { HistoricoDetalhamentoProps } from "../../utils/interfaces/pages/historico-compras";

const HistoricoDetalhamento = ({ dados }: HistoricoDetalhamentoProps) => {
  const handleNumber = (n: any) => {
    return parseFloat(n).toFixed(2);
  };

  const item = dados?.item;
  const dadosCompra: any = item?.dadosCompra;
  const dadosPessoais: any = item?.dadosPessoais;
  const totalItens: any = dadosCompra?.totalItens;

  return (
    <div className="w-full max-h-[38rem] px-3">
      <div className="flex justify-center align-center">
        <span>
          <FaInfoCircle className="mr-3 text-gray-600" size={24} />
        </span>
        <h2 className="text-gray-600 text-center text-lg font-bold">
          History of your purchase
        </h2>
      </div>
      <div className="mt-3">
        <p>
          <span className="text-black font-bold text-sm">Customer Name:</span>
          <span className="text-black text-sm">
            {dadosPessoais?.firstname || "Unknown"}
          </span>
        </p>
      </div>
      <div className="mt-1">
        <p>
          <span className="text-black font-bold text-sm">Purchase Date:</span>
          <span>{dadosCompra?.dataCompra || "Unknown"}</span>
        </p>
      </div>
      <div className="mt-1">
        <p>
          <span className="text-black font-bold text-sm">Total Price:</span>
          <span className="text-black text-sm">
            {dadosCompra ? "$" + handleNumber(dadosCompra.valorTotal) : "N/A"}
          </span>
        </p>
      </div>
      <div className="mt-1">
        <p>
          <span className="text-black font-bold text-sm">Payment Method:</span>
          <span className="text-black text-sm">Credit Card</span>
        </p>
      </div>
      <div className="mt-2">
        <p className="text-gray-600 text-center text-base font-bold">
          Products
        </p>
        <ul className="mt-1">
          {totalItens?.map((produtos) => (
            <li key={produtos?.item.id}>
              <p>
                <span className="text-black font-bold text-sm">
                  {produtos?.item.title}:
                </span>
              </p>
              <p>
                <span className="text-black font-bold text-sm">Amount: </span>
                <span className="text-black text-sm">
                  {produtos?.item.amount}
                </span>
                <span className="font-bold text-black text-sm">Price: </span>
                <span className="text-black text-sm">
                  $ {produtos?.item.price}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HistoricoDetalhamento;
