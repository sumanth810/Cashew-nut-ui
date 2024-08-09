import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setAuthenticated(false); // Update the state to reflect that the user is not authenticated
    navigate("/login"); // Redirect to the login page
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white bg-red-500 p-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;
