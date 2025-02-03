import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { Icon } from "../../components/Icon";
import { IconList } from "../../components/IconList";
import { ThemeSwitch } from "../../components/ThemeSwitch";
import useSidebarToggle from "../../hooks/useSidebarToggle";

export function Navbar() {
  const { toggle } = useSidebarToggle();

  const handleToggleSidebar = () => {
    toggle();
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="index.html">
          <img src="/icon.png" alt="icon" className="img-icon" />
          Auto
        </a>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          onClick={handleToggleSidebar}
        >
          <Icon IconComponent={FiMenu} />
        </button>
        <div
          className="ms-auto me-0 me-md-3 my-2 my-md-0"
          style={{ flexGrow: 1 }}
        ></div>

        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item theme-switch">
            <ThemeSwitch />
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Icon IconComponent={FaUser} />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a
                  className="dropdown-item d-flex justify-content-between"
                  href="#!"
                >
                  <span className="me-2">Perfil</span>
                  <IconList IconComponent={FiUser} color="black" />
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <a
                className="dropdown-item d-flex justify-content-between"
                href="#!"
              >
                <span className="me-2">Sair</span>
                <IconList IconComponent={FiLogOut} color="black" />
              </a>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}
