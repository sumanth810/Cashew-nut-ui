import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  // States for email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form's default submission behavior

    try {
      // Send login request to the server
      const response = await fetch("/api/cashew-process/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicate JSON payload
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      if (response.ok) {
        const data = await response.json(); // Parse JSON response
        localStorage.setItem("jwtToken", data.jwt); // Store JWT in localStorage
        setAuthenticated(true); // Update authentication state
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        alert("Login failed. Please check your credentials."); // Notify user on failure
      }
    } catch (error) {
      console.error("Error during login:", error); // Log errors
      alert("An error occurred during login. Please try again."); // Notify user
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            {/* Email input */}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            {/* Password input */}
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-center">
            {/* Submit button */}
            <input
              type="submit"
              value="Login"
              className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
