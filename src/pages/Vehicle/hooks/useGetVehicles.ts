import { useQuery } from "@tanstack/react-query"
import { getVehicles } from "../../../services/vehicle"
import { Vehicle } from "../../../models/Vehicle";
import { VehicleTypes } from "../types";

type Props = VehicleTypes.getVehiclesProps;

export const useGetVehicles = ({ page, size }: Props) => {
  return useQuery<Vehicle[] | null>({
    queryKey: ['vehicles'],
    queryFn: () => getVehicles({ page, size }),
  });
}