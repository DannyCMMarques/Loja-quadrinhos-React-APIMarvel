export interface Frete {
  tipo: string;
  valor: any;
}

export interface DadosCep {
  street: string;
  district: string;
  city: string;
  state: string;
  erro?: boolean;
  cep?: string;
}
export interface PropsCepComponentes {
  handleData: (data: DadosCep) => void;
  handleCep: (cep: string) => void;
  handleFrete: (frete: FreteSelecionado | null) => void;
}

export interface FreteSelecionado {
  frete: number;
  tipo: string;
  valor: any;
  cep: any;
  dados: DadosCep;
}
