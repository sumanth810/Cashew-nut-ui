import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setAuthenticated }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    localStorage.removeItem("jwtToken"); // Remove JWT from localStorage
    setAuthenticated(false); // Update authentication state
    navigate("/login"); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout} // Attach logout handler
      className="text-white bg-red-500 p-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
