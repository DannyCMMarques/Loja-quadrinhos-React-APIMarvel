import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { HistoricoDetalhamentoProps } from "../../utils/interfaces/pages/historico-compras";
import { MESSAGES } from "../../utils/messages";

const HistoricoDetalhamento = ({ dados }: HistoricoDetalhamentoProps) => {
  const item = dados?.item;
  const dadosCompra: any = item?.dadosCompra;
  const dadosPessoais: any = item?.dadosPessoais;
  const totalItens: any = dadosCompra?.totalItens;

  const handleNumber = (n: any) => {
    return parseFloat(n).toFixed(2);
  };

  const handleRedirect = (id) => {
    window.location.href = `/comics/${id}`;
  };

  return (
    <div className="w-full max-h-[38rem] px-3">
      <div className=" bg-white   mx-auto">
        <div className="flex items-center justify-center mb-6">
          <FaInfoCircle className="mr-2 text-gray-500" size={24} />
          <h2 className="text-gray-700 text-lg font-bold">
            {MESSAGES.HISTORICO.TITULO}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-sm font-semibold text-gray-600">
              {MESSAGES.HISTORICO.NOME}
            </span>
            <span className="text-sm text-gray-800">
              {dadosPessoais?.firstname || "Unknown"}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-sm font-semibold text-gray-600">
              {MESSAGES.HISTORICO.DATA}{" "}
            </span>
            <span className="text-sm text-gray-800">
              {item?.dataCompra || "Unknown"}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-sm font-semibold text-gray-600">
              {MESSAGES.HISTORICO.TOTAL}
            </span>
            <span className="text-sm text-gray-800">
              {dadosCompra ? "$" + handleNumber(dadosCompra.valorTotal) : "N/A"}
            </span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <span className="text-sm font-semibold text-gray-600">
              {MESSAGES.HISTORICO.METODO_PAGAMENTO}
            </span>
            <span className="text-sm text-gray-800">
              {MESSAGES.HISTORICO.CARTAO}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-gray-600 text-center text-base font-bold">
            Products
          </p>
          <ul className="mt-3 flex flex-wrap justify-center gap-4">
            {totalItens?.map((produtos) => (
              <li
                className="w-24 h-24 bg-cover bg-center rounded-full cursor-pointer hover:opacity-75 duration-150"
                key={produtos?.id}
                style={{
                  backgroundImage: `url(${produtos?.item?.thumbnail?.path}.${produtos.item?.thumbnail?.extension})`,
                }}
                onClick={() => handleRedirect(produtos?.item?.id)}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HistoricoDetalhamento;
