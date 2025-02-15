import React from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      navigate("/login");

      toast.success("Logged out successfully.");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex justify-between bg-black items-center py-5 px-2">
      <div className="text-white">Logo</div>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handleLogout}
      >
        LOGOUT
      </button>
    </div>
  );
}

export default Header;
