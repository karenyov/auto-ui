import { useParams } from "react-router-dom";
import { useGetVehicle } from "./hooks/useGetVehicle";
import { Spinner } from "../../components/Spinner";
import { formatCurrency } from "../../utils/format/formatCurrency";
import { formatDate } from "../../utils/format/formatDate";
import { formatNumber } from "../../utils/format/formatNumber";
import { FiEdit2 } from "react-icons/fi";

export function VehicleDetails() {
  const { id } = useParams();

  if (!id) {
    return <div>Veículo não encontrado</div>;
  }

  const { data, isLoading } = useGetVehicle(Number(id || 0));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="card-title">Informaçoes Gerais</h6>
              <button
                type="button"
                className="btn btn-primary btn-sm rounded-pill"
              >
                <FiEdit2 />
              </button>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <p className="card-text m-0">
                  <b>Placa:</b> {data?.placa}
                </p>
                <p className="card-text m-0">
                  <b>Marca: </b> {data?.marca}
                </p>
                <p className="card-text m-0">
                  <b>Modelo: </b> {`${data?.modelo} / ${data?.anoModelo}`}
                </p>
                <p className="card-text m-0">
                  <b>Cor: </b> {data?.cor}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text m-0">
                  <b>Quilometragem: </b>{" "}
                  {formatNumber(data?.quilometragem || 0)}
                </p>
                <p className="card-text m-0">
                  <b>Categoria: </b> {data?.categoria}
                </p>
                <p className="card-text m-0">
                  <b>Opcionais: </b> {data?.opcionais}
                </p>
              </div>
            </div>

            <hr />
            <h6 className="card-title">Informações Financeiras </h6>

            <div className="row mt-3">
              <div className="col-md-6">
                <p className="card-text m-0">
                  <b>Venda:</b> {formatCurrency(data?.precoVenda || 0)}
                </p>
                <p className="card-text m-0">
                  <b>Compra:</b> {formatCurrency(data?.precoCompra || 0)}
                </p>
                <p className="card-text m-0">
                  <b>FIPE:</b> {formatCurrency(data?.tabelaFipe || 0)}
                </p>
                <p className="card-text m-0">
                  <b>Financiado:</b> {data?.financiado ? "Sim" : "Nao"}
                </p>
                <p className="card-text m-0">
                  <b>Observação:</b> {data?.observacao}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text m-0">
                  <b>IPVA:</b> {formatCurrency(data?.valorIpva || 0)}
                </p>
                <p className="card-text m-0">
                  <b>Vencimento:</b>{" "}
                  {data?.vencimentoIpva ? formatDate(data?.vencimentoIpva) : ""}
                </p>
                <p className="card-text m-0">
                  <b>Valor Devido:</b> {formatCurrency(data?.valorDevido || 0)}
                </p>
              </div>
            </div>

            <hr />
            <h6 className="card-title">Informações do Fornecedor </h6>

            <div className="row mt-3">
              <div className="col-md-6">
                <p className="card-text m-0">
                  <b>Nome:</b> {data?.nomeFornecedor}
                </p>
              </div>
              <div className="col-md-6">
                <p className="card-text m-0">
                  <b>Telefone:</b> {data?.telefoneFornecedor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
