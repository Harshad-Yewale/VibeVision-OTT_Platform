import React, { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { resetPassword } from "../../authContext/apiCalls";
import { useParams } from "react-router-dom";

function ResetPassword() {
  const { dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({ newPassword: "", confirmPassword: "",});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {id, token} = useParams(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }
    try {
      await resetPassword(id,token, {newPassword:formData.newPassword} ,dispatch);
      setSuccessMessage("Password reset successfully! You can now log in.");
      setError("");
    } catch (err) {
      console.error("Error during password reset:", err);
      setError(err || "Failed to reset password. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="Login">
      <div className="Login-left">
        <div className="logo">
          <img src="http://localhost:8080/images/logo.png" alt="Logo" />
          <h1>Movie Streaming Made Easy</h1>
        </div>
      </div>
      <div className="Login-form-container">
        <form onSubmit={handleSubmit} className="Login-form">
          <h2>Reset Password</h2>
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
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
          {error && (
            <p className="error-message" style={{ color: "red", margin: "0", padding: "12px", fontSize: "16px" }}>
              {error}
            </p>
          )}
          {successMessage && (
            <p className="success-message" style={{ color: "green", margin: "0", padding: "12px", fontSize: "16px" }}>
              {successMessage}
            </p>
          )}
          <button type="submit" className="Login-btn">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default ResetPassword;
