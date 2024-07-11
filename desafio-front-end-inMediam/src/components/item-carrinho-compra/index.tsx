import React, { useEffect, useState, useContext } from "react";
import { FiMinus, FiPlus, FiTrash } from "react-icons/fi";
import { UseItensCarrinhoContext } from "../../utils/context/useItensCarrinho";
import useFormattedPrice from "../../hooks/useFormatePrice";

const ItemCarrinho = ({ data, valorAtualizado }) => {
  const { removerItemCarrinho } = useContext(UseItensCarrinhoContext);
  const [quantidade, setQuantidade] = useState(data?.item?.amount || 1);
  const formattedPrice = useFormattedPrice(data?.item?.price);

  useEffect(() => {
    setQuantidade(data?.item?.amount || 1);
  }, [data]);

  const handleAdicionarValor = () => {
    const novaQuantidade = quantidade + 1;
    const calculo = (novaQuantidade - quantidade) * data?.item?.price;
    setQuantidade(novaQuantidade);
    valorAtualizado(calculo);
  };

  const handleRemoverValor = () => {
    if (quantidade > 1) {
      const novaQuantidade = quantidade - 1;
      const calculo = (novaQuantidade - quantidade) * data?.item?.price;
      setQuantidade(novaQuantidade);
      valorAtualizado(calculo);
    }
  };

  const handleDeleteItem = (data) => {
    removerItemCarrinho(data.id);
  };

  return (
    <>
      <div className="w-full text-white flex justify-between items-center mb-2">
        <div className="w-full flex justify-between gap-2 items-center p-2">
          <div
            className="h-32 w-36 sm:w-36 md:w-24"
            style={{
              backgroundImage: `url(${data?.item?.thumbnail?.path}.${data?.item?.thumbnail?.extension})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex flex-col items-start w-36">
            <h5 className="font-bold text-sm text-white">Produto:</h5>
            <span className="font-medium text-white">{data?.item?.title}</span>
          </div>
          <div className="flex flex-col items-start w-24">
            <h5 className="font-bold text-sm">Preço:</h5>
            <span className="font-medium">{formattedPrice}</span>
          </div>
          <div className="flex gap-5 items-center">
            <button onClick={handleRemoverValor}>
              <FiMinus className="text-xl sm:text-xl md:text-2xl" />
            </button>
            <input
              className="w-16 h-9 text-black text-center border-none font-bold rounded-sm"
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => {
                const novaQuantidade = Math.max(1, parseInt(e.target.value));
                const calculo = (novaQuantidade - quantidade) * data?.item?.price;
                setQuantidade(novaQuantidade);
                valorAtualizado(calculo);
              }}
            />
            <button onClick={handleAdicionarValor}>
              <FiPlus className="text-xl sm:text-xl md:text-2xl" />
            </button>
          </div>
          <FiTrash
            onClick={() => handleDeleteItem(data)}
            className="cursor-pointer text-gray-700 hover:text-red-500 duration-150 bg-gray-100 shadow-md border rounded-full p-1 w-16 sm:w-16 md:w-6 text-4xl sm:text-4xl md:text-2xl"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default ItemCarrinho;
