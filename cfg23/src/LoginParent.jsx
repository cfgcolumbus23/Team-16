import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

//creates the component for allowing a user to login to their account
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/parent");
  };
  //Returns a login container which allows user to either login or create a new account
  return (
    <div className="loginacc">
      <h1>Parent Login</h1>
      <div>
        <div className="inputfields">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="inputfields">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <a href="/create" className="loginLink">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
