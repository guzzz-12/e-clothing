import React, { Component } from 'react';
import "./signIn.scss";

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
    console.log(this.state)
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            required
            value={this.state.email}
            onChange={this.onChangeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            required
            value={this.state.password}
            onChange={this.onChangeHandler}
          />
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default SignIn;
