import { Vehicle } from "../../models/Vehicle";
import { FilterProps } from "../../utils/types/FilterProps";

export namespace VehicleTypes {

    export type getVehiclesProps = FilterProps;

    export type getVehicleProps = Vehicle['idVeiculo'];

    export type VehicleFormProps = {
        onSubmit: (data: Vehicle) => void;
        initialData ?: Partial<Vehicle>;
    }

    export type VehicleFormInputs = Partial<Vehicle>;
}