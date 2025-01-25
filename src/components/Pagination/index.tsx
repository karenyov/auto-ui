import DataTable, { TableProps } from "react-data-table-component";
import { useTheme } from "../../contexts/themeContext";

type Props<T> = {
  title: string;
  page: number;
  size: number;
  total: number;
  onClickRow?: (row: T) => void;
  onChangePagination: (pagination: { page: number; size: number }) => void;
} & TableProps<T>;

export function Pagination<T>({
  size,
  onChangePagination,
  columns,
  data,
  title,
  onClickRow,
  ...rest
}: Props<T>) {
  const { theme } = useTheme();

  const handleChangePage = (newPage: number) => {
    onChangePagination({
      page: newPage,
      size,
    });
  };

  const handleChangeRowsPerPage = (newSize: number) => {
    onChangePagination({
      page: 1,
      size: newSize,
    });
  };

  const tableCustomStyles = {
    table: {
      style: {
        backgroundColor: theme === "dark" ? "#191c24" : "#FFF",
      },
    },
    header: {
      style: {
        backgroundColor: theme === "dark" ? "#191c24" : "#FFF",
        color: theme === "dark" ? "#FFF" : "#000",
      },
    },
    headRow: {
      style: {
        fontSize: "17px",
        color: theme === "dark" ? "#FFF" : "#000",
        backgroundColor: theme === "dark" ? "#191c24" : "#FFF",
      },
    },
    rows: {
      style: {
        backgroundColor: theme === "dark" ? "#191c24" : "#FFF",
        color: theme === "dark" ? "#FFF" : "#000",
        "&:hover": {
          backgroundColor: theme === "dark" ? "#12151e" : "#eaeaea",
        },
      },
    },
    noData: {
      style: {
        color: theme === "dark" ? "#FFF" : "#000",
        backgroundColor: theme === "dark" ? "#191c24" : "#FFF",
      },
    },
    pagination: {
      style: {
        backgroundColor: theme === "dark" ? "#191c24" : "#FFF",
        color: theme === "dark" ? "#FFF" : "#000",
      },
    },
  };
  const paginationOptions = {
    rowsPerPageText: "Página:",
    rangeSeparatorText: "de",
  };

  return (
    <DataTable
      title={title}
      columns={columns}
      data={data || []}
      pagination
      paginationServer
      paginationTotalRows={data?.length || 0}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      paginationPerPage={size}
      className="pagination-custom"
      customStyles={tableCustomStyles}
      onRowClicked={onClickRow}
      paginationComponentOptions={paginationOptions}
      {...rest}
    />
  );
}
