import React, { useContext, useState } from 'react'
import { AuthContext } from '../../authContext/AuthContext';
import { forgotPassword } from '../../authContext/apiCalls';


function ForgotPassword() {
  const { dispatch} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
    const [formData, setFormData] = useState({
      email: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await forgotPassword(formData, dispatch);
        setSuccessMessage("Reset link sent to your email");
        setError("")
        
        
      } catch (err) {
        console.error(err);
        setSuccessMessage("");
        setError("Invalid email");

      }
    };
  
  return (
    <div>
      <div className="Login">
      <div className="Login-left">
        <div className="logo">
        <img src="http://localhost:8080/logo.png"/>
        <h1>Movie Streaming Made Easy</h1>
        </div>
      </div>
      <div className="Login-form-container">
        <form onSubmit={handleSubmit} className="Login-form">
          <h2>Forgot Password</h2>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
          <p className="error-message" style={{ color: "red", margin:"0", padding:"12px", fontSize:"20px" }}>{error}</p>
          <p className="error-message" style={{ color: "green", margin:"0", padding:"12px", fontSize:"20px" }}>{successMessage}</p>
          <button type="submit" className="Login-btn" onChange={handleSubmit}>
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
      
    </div>
  )
}
export default ForgotPassword;
