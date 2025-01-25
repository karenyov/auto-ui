import { customersHandlers } from "./handlers/customers";
import { salessHandlers } from "./handlers/sale";
import { veiculosHandlers } from "./handlers/vehicles";

export const handlers = [
  ...veiculosHandlers,
  ...customersHandlers,
  ...salessHandlers
];