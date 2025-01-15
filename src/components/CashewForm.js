import React, { useState, useEffect } from "react";
import FormContainer from "./FormContainer";

const CashewForm = () => {
  // State to manage all form data
  const [formData, setFormData] = useState({
    date: "", // Date of batch processing
    todayIntake: "", // Intake for the day
    shellingIntake: "", // Intake for shelling process
    peelingIntake: "", // Intake for peeling process
    gradingIntake: "", // Intake for grading process
    todayOutput: "", // Total output for the day
    shellingOutput: "", // Output from shelling process
    peelingOutput: "", // Output from peeling process
    whiteWholesOutput: "", // Output of white whole cashews
    scorchedWholesOutput: "", // Output of scorched whole cashews
    cashewFormsOutput: "", // Output of other cashew forms
  });

  useEffect(() => {
    // Set today's date automatically on component mount
    const today = new Date().toISOString().split("T")[0];
    setFormData((prevData) => ({
      ...prevData,
      date: today,
    }));
  }, []);

  // Update the state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Submit the form data to the backend
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const token = localStorage.getItem("jwtToken"); // Fetch JWT token for authorization

    console.log("Form data on submit:", formData); // Debugging log

    fetch("/api/cashew-process/batchdata", {
      method: "POST", // POST request for submitting data
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
      body: JSON.stringify(formData), // Send the form data as JSON
    })
      .then(async (response) => {
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          return response.json(); // Parse JSON response
        } else {
          const text = await response.text();
          throw new Error(`Expected JSON response, but got: ${text}`); // Handle non-JSON responses
        }
      })
      .then((data) => {
        alert("Form submitted successfully!"); // Notify the user
        console.log("Success:", data);
        // Reset the form to its initial state
        setFormData({
          date: new Date().toISOString().split("T")[0],
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
      })
      .catch((error) => {
        // Notify the user of errors
        alert("Failed to submit form: " + error.message);
        console.error("Error:", error);
      });
  };

  return (
    <>
      <FormContainer
        formData={formData} // Pass form data as props
        handleChange={handleChange} // Pass change handler as props
        handleSubmit={handleSubmit} // Pass submit handler as props
      />
    </>
  );
};

export default CashewForm;
