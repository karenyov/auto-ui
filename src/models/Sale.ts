import { Customer } from "./Customer";
import { Vehicle } from "./Vehicle";

export interface Sale {
  idCompra: number;
  dataCompra: Date;
  valorCompra: number;
  metodoPagamento: string;
  descricao: string;
  dataCriacao: string
  cliente: Customer;
  veiculo: Vehicle;
}