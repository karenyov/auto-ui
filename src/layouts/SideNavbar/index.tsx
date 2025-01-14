import { FiTable } from "react-icons/fi";
import { Icon } from "../../components/Icon";

export function SideNavbar() {
  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon">
                  <i className="fas fa-tachometer-alt"></i>
                  <Icon IconComponent={FiTable} />
                </div>
                Dashboard
              </a>
            </div>
          </div>
          <div className="sb-sidenav-footer">
            <div className="small">Logado como:</div>
            João
          </div>
        </nav>
      </div>
    </>
  );
}
