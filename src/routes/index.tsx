import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "books/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;