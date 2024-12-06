import React from "react";

const SignUpForm = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #000428, #004e92)",
        color: "white",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="/path-to-your-logo" // Replace with your logo's path
          alt="App Calendar Logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      {/* Heading */}
      <p
        style={{
          width: "358.41px",
          height: "48px",
          fontSize: "17.46px",
          fontWeight: 400,
          lineHeight: "24.44px",
          letterSpacing: "0.23px",
          textAlign: "center",
          textDecoration: "none",
        }}
      >
        Sign up to see updates on upcoming meets on appcalendar.
      </p>

      {/* Input Fields */}
      <div style={{ marginTop: "30px" }}>
        <input
          type="email"
          placeholder="Email Address"
          style={{
            width: "455px",
            height: "70px",
            borderRadius: "10px",
            border: "2.33px solid rgba(107, 107, 107, 1)",
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          placeholder="Full Name"
          style={{
            width: "455px",
            height: "70px",
            borderRadius: "10px",
            border: "2.33px solid rgba(107, 107, 107, 1)",
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <input
          type="text"
          placeholder="User Name"
          style={{
            width: "455px",
            height: "70px",
            borderRadius: "10px",
            border: "2.33px solid rgba(107, 107, 107, 1)",
            marginBottom: "15px",
            padding: "10px",
            fontSize: "16px",
          }}
        />
        <input
          type="password"
          placeholder="Set Password"
          style={{
            width: "455px",
            height: "70px",
            borderRadius: "10px",
            border: "2.33px solid rgba(107, 107, 107, 1)",
            marginBottom: "20px",
            padding: "10px",
            fontSize: "16px",
          }}
        />
      </div>

      {/* Disclaimer */}
      <p
        style={{
          width: "455px",
          fontSize: "12px",
          textAlign: "center",
          marginBottom: "20px",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        People who use our service may have uploaded your contact information to
        appcalendar. Learn more. By signing up, you agree to our Terms, privacy
        policy, and Cookies policy.
      </p>

      {/* Login Button */}
      <button
        style={{
          width: "455px",
          height: "70px",
          background: "rgba(255, 255, 255, 1)",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#004e92",
          cursor: "pointer",
        }}
      >
        LOGIN
      </button>

      {/* Social Login */}
      <p
        style={{
          marginTop: "20px",
          fontSize: "14px",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        Or SignUp with
      </p>
      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        <img
          src="/path-to-google-icon" // Replace with your icon paths
          alt="Google"
          style={{ width: "30px", cursor: "pointer" }}
        />
        <img
          src="/path-to-apple-icon"
          alt="Apple"
          style={{ width: "30px", cursor: "pointer" }}
        />
        <img
          src="/path-to-facebook-icon"
          alt="Facebook"
          style={{ width: "30px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
