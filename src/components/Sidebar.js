import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

const Sidebar = () => {
  // Function to determine link classes based on active state
  const linkClasses = (isActive) => {
    const baseClasses =
      "w-full p-3 rounded mb-2 text-center transition-all border-4";
    return isActive
      ? `${baseClasses} bg-orange-700 text-white border-orange-800 shadow-md`
      : `${baseClasses} bg-orange-100 text-black border-orange-300 hover:bg-orange-400 hover:text-white hover:border-orange-400`;
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
