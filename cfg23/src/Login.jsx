import React from "react";
import "./login.css";
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    console.log("Username:", this.state.username);
    console.log("Password:", this.state.password);
  };
  render() {
    return React.createElement(
      "div",
      { className: "App" },
      React.createElement("h1", null, "Login"),
      React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "text",
          placeholder: "Username",
          value: this.state.username,
          onChange: this.handleUsernameChange,
        })
      ),
      React.createElement(
        "div",
        null,
        React.createElement("input", {
          type: "password",
          placeholder: "Password",
          value: this.state.password,
          onChange: this.handlePasswordChange,
        })
      ),
      React.createElement("button", { onClick: this.handleLogin }, "Login")
    );
  }
}
