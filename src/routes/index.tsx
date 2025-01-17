import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Template } from "../layouts/Template";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/auth/Login";
import { FiTable } from "react-icons/fi";
import { IconType } from "react-icons";

type Props = {
  title: string;
  icon?: IconType;
  children?: Props[];
  isAuth?: boolean;
} & RouteObject;

export const routes: Props[] = [
  {
    path: "/",
    element: <Template />, // Layout principal
    title: "Core",
    isAuth: true,
    children: [
      {
        index: true,
        element: <Dashboard />,
        icon: FiTable,
        title: "Dashboard",
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
