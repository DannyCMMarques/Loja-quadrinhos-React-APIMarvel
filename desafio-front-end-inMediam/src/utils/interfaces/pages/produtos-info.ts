export interface ComicsData {
  id: number;
  title: string;
  prices: { price: any }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    name: string;
  };
  creators: {
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
  };
  description: string;
  pageCount: number;
}

export interface FreteData {
  street: string;
  district: string;
  city: string;
  state: string;
  erro?: boolean;
  cep?: string;
}

export interface ProdutoInfoProps {
  adicionarItemCarrinho: (item: any) => void;
}

export interface PrecoPaginaInfoProps {
  data: ComicsData | null | undefined;
  formatacao: string | number | undefined;
}

export interface ConteudoInfoProdutoProps {
  data:
    | {
        description: string;
        creators: {
          items: any;
        };
      }
    | null
    | undefined;
}

export interface AdicionarCarrinhoComponenteProps {
  handleRemoverValor: () => void;
  handleComprar: () => void;
  handleAdicionarValor: () => void;
  quantidade: number;
  setQuantidade: React.Dispatch<React.SetStateAction<number>>;
}
