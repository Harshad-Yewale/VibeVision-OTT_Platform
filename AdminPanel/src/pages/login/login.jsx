import React, { useContext, useState } from "react";

import { login } from "../../context/authContext/apiCalls";

import { AuthContext } from "../../context/authContext/AuthContext";

import "./login.scss";


export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { isFetching, error, dispatch } = useContext(AuthContext);


  const handleLogin = (e) => {

    e.preventDefault();

    login({ email, password }, dispatch);

  };


  return (

    <div className="login">

      <h2>Admin Login</h2>

      <form className="loginForm" onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p
            className="error-message"
            style={{
              color: "white",
              margin: "0",
              padding: "12px",
              fontSize: "20px"
            }}
          >
            Invalid Credentials
          </p>
        )}

        <button
          type="submit"
          className="loginButton"
          disabled={isFetching}
        >
          {isFetching ? "Logging in..." : "Login"}
        </button>

      </form>

    </div>

  );

}
