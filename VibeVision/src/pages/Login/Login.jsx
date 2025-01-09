import React, { useState } from "react";
import "../Login/login.scss";
import Register from "../Register/Register";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic here
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="Login">
      <div className="Login-left">
        <div className="logo">
        <img src="../../../images/logo.png"/>
        <h1>Movie Streaming Made Easy</h1>
        </div>
      </div>
      <div className="Login-form-container">
        <form onSubmit={handleSubmit} className="Login-form">
          <h2>Sign In</h2>
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
          <button type="submit" className="Login-btn">
           Sign In 
          </button>
          <p>
            New User? <a href="./Register/Register.jsx">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

