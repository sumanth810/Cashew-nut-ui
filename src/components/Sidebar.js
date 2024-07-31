import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"; // Ensure TailwindCSS is imported properly

const Sidebar = () => {
  // Function to determine link classes based on active state
  const linkClasses = (isActive) => {
    const baseClasses = "w-full p-3 rounded mb-2 text-center";
    return isActive
      ? `${baseClasses} bg-green-500 text-white`
      : `${baseClasses} bg-blue-100 text-black hover:bg-red-500 hover:text-white`;
  };

  return (
    <div className="bg-gray-100 p-5 w-56 flex flex-col items-center">
      <img src="logo.png" alt="Logo" className="h-24 w-24 rounded-full mb-5" />
      <NavLink
        to="/dashboard"
        className={({ isActive }) => linkClasses(isActive)}
      >
        <button className="w-full">Dashboard</button>
      </NavLink>
      <NavLink to="/forms" className={({ isActive }) => linkClasses(isActive)}>
        <button className="w-full">Forms</button>
      </NavLink>
      <NavLink to="/trends" className={({ isActive }) => linkClasses(isActive)}>
        <button className="w-full">Trends</button>
      </NavLink>
    </div>
  );
};

export default Sidebar;
