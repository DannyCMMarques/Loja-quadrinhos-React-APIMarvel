import React, { useState, useEffect } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Paginacao = ({
  QuantidadeItems,
  onChangePage,
  numeroTotalDePagina,
  onLimitChange,
}) => {
  const [pagina, setPagina] = useState(1);
  const [paginasVisiveis, setPaginasVisiveis] = useState([]);
  const [novoLimite, setNovoLimite] = useState(20);
  const valores = [20, 40, 60, 80, 100];

  useEffect(() => {
    setPagina(1);
  }, []);

  useEffect(() => {
    atualizarPaginasVisiveis();
  }, [pagina, numeroTotalDePagina]);

  const atualizarPaginasVisiveis = () => {
    const maximoDePaginas = 5;
    let paginaInicial = Math.max(1, pagina - 2);
    let paginaFinal = Math.min(numeroTotalDePagina, paginaInicial + maximoDePaginas - 1);

    const paginasArray = [];
    for (let i = paginaInicial; i <= paginaFinal; i++) {
      paginasArray.push(i);
    }
    setPaginasVisiveis(paginasArray);
  };

  const paginaAnterior = () => {
    if (pagina !== 1) {
      const newPage = pagina - 1;
      setPagina(newPage);
      onChangePage(newPage);
    }
  };

  const paginaSeguinte = () => {
    if (pagina !== numeroTotalDePagina) {
      const newPage = pagina + 1;
      setPagina(newPage);
      onChangePage(newPage);
    }
  };

  const handleChangeLimit = (event) => {
    const novoLimiteValue = parseInt(event.target.value, 10);
    setNovoLimite(novoLimiteValue);
    setPagina(1);
    onChangePage(1);
    onLimitChange(novoLimiteValue);
  };

  return (
    <div className="py-4 px-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex space-x-2 items-center">
        <ul className="flex space-x-2">
          <li>
            <button
              className={`px-3 rounded-md focus:outline-none items-center ${
                pagina === 1 ? "cursor-not-allowed" : "hover:bg-red-600"
              }`}
              type="button"
              onClick={paginaAnterior}
              disabled={pagina === 1}
            >
              <BsChevronDoubleLeft className="text-white" />
            </button>
          </li>
          {paginasVisiveis.map((numeroDePagina) => (
            <li key={numeroDePagina}>
              <button
                className={`px-4 rounded-md focus:outline-none ${
                  pagina ===numeroDePagina
                    ? "bg-red-500 text-white"
                    : "text-gray-300 hover:bg-red-500 hover:text-white"
                }`}
                type="button"
                onClick={() => {
                  setPagina(numeroDePagina);
                  onChangePage(numeroDePagina);
                }}
              >
                {numeroDePagina}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`px-3 py-1 rounded-md focus:outline-none ${
                pagina === numeroTotalDePagina
                  ? "cursor-not-allowed"
                  : "hover:bg-red-600"
              }`}
              type="button"
              onClick={paginaSeguinte}
              disabled={pagina === numeroTotalDePagina}
            >
              <BsChevronDoubleRight className="text-white" />
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4 sm:mt-0">
        <select
          className="px-2 py-1 border-none bg-transparent text-white border-gray-300 rounded-md focus:outline-none"
          value={novoLimite}
          onChange={handleChangeLimit}
        >
          {valores.map((valores, index) => (
            <option key={index} value={valores}>
              {valores}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Paginacao;
