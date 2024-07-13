import React, { createContext, useEffect, useState } from "react";
import { ContainerItemProps } from "../interfaces/container-items-props";
import { UseItensCarrinhoContextType } from "../interfaces/pages/carrinho-compra";

export const UseItensCarrinhoContext = createContext<
  UseItensCarrinhoContextType | undefined
>(undefined);

export const UseItensCarrinhoProvider = ({
  children,
}: ContainerItemProps) => {
  const [itensCarrinhos, setItensCarrinho] = useState(() => {
    const itensString = localStorage.getItem("itensCompra");
    return itensString ? JSON.parse(itensString) : [];
  });

  const adicionarItemCarrinho = (item: any) => {
    const itensCarrinhoString: any = localStorage.getItem("itensCompra");
    let itensCarrinho: any[] = [];

    if (itensCarrinhoString) {
      itensCarrinho = JSON.parse(itensCarrinhoString);
    }

    const novoId =
      itensCarrinho.length > 0
        ? itensCarrinho[itensCarrinho.length - 1].id + 1
        : 1;

    itensCarrinho.push({
      id: novoId,
      item: item,
    });

    localStorage.setItem("itensCompra", JSON.stringify(itensCarrinho));
    setItensCarrinho(itensCarrinho);
  };

  const removerItemCarrinho = (itemId: number) => {
    const updatedItems = itensCarrinhos.filter((item) => item.id !== itemId);
    localStorage.setItem("itensCompra", JSON.stringify(updatedItems));
    setItensCarrinho(updatedItems);
  };

  const removerTodosItens = () => {
    const updatedItems: any[] = [];
    localStorage.setItem("itensCompra", JSON.stringify(updatedItems));
    setItensCarrinho(updatedItems);
  };
  useEffect(() => {
    localStorage.setItem("itensCompra", JSON.stringify(itensCarrinhos));
  }, [itensCarrinhos]);

  return (
    <UseItensCarrinhoContext.Provider
      value={{
        itensCarrinhos,
        adicionarItemCarrinho,
        removerItemCarrinho,
        removerTodosItens,
      }}
    >
      {children}
    </UseItensCarrinhoContext.Provider>
  );
};
