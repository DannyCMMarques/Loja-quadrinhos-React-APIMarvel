import React, { useContext, useEffect, useState } from "react";
import ContainerItem from "../../components/container";
import ItemCarrinho from "../../components/item-carrinho-compra";
import { UseItensCarrinhoContext } from "../../utils/context/useItensCarrinho";
import { FaCartArrowDown } from "react-icons/fa6";
import Modal from "../../components/modal";
import FormComponent from "../../components/form-pagamento";
import { MESSAGES } from "../../utils/messages";

const CarrinhoDeCompra = () => {
  const { itensCarrinhos } = useContext(UseItensCarrinhoContext);
  const [valorTotal, setValorTotal] = useState(0);
  const [dataFormFinalizarCompra, setDataFormFinalizarCompra] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleValorAtualizado = (valor: any) => {
    setValorTotal(valorTotal + valor);
  };

  useEffect(() => {
    const calcularValorTotal = () => {
      let total = 0;
      itensCarrinhos.forEach((item) => {
        if (item?.item?.price && item?.item?.amount) {
          total += item?.item?.price * item?.item?.amount;
        }
      });
      return total;
    };
    setValorTotal(calcularValorTotal());
  }, [itensCarrinhos]);

  const handleOpenModal = () => {
    const dataItensFinalizar: any = {
      valorTotal: valorTotal,
      totalItens: itensCarrinhos.item,
    };
    setDataFormFinalizarCompra(dataItensFinalizar);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal size="small" isOpen={isOpen}>
        <FormComponent
          dataItensCarrinho={dataFormFinalizarCompra}
          onClose={handleCloseModal}
        />
      </Modal>

      <div className="w-full mt-16 md:mt-20 sm:mt-16 fle">
        <ContainerItem>
          {itensCarrinhos.length > 0 ? (
            <>
              <h5 className="font-bold items-center text-white mb-2 text-xl">
                {MESSAGES.TITULO_PAG_CARRINHO}
              </h5>
              {itensCarrinhos.map((item) => (
                <ItemCarrinho
                  valorAtualizado={handleValorAtualizado}
                  key={item?.id}
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
                      {MESSAGES.TOTAL_PAG_CARRINHO}
                      {(valorTotal + 20).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end mt-5">
                <button
                  onClick={handleOpenModal}
                  className="bg-red-600 px-2 text-white font-bold round py-3 hover:bg-red-500 duration-100"
                >
                  {MESSAGES.FINALIZAR_COMPRA}
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
                  {MESSAGES.NENHUM_ITEM_CARRINHO}
                </h5>
                <div className="w-full justify-center flex">
                  <small className="text-white text-center">
                    {MESSAGES.VA_ATE_SESSAO_COMPRAS}
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
