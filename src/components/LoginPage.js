import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
      navigate("");
    } else {
      setLoginFailed(true); 
    }
  };

  return (
    <div className="login-page">
      <h2>login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
      {isLoggedIn && <p>You are logged in!</p>}
      {loginFailed && <p>Login failed. Username or Password does not match.</p>}
      <p>
        Don't have an account? <Link to="/register"><strong>register</strong></Link>
      </p>
    </div>
  );
}