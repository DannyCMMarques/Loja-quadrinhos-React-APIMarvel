import React from "react";
import ContainerItem from "../container";
import { FaBook, FaBookOpen } from "react-icons/fa6";
import { MESSAGES } from "../../utils/messages";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { Comic } from "../../utils/interfaces/pages/page-home";

const FaixaInfoProduto = ({ dataItem }: Comic) => {
  return (
    <>
      {" "}
      <div className="bg-red-600 w-full h-24 mt-8 hidden sm:hidden md:flex justify-center items-center">
        <ContainerItem>
          <div className="flex w-full gap-2 sm:gap-2 md:gap-40 justify-between items-center">
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <FaBookOpen size={20} className="text-white" />{" "}
              {MESSAGES.PAGE_PRODUTO_INFO.PAGINAS}: {dataItem?.pageCount}
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <IoMdInformationCircleOutline size={20} className="text-white" />{" "}
              {dataItem?.isbn !== ""
                ? `ISBN: ${dataItem?.isbn}`
                : `Digital Id: ${dataItem.digitalId}`}
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <BiWorld size={20} className="text-white" />{" "}
              {MESSAGES.PAGE_PRODUTO_INFO.IDIOMA}: English
            </p>
            <p className="font-bold text-white block sm:block md:flex gap-2">
              <FaBook size={20} className="text-white" />{" "}
              {MESSAGES.PAGE_PRODUTO_INFO.FORMATO}: {dataItem?.format}
            </p>
          </div>
        </ContainerItem>
      </div>
    </>
  );
};

export default FaixaInfoProduto;
