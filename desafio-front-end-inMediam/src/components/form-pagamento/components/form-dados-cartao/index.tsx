import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCreditCard, FaRegUser } from "react-icons/fa";
import { parcelaOpcoes } from "../../../../utils/mocks/parcelas-cartao-mock";
import useValidadorCartao from "../../../../hooks/useValidadorCartao";
import { InputsFormDadosCartao } from "../../../../utils/interfaces/input-form-data-cartao";

const FormDataCartao = ({
  handleVoltar,
  handleFinal,
  dataFinal,
  dataCarrinho,
}) => {
  const [formattedCardNumber, setFormattedCardNumber] = useState("");
  const [payamentApproval, setPayamentApproval] = useState(false);

  const validationSchemaCartao = z.object({
    numeroCartao: z
      .string()
      .min(2, { message: "This field is required" })
      .refine((value) => isValidCreditCard(value), {
        message: "Invalid credit card number",
      }),
    nomeImpresso: z.string().min(2, { message: "This field is required" }),
    dataValidade: z.string().min(2, { message: "This field is required" }),
    cvv: z.string().max(3, { message: "cvv is just three numbers" }),
    cpf: z.string().min(2, { message: "This field is required" }),
    parcela: z.string(),
  });

  const isValidCreditCard = (value: string) => {
    const cardNumber = value?.replace(/\s/g, "");
    return /^\d{16}$/.test(cardNumber);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsFormDadosCartao>({
    resolver: zodResolver(validationSchemaCartao),
  });

  const onSubmit: SubmitHandler<InputsFormDadosCartao> = (dataForm) => {
    if (dataForm) handleProsseguir(dataForm);
  };

  const handleProsseguir = (data: any) => {
    const finaldata = {
      dataFinal,
      data,
    };
    setPayamentApproval(true);
    handleFinal(finaldata);
  };

  const handleAnterior = (data) => {
    handleVoltar(data);
  };

  const cardType = useValidadorCartao(watch("numeroCartao"));

  const formatCardNumber = (value: string) => {
    const numericValue = value?.replace(/\D/g, "");
    let formattedValue = "";
    for (let i = 0; i < numericValue.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += numericValue[i];
    }
    return formattedValue;
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const formattedValue = formatCardNumber(value);
    setFormattedCardNumber(formattedValue);
  };

  return (
    <>
      <div className="w-full overflow-y-scroll px-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center align-center ">
            <span>
              <FaCreditCard className="mr-3 text-red-500" size={24} />
            </span>
            <h2 className="text-black text-center text-lg font-bold ">
              Payment
            </h2>
          </div>

          <div className=" ">
            <label
              htmlFor="card number"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="numeroCartao"
              {...register("numeroCartao")}
              value={formattedCardNumber}
              onChange={handleCardNumberChange}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="Insira o número do cartão"
            />

            {errors.numeroCartao && (
              <p className="text-red-500 text-start text-sm">
                {errors.numeroCartao.message}
              </p>
            )}

            {cardType && (
              <p className="text-gray-500 text-start text-sm">
                Card Type: {cardType}
              </p>
            )}
          </div>
          <div className="mt-5">
            <label
              htmlFor="card name"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="nomeImpresso"
              {...register("nomeImpresso")}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="insert your full name"
            />

            {errors.nomeImpresso && (
              <p className="text-red-500 text-start text-sm">
                {errors.nomeImpresso.message}
              </p>
            )}
          </div>
          <div className="flex w-full justify-center w-full items-center gap-4 mt-5">
            <div className=" w-full">
              <label
                htmlFor="expiration date"
                className="block text-sm mb-1 font-medium leading-6 text-gray-900"
              >
                Expiration Date:
              </label>
              <input
                type="date"
                id="dataValidade"
                {...register("dataValidade")}
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
                placeholder="DD/MM/YYYY"
              />

              {errors.dataValidade && (
                <p className="text-red-500 text-start text-sm">
                  {errors.dataValidade.message}
                </p>
              )}
            </div>
            <div className=" w-full">
              <label
                htmlFor="cvv"
                className="block text-sm mb-1 font-medium leading-6 text-gray-900"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                {...register("cvv")}
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
                placeholder="Enter your CVV"
              />

              {errors.cvv && (
                <p className="text-red-500 text-start text-sm">
                  {errors.cvv.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex w-full justify-center w-full items-center gap-4 mt-5">
            <div className=" w-full">
              <label
                htmlFor="cpf"
                className="block text-sm mb-1 font-medium leading-6 text-gray-900"
              >
                CPF:
              </label>
              <input
                type="text"
                id="cpf"
                {...register("cpf")}
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
                placeholder="Insert your CPF"
              />

              {errors.cpf && (
                <p className="text-red-500 text-start text-sm">
                  {errors.cpf.message}
                </p>
              )}
            </div>
            <div className=" w-full">
              <label
                htmlFor="installment number"
                className="block text-sm mb-1 font-medium leading-6 text-gray-900"
              >
                Installment Number
              </label>
              <select
                id="parcela"
                {...register("parcela")}
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              >
                {parcelaOpcoes.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label} x{" "}
                    {(dataCarrinho?.valorTotal / item.value).toFixed(2)}
                  </option>
                ))}
              </select>
              {errors.parcela && (
                <p className="text-red-500 text-start text-sm">
                  {errors.parcela.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between gap-4 w-full mt-5">
            <button
              disabled={payamentApproval}
              className="bg-black w-full text-white font-bold rounded-sm px-2 py-2 hover:opacity-90 duration-100"
              onClick={handleAnterior}
              type="button"
            >
              Return
            </button>
            <button
              disabled={payamentApproval}
              className="bg-red-600 w-full text-white font-bold rounded-sm px-2 py-2 hover:bg-red-500 duration-100"
              type="submit"
            >
              {payamentApproval ? "Loading..." : "Finish"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormDataCartao;
