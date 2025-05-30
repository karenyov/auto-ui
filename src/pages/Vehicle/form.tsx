import * as yup from "yup";
import { Input } from "../../components/Input";
import { Vehicle } from "../../models/Vehicle";
import { VehicleTypes } from "./types";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NumericFormat, PatternFormat } from "react-number-format";

export function VehicleForm({
  initialData = {},
  onSubmit,
}: VehicleTypes.VehicleFormProps) {
  const vehicleSchema = yup
    .object()
    .shape({
      placa: yup.string().required("O campo Placa é obrigatório"),
      marca: yup.string().required("O campo Marca é obrigatório"),
      modelo: yup.string().required("O campo Modelo é obrigatório"),
      cor: yup.string().optional(),
    })
    .partial();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Vehicle>({
    defaultValues: initialData,
    resolver: yupResolver(vehicleSchema) as any,
  });

  const handleFormSubmit: SubmitHandler<Vehicle> = (data) => {
    console.log("data", data);

    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <h6 className="card-title">Informações Gerais </h6>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Placa</label>
                    <Input
                      {...register("placa")}
                      error={errors.placa?.message}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Marca</label>
                    <Input
                      {...register("marca")}
                      error={errors.marca?.message}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Modelo</label>
                    <Input
                      {...register("modelo")}
                      error={errors.modelo?.message}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cor</label>
                    <Input {...register("cor")} error={errors.cor?.message} />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Categoria</label>
                    <Input
                      {...register("categoria")}
                      error={errors.categoria?.message}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Opcionais</label>
                    <Input
                      {...register("opcionais")}
                      error={errors.opcionais?.message}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Quilometragem</label>
                    <Input
                      {...register("quilometragem")}
                      error={errors.quilometragem?.message}
                    />
                  </div>
                </div>
              </div>

              <hr />
              <h6 className="card-title">Informações Financeiras </h6>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Venda</label>
                    <NumericFormat
                      prefix="R$ "
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale={true}
                      customInput={(props) => (
                        <Input
                          {...register("precoVenda")}
                          error={errors.precoVenda?.message}
                          {...props}
                        />
                      )}
                      onValueChange={(values) => {
                        setValue("precoVenda", values.floatValue || 0);
                      }}
                      value={getValues("precoVenda")}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Compra</label>
                    <NumericFormat
                      prefix="R$ "
                      thousandSeparator="."
                      decimalSeparator=","
                      decimalScale={2}
                      fixedDecimalScale={true}
                      customInput={(props) => (
                        <Input
                          {...register("precoCompra")}
                          error={errors.precoCompra?.message}
                          {...props}
                        />
                      )}
                      onValueChange={(values) => {
                        setValue("precoCompra", values.floatValue || 0);
                      }}
                      value={getValues("precoCompra")}
                    />
                  </div>
                </div>
              </div>

              <hr />
              <h6 className="card-title">Informações do Fornecedor </h6>

              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nome</label>
                    <Input
                      {...register("nomeFornecedor")}
                      error={errors.nomeFornecedor?.message}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Telefone</label>
                    <PatternFormat
                      format="(##) ####-####"
                      mask="_"
                      allowEmptyFormatting={true}
                      customInput={(props) => (
                        <Input
                          {...register("telefoneFornecedor")}
                          error={errors.telefoneFornecedor?.message}
                          {...props}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 d-flex justify-content-end">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
