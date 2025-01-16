import { Input } from "../../../components/Input";
import { TemplateBase } from "../../../layouts/TemplateBase";

export function Login() {
  return (
    <TemplateBase>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">Login</h3>
              </div>
              <div className="card-body p-5">
                <form>
                  <div className="form-floating mb-3">
                    <Input type="email" />
                    <label>E-mail</label>
                  </div>
                  <div className="form-floating mb-3">
                    <Input type="password" />
                    <label>Senha</label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      id="inputRememberPassword"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label">
                      Remember Password
                    </label>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                    <a className="small" href="password.html">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <div className="d-grid gap-2 mt-2">
                    <button className="btn btn-primary" type="button">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <p className="sign-up">
                    Não tem uma conta?<a href="#"> Registre-se</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TemplateBase>
  );
}
