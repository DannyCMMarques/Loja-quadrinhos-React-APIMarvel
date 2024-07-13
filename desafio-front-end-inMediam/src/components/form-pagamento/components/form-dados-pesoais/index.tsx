import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegUser } from "react-icons/fa";
import { InputsFormDadosPessoais } from "../../../../utils/interfaces/inputs-form-dados-pessoais";

const FormDadosPessoais = ({ handleCancel, handleProximo }) => {
  const validationSchemaDados = z.object({
    id: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    firstname: z.string().min(2, { message: "This field is required" }),
    address: z.string().min(2, { message: "This field is required" }),
    city: z.string().min(2, { message: "This field is required" }),
    state: z.string().min(2, { message: "This field is required" }),
    phonenumber: z.string().min(2, { message: "This field is required" }),
    zipcode: z.string().min(2, { message: "This field is required" }),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsFormDadosPessoais>({
    resolver: zodResolver(validationSchemaDados),
  });

  const onSubmit: SubmitHandler<InputsFormDadosPessoais> = (data) => {
    handleProsseguir(data);
  };

  const handleCancelar = () => {
    handleCancel(true);
  };

  const handleProsseguir = (data: any) => {
    handleProximo(data);
  };
  return (
    <>
      <div className="w-full max-h-[38rem]  px-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center align-center ">
            <span>
              <FaRegUser className="mr-3 text-red-500" size={24} />
            </span>
            <h2 className="text-black text-center text-lg font-bold ">
              Personal Data
            </h2>
          </div>

          <div className=" ">
            <label
              htmlFor="first name"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstname")}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="First Name"
            />

            {errors.firstname && (
              <p className="  text-red-500 text-start text-sm">
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="mt-5  ">
            <label
              htmlFor="email"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="Insert your email address"
            />

            {errors.email && (
              <p className="  text-red-500 text-start text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-5  ">
            <label
              htmlFor="Adress"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="Insert your address"
            />

            {errors.address && (
              <p className="    text-red-500 text-start text-sm ">
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="flex justify-center w-full items-center gap-4 mt-5">
            <div className="w-full ">
              <label
                htmlFor="city"
                className="block text-sm mb-1 font-medium leading-6 text-gray-900"
              >
                City:
              </label>
              <input
                type="text"
                id="city"
                {...register("city")}
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
                placeholder="Insert your city"
              />

              {errors.city && (
                <p className=" text-red-500 text-start text-sm">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="w-full ">
              <label
                htmlFor="State"
                className="block text-sm  mb-1 font-medium leading-6 text-gray-900"
              >
                State:
              </label>
              <input
                type="text"
                id="state"
                {...register("state")}
                className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
                placeholder="Insert your state"
              />

              {errors.state && (
                <p className="  text-red-500 text-start text-sm">
                  {errors.state.message}
                </p>
              )}
            </div>
          </div>
          <div className="mt-5  ">
            <label
              htmlFor="phone number"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone number"
              {...register("phonenumber")}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="Insert your phone number here"
            />

            {errors.phonenumber && (
              <p className="    text-red-500 text-start text-sm ">
                {errors.phonenumber.message}
              </p>
            )}
          </div>
          <div className="mt-5  ">
            <label
              htmlFor="Zip Code"
              className="block text-sm mb-1 font-medium leading-6 text-gray-900"
            >
              Zip Code:
            </label>
            <input
              type="text"
              id="Zip Code"
              {...register("zipcode")}
              className="block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-1  focus:ring-gray-500 sm:text-sm sm:leading-6"
              placeholder="Insert your zip code here"
            />

            {errors.zipcode && (
              <p className="    text-red-500 text-start text-sm ">
                {errors.zipcode.message}
              </p>
            )}
          </div>
          <div className="flex justify-between gap-4 w-full mt-5 mb-5 py-4">
            <button
              className="bg-black w-full text-white font-bold rounded-sm px-2 py-2 hover:opacity-90 duration-100"
              onClick={handleCancelar}
            >
              Cancel
            </button>
            <button
              className="bg-red-600 w-full text-white font-bold rounded-sm px-2 py-2 hover:bg-red-500 duration-100"
              type="submit"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormDadosPessoais;
