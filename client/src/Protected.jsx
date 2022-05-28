import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useLocalStorage } from "./utils/useLocalStorage";

export default function Protected() {
  const [user] = useLocalStorage("user");
  const location = useLocation();

  if (!user) {
    return <Navigate to={`/login`} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
