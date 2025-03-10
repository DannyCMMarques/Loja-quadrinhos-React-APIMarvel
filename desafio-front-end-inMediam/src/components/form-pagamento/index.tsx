import React, { useContext, useState } from "react";
import FormDadosPessoais from "./components/form-dados-pesoais";
import FormDataCartao from "./components/form-dados-cartao";
import { UseItensHistoricoContext } from "../../utils/context/useItensHistórico";
import CompraAprovada from "../compra-aprovada/compra-aprovada";
import { UseItensCarrinhoContext } from "../../utils/context/useItensCarrinho";

const FormComponent = ({ dataItensCarrinho, onClose }) => {
  const { removerTodosItens } = useContext(UseItensCarrinhoContext);

  const { adicionarItemhistorico } = useContext(UseItensHistoricoContext);
  const [sessao, setSessao] = useState(0);
  const [formSection1, setFormSection1] = useState({});
  const [avancar, setAvancar] = useState(false);
  const [formSection2, setFormSection2] = useState({});
  const [confirmado, setConfirmado] = useState(false);

  const dataCompra = new Date().toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const handleProximaSessao = (data: any) => {
    setFormSection1(data);
    if (data) {
      setSessao(sessao + 1);
      setAvancar(true);
    }
  };

  const handleVoltarSessao = (data) => {
    if (data) {
      setSessao(sessao - 1);
      setAvancar(false);
    }
  };
  const handleOnClose = () => {
    onClose(true);
  };

  const handleFinalizar = (data: any) => {
    setFormSection2(data);
    const finalItem: any = {
      dadosCartao: data.data,
      dadosPessoais: data.dataFinal,
      dadosCompra: dataItensCarrinho,
      dataCompra: dataCompra,
    };

    if (finalItem) {
      adicionarItemhistorico(finalItem);
      setConfirmado(true);
    }
    setTimeout(() => {
      removerTodosItens();
      handleOnClose();
    }, 3000);
  };

  return (
    <>
      {!avancar ? (
        <div>
          <FormDadosPessoais
            handleCancel={handleOnClose}
            handleProximo={handleProximaSessao}
          />
        </div>
      ) : (
        <div>
          <FormDataCartao
            dataFinal={formSection1}
            handleFinal={handleFinalizar}
            handleVoltar={handleVoltarSessao}
            dataCarrinho={dataItensCarrinho}
          />
        </div>
      )}

      {confirmado && <CompraAprovada />}
    </>
  );
};

export default FormComponent;
