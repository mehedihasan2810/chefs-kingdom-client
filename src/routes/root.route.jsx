import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root.layout";
import Home from "../pages/Home/Home";
import Cuisines from "../pages/Cuisines/Cuisines";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Blog from "../pages/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://chefs-kingdom-server.vercel.app/chefs"),
      },
      {
        path: "/chefs/:id",
        element: <Cuisines />,
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
      {
        path: "/blog",
        element: <Blog />,
      },

    ],
  },
]);
