import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root.layout";
import Home from "../pages/Home/Home";
import Cuisines from "../pages/Cuisines/Cuisines";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./private.route";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chefs-kingdom-server.vercel.app/chefs"),
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivateRoute>
            <Cuisines />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chefs-kingdom-server.vercel.app/chefs/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
