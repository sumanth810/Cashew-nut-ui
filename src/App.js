import React from "react";
import CashewForm from "./components/CashewForm";
import FormHeader from "./components/FormHeader";
import Sidebar from "./components/Sidebar";
import "./styles.css";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <FormHeader />
        <CashewForm />
      </div>
    </div>
  );
};

export default App;
