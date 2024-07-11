import { ItemCarrinho } from "./item-carrinho-interface";

export interface UseItensCarrinhoContextType {
  itensCarrinhos: any | null;
  setItensCarrinho: React.Dispatch<React.SetStateAction<ItemCarrinho[] | null>>;
}
