import React from "react";
import Logout from "./Logout";

const FormHeader = () => {
  return (
    <header className="header bg-purple-500 p-4 flex justify-between items-center">
      <div className="title text-white text-4xl font-bold">MASCOF</div>
      <Logout />
    </header>
  );
};

export default FormHeader;
