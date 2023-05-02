import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root.layout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('https://chefs-kingdom-server.vercel.app/chefs')
      },
    ],
  },
]);
