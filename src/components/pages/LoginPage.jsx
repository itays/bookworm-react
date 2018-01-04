import React, { Component } from "react";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(data) {
    return this.props.login(data).then(() => this.props.history.push("/"));
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
/**
 * 1st param is mapStateToProps - allows to pass data from redux state into the component
 * 2nd param is mapDispatchToProps - a call to dispatch the funcions in the component
 */
export default connect(null, { login })(LoginPage);
