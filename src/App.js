// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CashewForm from "./components/CashewForm";
import Dashboard from "./components/Dashboard";
import Trends from "./components/Trends";
import FormHeader from "./components/FormHeader";
import Sidebar from "./components/Sidebar";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <FormHeader />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forms" element={<CashewForm />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
