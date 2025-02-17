import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const GuestRoutes = () => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <p className="h-screen bg-black text-white flex justify-center items-center text-[50px]">
        Loading....
      </p>
    );
  return user ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoutes;
