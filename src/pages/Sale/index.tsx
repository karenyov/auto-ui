import { useState } from "react";
import { Pagination } from "../../components/Pagination";
import { Spinner } from "../../components/Spinner";
import { useGetSales } from "./hooks/useGetSales";
import { PageProps } from "../../utils/types/PageProps";
import { Sale as SaleModel } from "../../models/Sale";
import { formatDate } from "../../utils/format/formatDate";
import { formatCurrency } from "../../utils/format/formatCurrency";
import { TitlePage } from "../../components/TitlePage";

export function Sale() {
  const columns = [
    {
      name: "ID",
      selector: (row: SaleModel) => row.idCompra,
      sortable: true,
    },
    {
      name: "Cliente",
      selector: (row: SaleModel) => row.cliente.nome,
      sortable: true,
    },
    {
      name: "Data Compra",
      selector: (row: SaleModel) => formatDate(row.dataCompra),
      sortable: true,
    },
    {
      name: "Valor",
      selector: (row: SaleModel) => formatCurrency(row.valorCompra),
      sortable: true,
    },
  ];

  const { data, isLoading, refetch } = useGetSales();

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

  const handleRowClick = (row: SaleModel) => {
    // navigate(`/vehicle/${row.idVeiculo}`);
  };

  return (
    <div className="container-fluid px-4">
      <TitlePage
        title={"Vendas"}
        buttons={
          <button type="button" className="btn btn-primary btn-sm rounded-pill">
            incluir venda
          </button>
        }
      />
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            {isLoading ? (
              <Spinner />
            ) : (
              <Pagination
                title={"Vendas"}
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
