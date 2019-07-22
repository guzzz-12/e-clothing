import React, { Component } from 'react';
import "./signUp.scss";
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomButton/CustomBtn';
import {auth, createUserProfileDocument} from "../../firebase/firebaseUtils";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  submitHandler = async (e) => {
    e.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;

    if(password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user.user, {displayName});
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    } catch(error) {
      console.log("Error creating user", error.message)
    }
  }

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={this.state.displayName}
            onChange={this.onChangeHandler}
            label="Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHandler}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={this.onChangeHandler}
            label="Confirm Password"
            required
          />
          <CustomBtn type="submit">Sign up</CustomBtn>
        </form>
      </div>
    );
  }
}

export default SignUp;
