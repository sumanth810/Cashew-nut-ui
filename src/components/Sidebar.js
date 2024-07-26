import React from "react";
import "../styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="logo.png" alt="Logo" />
      <button>Dashboard</button>
      <button>Forms</button>
      <button>Trends</button>
    </div>
  );
};

export default Sidebar;
