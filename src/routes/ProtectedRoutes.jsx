import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <p className="h-screen bg-black text-white flex justify-center items-center text-[50px]">
        Loading....
      </p>
    );
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
