import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching,error, dispatch } = useContext(AuthContext);
  let errorOcurred="";
  
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  

  if (error===true){
    errorOcurred="invalid Credentials"
  }

  return (
    <div className="login">
      <h2>Admin Login </h2>
      <form className="loginForm">
        <input type="text" placeholder="email" className="loginInput" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="password" className="loginInput" onChange={(e) => setPassword(e.target.value)} required />
        <p className="error-message" style={{ color: "White", margin:"0", padding:"12px", fontSize:"20px" }}>{errorOcurred}</p>
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}

