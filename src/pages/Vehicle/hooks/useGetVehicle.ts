import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../../../models/Vehicle";
import { getVehicle } from "../../../services/vehicle";

export const useGetVehicle = (id: Vehicle['idVeiculo']) => {
  return useQuery<Vehicle | null>({
    queryKey: ['vehicles'],
    queryFn: () => getVehicle(id),
  });
}