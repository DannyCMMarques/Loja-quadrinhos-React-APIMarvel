import React, { useContext, useState } from "react";
import FormDadosPessoais from "./components/form-dados-pesoais";
import FormDataCartao from "./components/form-dados-cartao";
import { UseItensHistoricoContext } from "../../utils/context/useItensHistórico";
import CompraAprovada from "../compra-aprovada/compra-aprovada";
import { UseItensCarrinhoContext } from "../../utils/context/useItensCarrinho";

const FormComponent = ({ dataItensCarrinho, onClose }) => {
  const { removerTodosItens } = useContext(UseItensCarrinhoContext);

  const { itensHistorico, adicionarItemhistorico } = useContext(
    UseItensHistoricoContext
  );
  const [sessao, setSessao] = useState(0);
  const [formSection1, setFormSection1] = useState({});
  const [avancar, setAvancar] = useState(false);
  const [formSection2, setFormSection2] = useState({});
  const [formularioCompra, setFormularioCompra] = useState([]);
  const [confirmado, setConfirmado] = useState(false);

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
    };

    if (finalItem) {
      adicionarItemhistorico(finalItem);
      removerTodosItens();
      setConfirmado(true);
    }
    setTimeout(() => {
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
