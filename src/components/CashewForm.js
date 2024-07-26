import React, { useState } from "react";
import FormContainer from "./FormContainer";

const CashewForm = () => {
  const [formData, setFormData] = useState({
    todayIntake: "",
    shellingIntake: "",
    peelingIntake: "",
    gradingIntake: "",
    todayOutput: "",
    shellingOutput: "",
    peelingOutput: "",
    whiteWholesOutput: "",
    scorchedWholesOutput: "",
    cashewFormsOutput: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/cashew-process/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Form submitted successfully!");
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <FormContainer
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default CashewForm;
