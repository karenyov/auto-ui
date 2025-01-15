import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Template } from "../layouts/Template";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/auth/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Template />, // Layout principal
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // {
      //   path: "home",
      //   children: [
      //     { index: true, element: <Home /> },
      //     { path: "subpage", element: <SubPage /> },
      //   ],
      // },
    ],
  },
  { path: "/login", element: <Login /> },
  // { path: "*", element: <NotFound /> }, // Página 404
];

const router = createBrowserRouter(routes);

export default router;
