import { useState } from "react";
import { useGetVehicles } from "./hooks/useGetVehicles";
import { Vehicle as VehicleModel } from "../../models/Vehicle";
import { PageProps } from "../../utils/types/PageProps";
import { Spinner } from "../../components/Spinner";
import { Pagination } from "../../components/Pagination";
import { formatCurrency } from "../../utils/format/formatCurrency";

export function Vehicle() {
  const [pagination, setPagination] = useState<PageProps>({
    page: 0,
    size: 10,
  });

  const { data, isLoading } = useGetVehicles(pagination);

  const handleChangePagination = (newPagination: {
    page: number;
    size: number;
  }) => {
    setPagination(newPagination);
    // mutate(newPagination);
  };

  const columns = [
    {
      name: "ID",
      selector: (row: VehicleModel) => row.idVeiculo,
      sortable: true,
    },
    {
      name: "Placa",
      selector: (row: VehicleModel) => row.placa,
      sortable: true,
    },
    {
      name: "Marca",
      selector: (row: VehicleModel) => row.marca,
      sortable: true,
    },
    {
      name: "Ano Modelo",
      selector: (row: VehicleModel) => row.anoModelo,
      sortable: true,
    },
    {
      name: "Venda",
      selector: (row: VehicleModel) => formatCurrency(row.precoVenda),
      sortable: true,
    },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container-fluid px-4">
      <h1 className="mt-4 mb-4">Veículos</h1>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <Pagination
              title={"Veículos"}
              page={pagination.page + 1}
              size={pagination.size}
              total={data?.length || 0}
              onChangePagination={handleChangePagination}
              columns={columns}
              data={data || []}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
