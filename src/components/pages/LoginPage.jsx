import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";

export class LoginPage extends Component {
  submit(data) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}
