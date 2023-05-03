import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { currentUser, isAuthLoading } = useAuthContext();

  if (isAuthLoading) {
    return <h1>Loading...</h1>;
  }

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
};

export default PrivateRoute;
