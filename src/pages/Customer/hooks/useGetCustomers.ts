import { useQuery } from "@tanstack/react-query"
import { getCustomers } from "../../../services/customer";
import { Customer } from "../../../models/Customer";

export const useGetCustomers = () => {
  return useQuery<Customer[] | null>({
    queryKey: ['customers'],
    queryFn: () => getCustomers(),
  });
}