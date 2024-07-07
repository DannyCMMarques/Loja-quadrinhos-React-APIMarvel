import React, { useState, useEffect } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const Paginacao = ({ onPageChange, totalPages }) => {
  const [pagina, setPagina] = useState(1);
  const [itemsPorPagina, setItemsPorPagina] = useState(20);
  const [visiblePages, setPaginasVisiveis] = useState([]);
  const itemsPorPaginaOpcoes = [20, 40, 60, 80, 100];

  useEffect(() => {
    atualizarPaginasVisiveis();
  }, [pagina, totalPages]);

  const atualizarPaginasVisiveis = () => {
    const maximoDePaginas = 5;
    let paginaInicial = Math.max(1, pagina - 2);
    let paginaFinal = Math.min(totalPages, paginaInicial + maximoDePaginas - 1);

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
      onPageChange(newPage);
    }
  };

  const paginaSeguinte = () => {
    if (pagina !== totalPages) {
      const newPage = pagina + 1;
      setPagina(newPage);
      onPageChange(newPage);
    }
  };

  const handlePage = (pageNumber) => {
    setPagina(pageNumber);
    onPageChange(pageNumber);
  };

  const handleItemsPorPagina = (e) => {
    const novosItensPorPagina = parseInt(e.target.value, 10);
    setItemsPorPagina(novosItensPorPagina);
    onPageChange(1);
    setPagina(1);
  };

  return (
    <div className="py-4 px-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex space-x-2 items-center">
        <ul className="flex space-x-2">
          <li>
            <button
              className={`px-3  rounded-md focus:outline-none items-center ${
                pagina === 1 ? "cursor-not-allowed" : "hover:bg-red-600"
              }`}
              type="button"
              onClick={paginaAnterior}
              disabled={pagina === 1}
            >
              <BsChevronDoubleLeft className="text-white" />
            </button>
          </li>
          {visiblePages.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`px-4  rounded-md focus:outline-none ${
                  pagina === pageNumber
                    ? "bg-red-500 text-white"
                    : "text-gray-300 hover:bg-red-500 hover:text-white"
                }`}
                type="button"
                onClick={() => handlePage(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`px-3 py-1 rounded-md focus:outline-none ${
                pagina === totalPages
                  ? "cursor-not-allowed"
                  : "hover:bg-red-600"
              }`}
              type="button"
              onClick={paginaSeguinte}
              disabled={pagina === totalPages}
            >
              <BsChevronDoubleRight className="text-white" />
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4 sm:mt-0">
        <select
          className="px-2 py-1 border-none bg-transparent text-white border-gray-300 rounded-md focus:outline-none"
          value={itemsPorPagina}
          onChange={handleItemsPorPagina}
        >
          {itemsPorPaginaOpcoes.map((option) => (
            <option key={option} className="text-black" value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Paginacao;
