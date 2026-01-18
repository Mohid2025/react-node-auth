import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className="flex justify-center mt-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <button
        onClick={logout}
        className="mt-4 bg-red-400 p-2 rounded"
      >
        Logout
      </button>

    </div>
  );
};

export default Dashboard;
