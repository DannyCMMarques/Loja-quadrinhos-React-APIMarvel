import React, { createContext, useEffect, useState } from "react";
import { ContainerItemProps } from "../interfaces/container-items-props";

export const UseItensHistoricoContext = createContext<
  UseItenshistoricoContextType | undefined
>(undefined);

export const UseItensHistoricoProvider: React.FC<ContainerItemProps> = ({
  children,
}) => {
  const [itensHistorico, setItenshistorico] = useState(() => {
    const itensString = localStorage.getItem("itensHistorico");
    return itensString ? JSON.parse(itensString) : [];
  });

  const adicionarItemhistorico = (item: any) => {
    const itensHistoricoString: any = localStorage.getItem("itensHistorico");
    let itensHistorico: any[] = [];

    if (itensHistoricoString) {
      itensHistorico = JSON.parse(itensHistoricoString);
    }

    const novoId =
      itensHistorico.length > 0
        ? itensHistorico[itensHistorico.length - 1].id + 1
        : 1;

    itensHistorico.push({
      id: novoId,
      item: item,
    });

    localStorage.setItem("itensHistorico", JSON.stringify(itensHistorico));
    setItenshistorico(itensHistorico);
  };

  const removerItemhistorico = (itemId: number) => {
    const updatedItems = itensHistorico.filter((item) => item.id !== itemId);
    localStorage.setItem("itensHistorico", JSON.stringify(updatedItems));
    setItenshistorico(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("itensHistorico", JSON.stringify(itensHistorico));
  }, [itensHistorico]);

  return (
    <UseItensHistoricoContext.Provider
      value={{ itensHistorico, adicionarItemhistorico, removerItemhistorico }}
    >
      {children}
    </UseItensHistoricoContext.Provider>
  );
};
