export interface Thumbnail {
  path: string;
  extension: string;
}

export interface TotalItem {
  thumbnail: Thumbnail;
  title: string;
  amount: number;
  price: number;
}

export interface DadosCompra {
  totalItens: TotalItem[];
  valorTotal: number;
  data: string;
}

export interface DadosPessoais {
  firstname: string;
}

export interface DadosPessoais {
  firstname: string;
}

export interface ItemHistorico {
  id: string;
  item: {
    dadosCompra: DadosCompra;
    dadosPessoais: DadosPessoais;
    dataCompra: string;
    TotalItem: TotalItem[];
  };
}

export interface ListaHistoricoProps {
  dados: ItemHistorico;
  OpenModal: () => void;
}

export interface HistoricoDetalhamentoProps {
  dados: ItemHistorico;
}
