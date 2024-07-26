import React from "react";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const FormContainer = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="container">
      <div className="form-title">Fill the Details of Cashew Batch Data</div>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <FormInput
            key={key}
            id={key}
            name={key}
            value={formData[key]}
            onChange={handleChange}
          />
        ))}
        <FormSubmitButton />
      </form>
    </div>
  );
};

export default FormContainer;
