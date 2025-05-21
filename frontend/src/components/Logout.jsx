import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({ ...authUser, Users: null });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div>
      <button className="btn btn-danger" onClickCapture={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
