import { apiClient } from "../api/apiClient";
import { Customer } from "../models/Customer";

export const getCustomers = async () : Promise<Customer[] | null> => {
  const response = await apiClient.get(`/customer` );
  if (response.data && response.data._embedded && Array.isArray(response.data._embedded.customerResponses)) {
    return response.data._embedded.customerResponses; 
  }

  return null;
}