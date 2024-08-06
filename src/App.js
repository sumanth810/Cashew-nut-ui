import React from "react";
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
import "./styles.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        {isAuthenticated && <Sidebar />}
        <div style={{ flexGrow: 1 }}>
          {isAuthenticated && <FormHeader />}
          <Routes>
            <Route
              path="/login"
              element={<Login setIsAuthenticated={setIsAuthenticated} />}
            />
            {isAuthenticated ? (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/forms" element={<CashewForm />} />
                <Route path="/trends" element={<Trends />} />
                <Route path="/" element={<Dashboard />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
