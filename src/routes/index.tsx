import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Template } from "../layouts/Template";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/auth/Login";
import { FiBox, FiFileText, FiTable, FiTruck, FiUsers } from "react-icons/fi";
import { IconType } from "react-icons";
import { Vehicle } from "../pages/Vehicle";
import { VehicleDetails } from "../pages/Vehicle/details";
import { Customer } from "../pages/Customer";
import { Sale } from "../pages/Sale";

type Props = {
  title?: string;
  icon?: IconType;
  children?: Props[];
  isAuth?: boolean;
  hiddenMenu?: boolean;
} & RouteObject;

export const routes: Props[] = [
  {
    path: "/",
    element: <Template />, // aqui tenho o <Outlet />
    title: "Core",
    isAuth: true,
    children: [
      {
        index: true,
        element: <Dashboard />,
        icon: FiTable,
        title: "Dashboard",
      },
      {
        path: "vehicle",
        element: <Vehicle />,
        icon: FiTruck,
        title: "Veículos",
        children: [
          {
            path: ":id",
            element: <VehicleDetails />,
            hiddenMenu: true,
          },
        ],
      },
      {
        path: "customer",
        element: <Customer />,
        icon: FiUsers,
        title: "Clientes",
      },
      {
        path: "sales",
        element: <Sale />,
        icon: FiBox,
        title: "Vendas",
      },
      // {
      //   path: "home",
      //   children: [
      //     { index: true, element: <Home /> },
      //     { path: "subpage", element: <SubPage /> }, // pode ter subpastas
      //   ],
      // },
    ],
  },
  { path: "/login", element: <Login />, title: "Login" },
  // { path: "*", element: <NotFound /> }, // Página 404
];

const router = createBrowserRouter(routes);

export default router;
