import React from "react";
import { MESSAGES } from "../../utils/messages";
import { ConteudoInfoProdutoProps } from "../../utils/interfaces/pages/produtos-info";

const ConteudoInfoProduto = ({ data }: ConteudoInfoProdutoProps) => {
  return (
    <div>
      <div className="mt-10 w-full px-5 md:px-0 sm:px-5 md:w-5/6 sm:w-full">
        <h5 className="text-amber-400 font-bold text-4xl uppercase">
          {MESSAGES.PAGE_PRODUTO_INFO.CONTEUDO}
        </h5>
        <p className="text-gray-300 mt-2">
          {data?.description === ""
            ? MESSAGES.PAGE_PRODUTO_INFO.SEM_DESCRICAO
            : data?.description}
        </p>
      </div>
      <div className="mt-10 w-full px-5 md:px-0 sm:px-5 md:w-5/6 sm:w-full">
        <h5 className="text-amber-400 font-bold text-4xl uppercase">
          {MESSAGES.PAGE_PRODUTO_INFO.CRIADOR}
        </h5>
        <ul className="text-gray-300 mt-2">
          {data?.creators?.items?.map((creator) => (
            <li key={creator.resourceURI}>
              <span className="text-white font-bold">{creator.name}</span> -{" "}
              {creator.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConteudoInfoProduto;
