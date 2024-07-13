import React from 'react'
import ContainerItem from '../container'
import { FaBook, FaBookOpen } from 'react-icons/fa6'
import { MESSAGES } from '../../utils/messages'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { BiWorld } from 'react-icons/bi'

const FaixaInfoProduto = ({data}) => {
  return (
    <> <div className="bg-red-600 w-full h-24 mt-8 hidden sm:hidden md:flex justify-center items-center">
    <ContainerItem>
      <div className="flex w-full gap-2 sm:gap-2 md:gap-40 justify-between items-center">
        <p className="font-bold text-white block sm:block md:flex gap-2">
          <FaBookOpen size={20} className="text-white" />{" "}
          {MESSAGES.PAGE_PRODUTO_INFO.PAGINAS}: {data?.pageCount}
        </p>
        <p className="font-bold text-white block sm:block md:flex gap-2">
          <IoMdInformationCircleOutline
            size={20}
            className="text-white"
          />{" "}
          {data?.isbn !== ""
            ? `ISBN: ${data?.isbn}`
            : `Digital Id: ${data.digitalId}`}
        </p>
        <p className="font-bold text-white block sm:block md:flex gap-2">
          <BiWorld size={20} className="text-white" />{" "}
          {MESSAGES.PAGE_PRODUTO_INFO.IDIOMA}: English
        </p>
        <p className="font-bold text-white block sm:block md:flex gap-2">
          <FaBook size={20} className="text-white" />{" "}
          {MESSAGES.PAGE_PRODUTO_INFO.FORMATO}: {data?.format}
        </p>
      </div>
    </ContainerItem>
  </div></>
  )
}

export default FaixaInfoProduto