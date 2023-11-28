import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

import './LoginPage.css';

const API = process.env.REACT_APP_API_URL;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      axios
      .post(`${API}/login`, {email, password})
      .then((response) => {
        setIsLoggedIn(true);
        navigate("/charities")})
      .catch((error) => {
        setLoginFailed(true) 
        console.error("Error fetching user:", error)
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <h2>login</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button onClick={handleLogin}><strong>login</strong></button>
        {isLoggedIn && <p>You are logged in!</p>}
        {loginFailed && <p>Login failed. Username or Password does not match.</p>}
        <p>
          Don't have an account? <Link to="/register"><strong>register</strong></Link>
        </p>
      </div>
    </div>
  );
  //test
}
