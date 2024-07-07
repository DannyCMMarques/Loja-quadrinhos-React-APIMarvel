import React from "react";
import ContainerItem from "../../components/container";
import { CiWarning } from "react-icons/ci";

const NotFound = () => {
  return (
    <ContainerItem>
      <div className="mt-40 mb-20 md:mt-52 sm:mt-20 sm:mb-20 md:mt-86 sm:44 h-86 items-center">
        <div className="flex justify-center items-center">
          <CiWarning className="text-7xl text-white" size={44} />
        </div>
        <h5 className="flex justify-center text-amber-400 mt-5">
          Ops! página não encontrada
        </h5>
      </div>
    </ContainerItem>
  );
};

export default NotFound;
