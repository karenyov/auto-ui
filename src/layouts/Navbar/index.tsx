
export function Navbar() {
  return (
    <div className="container-scroller">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html">logo</a>
            <a className="sidebar-brand brand-logo-mini" href="index.html">logo</a>
          </div>
          <ul className="nav">
            <li className="nav-item profile">
              <div className="profile-desc">
                <div className="profile-pic">
                  <div className="count-indicator">
                    <img className="img-xs rounded-circle" src="" alt="" />
                    <span className="count bg-success"></span>
                  </div>
                  <div className="profile-name">
                    <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                    <span>Gold Member</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item nav-category">
              <span className="nav-link">Navigation</span>
            </li>
            <li className="nav-item menu-items">
              <a className="nav-link" href="index.html">
                <span className="menu-icon">
                  <i className="mdi mdi-speedometer"></i>
                </span>
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid page-body-wrapper">
          <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
              <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span className="mdi mdi-menu"></span>
              </button>

              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item dropdown">
                  <a className="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                    <div className="navbar-profile">
                      <img className="img-xs rounded-circle" src="assets/images/faces/face15.jpg" alt="" />
                      <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                      <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                    </div>
                  </a>
                </li>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="mdi mdi-format-line-spacing"></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
  )
}