import React from "react";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";

const FormContainer = ({ formData, handleChange, handleSubmit }) => {
  return (
    <div className="bg-purple-100 p-8 rounded-lg shadow-md mx-auto my-10 w-3/4 md:w-1/2">
      <div className="text-center text-blue-700 text-4xl font-bold mb-5">
        Fill the Details of Cashew Batch Data
      </div>
      <form
        onSubmit={handleSubmit} // Attach submit handler to form
        className="flex flex-col items-center space-y-4"
      >
        {/* Input field for the date */}
        <div className="w-full">
          <label htmlFor="date" className="block mb-2">
            DATE:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date} // Controlled input value
            onChange={handleChange} // Handle changes
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        {/* Generate inputs dynamically for all other fields */}
        {Object.keys(formData).map(
          (key) =>
            key !== "date" && (
              <FormInput
                key={key}
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            )
        )}
        {/* Submit button for the form */}
        <FormSubmitButton />
      </form>
    </div>
  );
};

export default FormContainer;
