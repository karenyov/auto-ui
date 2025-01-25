import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import { Spinner } from "../../components/Spinner";
import { PageProps } from "../../utils/types/PageProps";
import { useGetCustomers } from "./hooks/useGetCustomers";
import { Customer as CustomerModel } from "../../models/Customer";

export function Customer() {
  const columns = [
    {
      name: "ID",
      selector: (row: CustomerModel) => row.clienteId,
      sortable: true,
    },
    {
      name: "Nome",
      selector: (row: CustomerModel) => row.nome,
      sortable: true,
    },
    {
      name: "E-mail",
      selector: (row: CustomerModel) => row.email,
      sortable: true,
    },
    {
      name: "UF",
      selector: (row: CustomerModel) => row.estado,
      sortable: true,
    },
  ];

  const { data, isLoading, refetch } = useGetCustomers();

  const [pagination, setPagination] = useState<PageProps>({
    page: 0,
    size: 10,
  });

  const handleChangePagination = (newPagination: {
    page: number;
    size: number;
  }) => {
    setPagination(newPagination);
    // mutate(newPagination);
  };

  const handleRowClick = (row: CustomerModel) => {
    // navigate(`/vehicle/${row.idVeiculo}`);
  };

  console.log("data", data);

  return (
    <div className="container-fluid px-4">
      <h4 className="mt-4 mb-4">Clientes</h4>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            {isLoading ? (
              <Spinner />
            ) : (
              <Pagination
                title={"Clientes"}
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
    </div>
  );
}
