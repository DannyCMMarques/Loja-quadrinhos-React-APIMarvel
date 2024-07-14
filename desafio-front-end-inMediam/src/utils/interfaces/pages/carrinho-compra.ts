import { ReactNode } from "react";

export interface ItemCarrinhoProps {
  id: number;
  item: {
    price: number;
    amount: number;
  };
}

export interface FormComponentProps {
  dataItensCarrinho: DataItensFinalizarCompra;
  onClose: () => void;
}

export interface DataItensFinalizarCompra {
  valorTotal: number;
  totalItens: ItemCarrinhoProps[];
}
export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose:any;
  size: any;
}
export interface ItemThumbnail {
  path: string;
  extension: string;
}

export interface Item {
  id: number;
  title: string;
  price: number;
  amount: number;
  thumbnail: ItemThumbnail;
}

export interface ItemCarrinhoProps {
  data: {
    item: Item;
  };
  valorAtualizado: (valor: number) => void;
}

export interface ItemUseContext {
  id: number;
  item: any;
}

export interface UseItensCarrinhoContextType {
  itensCarrinhos: Item[];
  adicionarItemCarrinho: (item: any) => void;
  removerItemCarrinho: (itemId: number) => void;
  removerTodosItens: () => void;
}

export interface UseCarrinhoCompraProps {
  children: ReactNode;
}
