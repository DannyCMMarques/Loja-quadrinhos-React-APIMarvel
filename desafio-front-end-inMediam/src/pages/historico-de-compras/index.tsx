import React, { useContext, useState } from "react";
import Modal from "../../components/modal";
import ContainerItem from "../../components/container";
import { FaCartArrowDown } from "react-icons/fa6";
import { MESSAGES } from "../../utils/messages";
import HistoricoDetalhamento from "../../components/historico-detalhes";
import ListaHistorico from "../../components/lista-historico";
import { ItemHistorico } from "../../utils/interfaces/pages/historico-compras";
import { UseItensHistoricoContext } from "../../utils/context/useItensHistórico";

const HistoricoCompras = () => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);

  const { itensHistorico }: { itensHistorico: ItemHistorico[] } = useContext(
    UseItensHistoricoContext
  );

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  const handleOpenModal = (id: string) => {
    setOpenModalId(id);
  };

  return (
    <div className="w-full mt-28 md:mt-20 sm:mt-28">
      {itensHistorico?.length > 0 ? (
        <>
          {itensHistorico.map((itens) => {
            const isOpen = openModalId === itens.id;
            return (
              <ContainerItem key={itens?.id}>
                <h5 className="text-white font-bold">Resume</h5>
                <Modal
                  size="small"
                  isOpen={isOpen}
                  onClose={handleCloseModal}
                  categoria="historico"
                >
                  <HistoricoDetalhamento dados={itens} />
                </Modal>
                <ListaHistorico dados={itens} OpenModal={() => handleOpenModal(itens.id)} />
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
            {MESSAGES.CARRINHO_COMPRA.NENHUM_ITEM_HISTORICO}
          </h5>
          <div className="w-full justify-center flex">
            <small className="text-white text-center">
              {MESSAGES.CARRINHO_COMPRA.VA_ATE_SESSAO_COMPRAS}
            </small>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricoCompras;
