import { useQuery } from "@tanstack/react-query";
import { Sale } from "../../../models/Sale";
import { getSales } from "../../../services/sale";

export const useGetSales = () => {
  return useQuery<Sale[] | null>({
    queryKey: ['sales'],
    queryFn: () => getSales(),
  });
}