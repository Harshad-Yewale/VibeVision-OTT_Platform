import React, { useState } from "react";
import "../Login/login.scss";
import { login } from "../../authContext/apiCalls";
import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

const Login = () => {
  const { dispatch, error } = useContext(AuthContext);
  let errorOccur="";
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData, dispatch);
    } catch (err) {
      console.error(err);
    }
    
  };
  if(error===true){
    errorOccur="invalid Credentails"
  }

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
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
          <input  type="password"  name="password"  placeholder="Password"  value={formData.password}  onChange={handleChange} required />
          <p className="error-message" style={{ color: "red", margin:"0", padding:"12px", fontSize:"20px" }}>{errorOccur}</p>
          <button type="submit" className="Login-btn" onChange={handleSubmit}>
           Sign In 
          </button>
          <p>
            New User? <a href="./Register">Create Account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

