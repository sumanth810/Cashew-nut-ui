import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="logo.png" alt="Logo" />
      <Link to="/dashboard">
        <button>Dashboard</button>
      </Link>
      <Link to="/forms">
        <button>Forms</button>
      </Link>
      <Link to="/trends">
        <button>Trends</button>
      </Link>
    </div>
  );
};

export default Sidebar;
