import { Navigate, Outlet } from "react-router-dom";
import useGettingUser from "../hooks/useGettingUser";
import LoadingUser from "./LoadingUser";

const PublicRoute = () => {
  const { loading, user } = useGettingUser();

  if (loading) return <LoadingUser />;

  if (user) return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default PublicRoute;
