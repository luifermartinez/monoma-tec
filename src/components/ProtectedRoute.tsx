import { Navigate, Outlet } from "react-router-dom";
import useGettingUser from "../hooks/useGettingUser";
import LoadingUser from "./LoadingUser";
import Navbar from "./layout/Navbar";

const ProtectedRoute = () => {
  const { loading, user } = useGettingUser();

  if (loading) return <LoadingUser />;

  if (!user) return <Navigate to="/auth/login" />;

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
