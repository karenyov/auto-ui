export interface Vehicle {
  idVeiculo: number;
  placa: string;
  marca: string;
  modelo: string;
  anoFabricacao: number;
  anoModelo: number;
  cor: string;
  precoVenda: number;
  precoCompra: number;
  tabelaFipe: number;
  quilometragem: number;
  categoria: string;
  nomeFornecedor: string;
  telefoneFornecedor: string;
  opcionais: string;
  valorIpva: number;
  vencimentoIpva: string;
  valorDevido: number;
  valorParcela: number;
  financiado: boolean;
  observacao: string;
}