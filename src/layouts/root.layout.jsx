import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </main>
  );
};

export default Root;
