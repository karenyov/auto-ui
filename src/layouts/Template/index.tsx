import { Navbar } from "../Navbar";
import { SideNavbar } from "../SideNavbar";

export function Template() {
  return (
    <div id="sb-nav-fixed">
      <Navbar />

      <div id="layoutSidenav">
        <SideNavbar />

        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Dashboard</h1>
            </div>
          </main>
          <footer className="py-4 mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright &copy; Auto UI 2025</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
