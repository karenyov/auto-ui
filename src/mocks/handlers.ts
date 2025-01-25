import { customersHandlers } from "./handlers/customers";
import { veiculosHandlers } from "./handlers/vehicles";

export const handlers = [
  ...veiculosHandlers,
  ...customersHandlers
];