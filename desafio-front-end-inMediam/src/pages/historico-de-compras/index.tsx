import React, { useContext, useState } from "react";
import Modal from "../../components/modal";
import ContainerItem from "../../components/container";
import { FaCartArrowDown } from "react-icons/fa6";
import { MESSAGES } from "../../utils/messages";
import HistoricoDetalhamento from "../../components/historico-detalhes";
import ListaHistorico from "../../components/lista-historico";
import { ItemHistorico } from "../../utils/interfaces/pages/historico-compras";
 import { UseItensHistoricoContext } from "../../utils/context/useItensHistórico";

const HistoricoCompras= () => {
  const [isOpen, setIsOpen] = useState(false);

  const { itensHistorico }: { itensHistorico: ItemHistorico[] } = useContext(UseItensHistoricoContext);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
    console.log();
  };

  return (
    <>
      <div className="w-full mt-16 md:mt-20 sm:mt-16">
        {itensHistorico?.length > 0 ? (
          <>
            {itensHistorico.map((itens) => {
              return (
                <ContainerItem key={itens?.id}>
                  <Modal
                    size="small"
                    isOpen={isOpen}
                    onClose={handleCloseModal}
                  >
                    <HistoricoDetalhamento dados={itens} />
                  </Modal>
                  <ListaHistorico dados={itens} OpenModal={handleOpenModal} />
                  <hr />
                </ContainerItem>
              );
            })}
          </>
        ) : (
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
        )}
      </div>
    </>
  );
};

export default HistoricoCompras;
