import { apiClient } from "../api/apiClient";
import { Sale } from "../models/Sale";

export const getSales = async () : Promise<Sale[] | null> => {
  const response = await apiClient.get(`/sale` );
  if (response.data && response.data._embedded && Array.isArray(response.data._embedded.purchaseResponses)) {
    return response.data._embedded.purchaseResponses; 
  }

  return null;
}