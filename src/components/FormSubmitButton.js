import React from "react";

const FormSubmitButton = () => {
  return (
    <div className="mb-4 w-full flex justify-center">
      <input
        type="submit"
        value="Submit"
        className="p-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
      />
    </div>
  );
};

export default FormSubmitButton;
