import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match plz enter the same password in both fields");
     
      
      return;
    }
    setError(""); 
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="register">
      <div className="register-left">
        <div className="logo">
          <img src="../../../images/logo.png" alt="Logo" />
          <h1>Movie Streaming Made Easy</h1>
        </div>
      </div>
      <div className="register-form-container">
        <form onSubmit={handleSubmit} className="register-form">
          <h2>Create Account</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="register-btn">
            Register
          </button>
          <p>
            Already have an account? <a href="./Login/Login.jsx">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
