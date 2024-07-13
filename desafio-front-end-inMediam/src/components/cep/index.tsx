import React, { useCallback, useEffect, useState } from "react";
import Loading from "../loading";
import { FiSearch } from "react-icons/fi";
import { MESSAGES } from "../../utils/messages";
import {
  DadosCep,
  Frete,
  FreteSelecionado,
  PropsCepComponentes,
} from "../../utils/interfaces/components/cep-componente-interfaces";

const CepComponente = ({
  handleData,
  handleCep,
  handleFrete,
}: PropsCepComponentes) => {
  const [cep, setCep] = useState("");
  const [opcoesFrete, setOpcoesFrete] = useState<Frete[]>([]);
  const [freteSelecionado, setFreteSelecionado] =
    useState<FreteSelecionado | null>(null);
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [temFrete, setTemFrete] = useState(false);
  const [verificacaoErro, setVerificacaoErro] = useState(false);
  const [dataCep, setDataCep] = useState<DadosCep>({
    street: "",
    district: "",
    city: "",
    state: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const freteArmazenado = JSON.parse(localStorage.getItem("frete") || "null");
    if (freteArmazenado) {
      setFreteSelecionado(freteArmazenado);
      setTemFrete(true);
    }
  }, []);

  const handleChangeCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCep(value);
    handleCep(value);
  };

  const handleSearchCep = useCallback(async () => {
    if (buscandoCep || isLoading) {
      return;
    }
    setIsLoading(true);
    setBuscandoCep(true);

    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar CEP.");
      }
      const data = await response.json();
      setDataCep(data);
      setOpcoesFrete([
        { tipo: "Normal", valor: "$ 10,00" },
        { tipo: "Expresso", valor: "$ 20,00" },
      ]);
      setVerificacaoErro(false);
    } catch (error) {
      setVerificacaoErro(true);
      console.error("Erro ao buscar CEP:", error);
    } finally {
      setIsLoading(false);
      setBuscandoCep(false);
    }
  }, [cep, isLoading, buscandoCep]);

  const handleSelecionarFrete = (frete: FreteSelecionado) => {
    setFreteSelecionado(frete);
    setTemFrete(true);
    handleFrete(frete);
    handleData(dataCep);
  };

  const handleAlterarCep = () => {
    setTemFrete(false);
    setFreteSelecionado(null);
    localStorage.removeItem("frete");
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="border-2 py-4 px-4 mt-8">
        {!temFrete && (
          <>
            <h5 className="uppercase font-bold text-2xl text-white">Entrega</h5>
            <p className="text-gray-300">{MESSAGES.CEPCOMPONENTE.CEP_FRASE}</p>
          </>
        )}

        {!temFrete ? (
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder="Insira o seu CEP"
              className="w-full h-12 px-2 border-none font-bold rounded-sm pr-12"
              value={cep}
              onChange={handleChangeCep}
            />
            <button
              onClick={handleSearchCep}
              className="absolute right-0 top-0 h-full px-3 bg-red-500 text-white rounded-sm"
            >
              <FiSearch size={20} />
            </button>
          </div>
        ) : (
          <div className="mt-3">
            <p className="text-white">
              CEP: {cep ? cep : freteSelecionado?.dados?.cep}
            </p>

            {dataCep?.street || freteSelecionado?.dados?.street ? (
              <p className="text-white">
                Endereço:{" "}
                {dataCep?.street
                  ? dataCep?.street
                  : freteSelecionado?.dados?.street}
                ,{" "}
                {dataCep?.district
                  ? dataCep?.district
                  : freteSelecionado?.dados?.district}
              </p>
            ) : (
              ""
            )}

            <p className="text-white">
              Cidade:{" "}
              {dataCep?.city ? dataCep?.city : freteSelecionado?.dados?.city}-
              {dataCep?.state ? dataCep?.state : freteSelecionado?.dados?.state}
            </p>
            <button
              onClick={handleAlterarCep}
              className="text-orange-600 font-bold duration-100 cursor-pointer"
            >
              Alterar CEP
            </button>
          </div>
        )}

        {opcoesFrete.length > 0 && !verificacaoErro && (
          <div className="mt-4">
            {opcoesFrete.map((frete, index) => (
              <div
                key={index}
                className="flex items-center justify-between border p-2 rounded-md mt-2 cursor-pointer"
                onClick={() => handleSelecionarFrete(frete)}
                style={{
                  backgroundColor:
                    freteSelecionado?.tipo === frete.tipo
                      ? "#ef4444"
                      : "transparent",
                }}
              >
                <span className="text-white">{frete.tipo}</span>
                <span className="text-white">{frete.valor}</span>
              </div>
            ))}
          </div>
        )}
        {verificacaoErro && dataCep?.erro && (
          <>
            <p className="text-red-500">
              {MESSAGES.CEPCOMPONENTE.CEP_NAO_ENCONTRADO}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default CepComponente;
