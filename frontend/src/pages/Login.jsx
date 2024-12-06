import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // Check if both fields are filled
    if (!email || !password) {
      alert("Email and Password are required.");
      return;
    }

    // Log the data being posted
    console.log("Posting login data:", { email, password });

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({ email, password }), // Send data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        alert("Logged in successfully!");
        console.log("Response Data:", data);
        // Store the access token or take further actions
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail || "Login failed."}`);
      }
    } catch (error) {
      alert("An error occurred during login. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-blue-800 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-8 text-white">Login</h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email Address"
        className="w-[455px] h-[70px] mb-5 rounded-lg border border-gray-300 px-4 text-black outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        className="w-[455px] h-[70px] mb-5 rounded-lg border border-gray-300 px-4 text-black outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login Button */}
      <button
        className="w-[455px] h-[70px] mt-5 bg-white text-[#003366] text-lg font-bold rounded-lg hover:bg-gray-200"
        onClick={handleSubmit}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Login;
