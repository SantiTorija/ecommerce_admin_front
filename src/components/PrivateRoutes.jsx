import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const userState = useSelector((state) => state.admin);
  if (!userState.token) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
