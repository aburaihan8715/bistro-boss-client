import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (user) {
    return children;
  }
  // NOTE: first curly bracket of state means javascript mode on then send object
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
