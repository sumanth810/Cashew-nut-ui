import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CashewForm from "./components/CashewForm";
import Dashboard from "./components/Dashboard";
import Trends from "./components/Trends";
import FormHeader from "./components/FormHeader";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./styles.css";

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(
    !!localStorage.getItem("jwtToken")
  );

  useEffect(() => {
    const checkAuth = () => {
      setAuthenticated(!!localStorage.getItem("jwtToken"));
    };
    checkAuth();
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flexGrow: 1 }}>
          {isAuthenticated && <FormHeader />}
          <Routes>
            <Route
              path="/login"
              element={<Login setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/forms"
              element={
                isAuthenticated ? <CashewForm /> : <Navigate to="/login" />
              }
            />
            <Route
              path="/trends"
              element={isAuthenticated ? <Trends /> : <Navigate to="/login" />}
            />
            <Route
              path="/logout"
              element={<Logout setAuthenticated={setAuthenticated} />}
            />
            <Route
              path="/"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
