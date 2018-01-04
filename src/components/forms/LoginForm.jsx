import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import validator from "validator";
import InlineError from "../messages/InlineError";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  onChange(e) {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  }

  onSubmit() {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length) {
      return;
    }
    this.props.submit(this.state.data);
  }

  validate(data) {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Cant be blank";
    return errors;
  }

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
