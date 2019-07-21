import React, { Component } from 'react';
import "./signIn.scss";
import FormInput from '../FormInput/FormInput';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <FormInput
            name="email"
            type="email"
            required
            label="Email"
            value={this.state.email}
            onChangeHandler={this.onChangeHandler}
          />
          <FormInput
            name="password"
            type="password"
            required
            label="Password"
            value={this.state.password}
            onChangeHandler={this.onChangeHandler}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default SignIn;