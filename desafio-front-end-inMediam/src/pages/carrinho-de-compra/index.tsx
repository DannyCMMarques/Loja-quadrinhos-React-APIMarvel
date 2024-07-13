import React, { useContext, useEffect, useState } from "react";
import ContainerItem from "../../components/container";
import ItemCarrinho from "../../components/item-carrinho-compra";
import { UseItensCarrinhoContext } from "../../utils/context/useItensCarrinho";
import { FaCartArrowDown } from "react-icons/fa6";
import Modal from "../../components/modal";
import FormComponent from "../../components/form-pagamento";
import { MESSAGES } from "../../utils/messages";
import { DataItensFinalizarCompra, ItemCarrinhoProps } from "../../utils/interfaces/pages/carrinho-compra";

const CarrinhoDeCompra = () => {

  const { itensCarrinhos } = useContext(UseItensCarrinhoContext);

  const [valorTotal, setValorTotal] = useState<number>(0);
  const [dataFormFinalizarCompra, setDataFormFinalizarCompra] = useState<DataItensFinalizarCompra | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valorFrete, setValorFrete] = useState<number>(0);

  const handleValorAtualizado = (valor: number) => {
    setValorTotal(valorTotal + valor);
  };

  const handleValorCep = () => {
    const frete = localStorage.getItem("frete");
    if (frete) {
      const parsedFrete = JSON.parse(frete);
      if (parsedFrete?.frete?.valor) {
        const valorFreteString = parsedFrete.frete.valor.replace("$", "").trim();
        const valorFreteNumero = parseFloat(valorFreteString);
        setValorFrete(valorFreteNumero);
      }
    }
  };

  useEffect(() => {
    handleValorCep();
    const calcularValorTotal = () => {
      let total = 0;
      itensCarrinhos.forEach((item) => {
        if (item?.item?.price && item?.item?.amount) {
          total += item.item.price * item.item.amount;
        }
      });
      return total;
    };
    setValorTotal(calcularValorTotal());
  }, [itensCarrinhos]);

 const produtos=itensCarrinhos.map((carrinho)=>{ return carrinho.item})


  const handleOpenModal = () => {
    const dataItensFinalizar: DataItensFinalizarCompra = {
      valorTotal,
      totalItens: itensCarrinhos,
    };
    setDataFormFinalizarCompra(dataItensFinalizar);
console.log(dataFormFinalizarCompra)
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        {dataFormFinalizarCompra && (
          <FormComponent
            dataItensCarrinho={dataFormFinalizarCompra}
            onClose={handleCloseModal}
          />
        )}
      </Modal>

      <div className="w-full mt-16 md:mt-20 sm:mt-16 fle">
        <ContainerItem>
          {itensCarrinhos.length > 0 ? (
            <>
              <h5 className="font-bold items-center text-white mb-2 text-xl">
                {MESSAGES.CARRINHO_COMPRA.TITULO_PAG_CARRINHO}
              </h5>
              {itensCarrinhos.map((item) => (
                <ItemCarrinho
                  valorAtualizado={handleValorAtualizado}
                  key={item.id}
                  data={item}
                />
              ))}
              <div className="flex mb-4 justify-between items-center w-full">
                <div className="w-11/12"></div>
                <div className="mt-5 w-full flex justify-between">
                  <div>
                    <p className="text-white font-bold"> SubTotal: </p>
                    <div>
                      <p className="text-white ">{valorTotal.toFixed(2)} </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-bold">
                      {" "}
                      Frete: $ {valorFrete.toFixed(2)}
                    </p>
                    <p className="text-white font-bold">
                      {" "}
                      {MESSAGES.CARRINHO_COMPRA.TOTAL_PAG_CARRINHO}
                      {(valorTotal + valorFrete).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end mt-5">
                <button
                  onClick={handleOpenModal}
                  className="bg-red-600 px-2 text-white font-bold round py-3 hover:bg-red-500 duration-100"
                >
                  {MESSAGES.CARRINHO_COMPRA.FINALIZAR_COMPRA}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mt-40 mb-20 md:mt-52 sm:mt-20 sm:mb-20 md:mt-86 sm:44 h-86 items-center">
                <div className="flex justify-center items-center">
                  <FaCartArrowDown className="text-7xl text-white transition transform animate-bounce" />
                </div>
                <h5 className="flex justify-center text-amber-400 mt-5">
                  {MESSAGES.CARRINHO_COMPRA.NENHUM_ITEM_CARRINHO}
                </h5>
                <div className="w-full justify-center flex">
                  <small className="text-white text-center">
                    {MESSAGES.CARRINHO_COMPRA.VA_ATE_SESSAO_COMPRAS}
                  </small>
                </div>
              </div>
            </>
          )}
        </ContainerItem>
      </div>
    </>
  );
};

export default CarrinhoDeCompra;
