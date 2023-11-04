import React, { useState } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";

//provides a user interface for creating a new account with a username and password. When the form is
//submitted, it logs the credentials and navigates back to the home page.
function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    navigate("/");
  };

  return (
    <div className="createAccount">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
        <p>
          Already have an account?{" "}
          <a href="/" className="loginLink">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
