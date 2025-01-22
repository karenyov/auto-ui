export function Spinner() {
  return (
    <div id="overlay" className="overlay">
      <div className="container mt-5">
        <div className="row">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="spinner"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
