import React from "react";
import { TiInfo } from "react-icons/ti";
import { ListaHistoricoProps } from "../../utils/interfaces/pages/historico-compras";

const ListaHistorico = ({ dados, OpenModal }: ListaHistoricoProps) => {
  const item = dados?.item;
  const dadosCompra = item?.dadosCompra;
  const dadosPessoais = item?.dadosPessoais;
  const totalItens = dadosCompra?.totalItens;
  const thumbnail = totalItens?.[0]?.thumbnail;

  const handleNumber = (number: any) => {
    return parseFloat(number).toFixed(2);
  };

  return (
    <div className="w-full text-white flex h-36 justify-between items-center mb-2">
      <div className="w-full flex justify-between gap-2 items-center p-2 mb-4 mt-4">
        <div
          className="h-32 w-full sm:w-full md:w-96"
          style={{
            backgroundImage: thumbnail
              ? `url(${thumbnail?.path}.${thumbnail?.extension})`
              : "none",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="flex flex-col items-start w-2/3 justify-center">
          <h5 className="font-bold text-sm text-center text-white">Nome:</h5>
          <span className="font-medium text-center text-white">
            {dadosPessoais?.firstname || "Desconhecido"}
          </span>
        </div>

        <div className="flex flex-col items-start w-2/3 justify-center">
          <h5 className="font-bold text-center text-sm">Preço:</h5>
          <span className="font-medium text-center">
            {dadosCompra ? handleNumber(dadosCompra.valorTotal) : "N/A"}
          </span>
        </div>

        <div className="flex flex-col items-start w-2/3 justify-center">
          <h5 className="font-bold text-sm text-center">Data:</h5>
          <span className="font-medium text-center">
            {item?.dataCompra || "N/A"}
          </span>
        </div>

        <div onClick={OpenModal} className="w-2/3">
          <TiInfo className="cursor-pointer text-white text-3xl hover:text-red-500 duration-150" />
        </div>
      </div>
    </div>
  );
};

export default ListaHistorico;
