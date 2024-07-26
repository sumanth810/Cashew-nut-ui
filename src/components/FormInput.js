import React from "react";

const FormInput = ({ id, name, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {name.replace(/([A-Z])/g, " $1").toUpperCase()} (kgs):
      </label>
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;
