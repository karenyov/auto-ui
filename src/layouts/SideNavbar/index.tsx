import { NavLink } from "react-router-dom";
import { IconList } from "../../components/IconList";
import { routes } from "../../routes";

export function SideNavbar() {
  const routesSideNavbar = routes.filter((route) => route.isAuth);

  return (
    <>
      <div id="layoutSidenav_nav">
        <nav
          className="sb-sidenav accordion sb-sidenav-dark"
          id="sidenavAccordion"
        >
          <div className="sb-sidenav-menu">
            <div className="nav">
              {routesSideNavbar.map((route, index) => (
                <div key={index}>
                  <div className="sb-sidenav-menu-heading">{route.title}</div>

                  {route.children?.map((childRoute) => (
                    <NavLink
                      to={childRoute.path || "/"}
                      end
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                    >
                      <div className="sb-nav-link-icon">
                        {childRoute.icon ? (
                          <IconList
                            IconComponent={childRoute.icon}
                            color="black"
                          />
                        ) : (
                          <i className="fas fa-tachometer-alt"></i>
                        )}
                      </div>
                      {childRoute.title}
                    </NavLink>
                  ))}
                </div>
              ))}
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
