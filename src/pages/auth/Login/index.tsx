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
              <div className="card-body">
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
                      Forgot Password?
                    </a>
                    <a className="btn btn-primary" href="index.html">
                      Login
                    </a>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center py-3">
                <div className="small">
                  <a href="register.html">Need an account? Sign up!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TemplateBase>
  );
}
