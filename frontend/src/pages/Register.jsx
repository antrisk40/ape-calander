import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { email, fullname, username, password } = formData;

    // Check if all fields are filled
    if (!email || !fullname || !username || !password) {
      alert("All fields are required.");
      return;
    }

    // Log the form data being posted
    console.log("Posting data:", { email, fullname, username, password });

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({ email, fullname, username, password }), // Send the data as JSON
      });

      if (response.ok) {
        const data = await response.json();
        alert("Signed up successfully!");
        console.log("Response Data:", data);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail || "Registration failed."}`);
      }
    } catch (error) {
      alert("An error occurred during registration. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-blue-800 flex flex-col justify-center items-center">
      {/* Logo */}
      <div className="mb-5">
        <img
          src="/path-to-your-logo" // Replace with your logo's path
          alt="App Calendar Logo"
          className="w-24 h-24"
        />
      </div>

      {/* Heading */}
      <p className="w-[358.41px] text-center text-[17.46px] leading-[24.44px] font-normal mb-8 text-white">
        Sign up to see updates on upcoming meets on appcalendar.
      </p>

      {/* Input Fields */}
      <div className="space-y-4 mb-5 flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-[455px] h-[70px] rounded-lg border-2 border-[#6b6b6b] p-4 text-lg"
        />
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          className="w-[455px] h-[70px] rounded-lg border-2 border-[#6b6b6b] p-4 text-lg"
        />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={formData.username}
          onChange={handleChange}
          className="w-[455px] h-[70px] rounded-lg border-2 border-[#6b6b6b] p-4 text-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Set Password"
          value={formData.password}
          onChange={handleChange}
          className="w-[455px] h-[70px] rounded-lg border-2 border-[#6b6b6b] p-4 text-lg"
        />
      </div>

      {/* Disclaimer */}
      <p className="w-[455px] text-sm text-center text-white/80 mb-5">
        People who use our service may have uploaded your contact information to
        appcalendar. Learn more. By signing up, you agree to our Terms, Privacy
        Policy, and Cookies Policy.
      </p>

      {/* Sign Up Button */}
      <button
        onClick={handleSubmit}
        className="w-[455px] h-[70px] bg-white text-[#004e92] font-bold text-lg rounded-lg hover:bg-gray-200 transition"
      >
        SIGN UP
      </button>

      {/* Social Login */}
      <p className="mt-5 text-sm text-white/80">Or Sign Up with</p>
      <div className="flex gap-5 mt-2 justify-center">
        <img
          src="/path-to-google-icon"
          alt="Google"
          className="w-8 cursor-pointer"
        />
        <img
          src="/path-to-apple-icon"
          alt="Apple"
          className="w-8 cursor-pointer"
        />
        <img
          src="/path-to-facebook-icon"
          alt="Facebook"
          className="w-8 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Register;
