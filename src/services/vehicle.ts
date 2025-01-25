import { apiClient } from "../api/apiClient";
import { Vehicle } from "../models/Vehicle";
import { VehicleTypes } from "../pages/Vehicle/types";

export const getVehicles = async ({ page = 0, size = 10 }: VehicleTypes.getVehiclesProps) : Promise<Vehicle[] | null> => {
  const response = await apiClient.get(`/vehicle/all?page=${page}&size=${size}` );
  if (response.data && response.data._embedded && Array.isArray(response.data._embedded.vehicleResponses)) {
    return response.data._embedded.vehicleResponses; 
  }

  return null;
}

export const getVehicle = async (id: VehicleTypes.getVehicleProps) : Promise<Vehicle | null> => {
  const response = await apiClient.get(`/vehicle?vehicleId=${id}` );
  
  if (response.data) {
    return response.data; 
  }

  return null;
}