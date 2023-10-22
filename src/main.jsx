import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root.route";
import AuthProvider from "./contexts/AuthProvider";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import theme from "./libs/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
