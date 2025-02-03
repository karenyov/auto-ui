import { Vehicle } from "../../models/Vehicle";
import { VehicleForm } from "./form";

export function VehicleInsert() {
  const handleInsert = (data: Vehicle) => {
    console.log("Inserindo veículo:", data);
    // Lógica para inserir no banco ou chamar API
  };

  return <VehicleForm onSubmit={handleInsert} />;
}
