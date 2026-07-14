import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Explore from "../pages/Explore";
import Details from "../pages/Details";
import AddBook from "../pages/AddBook";
import ManageBooks from "../pages/ManageBooks";

import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";

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
      {
        path: "add-book",
        element: (
          <ProtectedRoute>
            <AddBook />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <ProtectedRoute>
            <ManageBooks />
          </ProtectedRoute>
        ),
      },
      {
  path: "about",
  element: <About />,
},
{
  path: "contact",
  element: <Contact />,
},
    ],
  },
]);

export default router;