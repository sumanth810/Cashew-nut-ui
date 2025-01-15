import React from "react";

const FormInput = ({ id, name, value, onChange }) => {
  return (
    <div className="w-full">
      {/* Label for input field */}
      <label htmlFor={id} className="block mb-2">
        {name.replace(/([A-Z])/g, " $1").toUpperCase()} (kgs):{" "}
        {/* Format name */}
      </label>
      {/* Input field */}
      <input
        type="number"
        id={id}
        name={name}
        value={value} // Controlled input value
        onChange={onChange} // Handle changes
        required
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default FormInput;
