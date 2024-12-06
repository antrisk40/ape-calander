import React, { useState } from "react";

const Login = () => {
  // State for managing email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login button click
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Logged in successfully!");
    }
  };

  // Inline CSS styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #001f3f, #003366)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "32px",
    marginBottom: "30px",
  };

  const inputStyle = {
    width: "455px",
    height: "70px",
    borderRadius: "10px",
    border: "2.36px solid #ccc",
    padding: "0 15px",
    fontSize: "16px",
    boxSizing: "border-box",
    marginBottom: "20px",
    outline: "none",
  };

  const emailBoxStyle = {
    ...inputStyle,
    position: "absolute",
    top: "575.22px",
    left: "730.36px",
  };

  const passwordBoxStyle = {
    ...inputStyle,
    position: "absolute",
    top: "695px",
    left: "728px",
  };

  const buttonStyle = {
    width: "455px",
    height: "70px",
    marginTop: "40px",
    background: "rgba(255, 255, 255, 1)",
    color: "#003366",
    fontSize: "18px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    background: "#e0e0e0",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Login</h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email Address"
        style={emailBoxStyle}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        style={passwordBoxStyle}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Login Button */}
      <button
        style={buttonStyle}
        onMouseEnter={(e) => (e.target.style.background = buttonHoverStyle.background)}
        onMouseLeave={(e) => (e.target.style.background = "rgba(255, 255, 255, 1)")}
        onClick={handleLogin}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Login;
