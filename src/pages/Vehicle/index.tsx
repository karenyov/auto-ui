import { useEffect, useState } from "react";
import { useGetVehicles } from "./hooks/useGetVehicles";
import { Vehicle as VehicleModel } from "../../models/Vehicle";
import { PageProps } from "../../utils/types/PageProps";
import { Spinner } from "../../components/Spinner";
import { Pagination } from "../../components/Pagination";
import { formatCurrency } from "../../utils/format/formatCurrency";
import { Outlet, useNavigate } from "react-router-dom";
import { TitlePage } from "../../components/TitlePage";

export function Vehicle() {
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

  const isDetailsPage = location?.pathname?.includes("/vehicle/");

  const navigate = useNavigate();

  const [pagination, setPagination] = useState<PageProps>({
    page: 0,
    size: 10,
  });

  const { data, isLoading, refetch } = useGetVehicles(pagination);

  const handleChangePagination = (newPagination: {
    page: number;
    size: number;
  }) => {
    setPagination(newPagination);
    // mutate(newPagination);
  };

  const handleRowClick = (row: VehicleModel) => {
    navigate(`/vehicle/${row.idVeiculo}`);
  };

  const handleInsertVehicle = () => {
    navigate(`/vehicle/form`);
  };

  useEffect(() => {
    if (!isDetailsPage) {
      refetch();
    }
  }, [isDetailsPage]);

  return (
    <div className="container-fluid px-4">
      <TitlePage
        title={"Veículos"}
        buttons={
          <button
            type="button"
            className="btn btn-primary btn-sm rounded-pill"
            onClick={handleInsertVehicle}
          >
            incluir veículo
          </button>
        }
      />

      {isDetailsPage && <Outlet />}

      {!isDetailsPage && (
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {isLoading ? (
                <Spinner />
              ) : (
                <Pagination
                  title={"Veículos"}
                  page={pagination.page + 1}
                  size={pagination.size}
                  total={data?.length || 0}
                  onChangePagination={handleChangePagination}
                  columns={columns}
                  data={Array.isArray(data) ? data : []}
                  onClickRow={handleRowClick}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
