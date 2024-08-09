import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/cashew-process/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("jwtToken", data.jwt); // Store JWT token in localStorage
        setAuthenticated(true); // Update the authentication state
        navigate("/dashboard"); // Redirect to dashboard
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="flex justify-center">
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
