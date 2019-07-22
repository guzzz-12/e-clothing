import React, { Component } from 'react';
import "./signIn.scss";
import FormInput from '../FormInput/FormInput';
import CustomBtn from '../CustomButton/CustomBtn';
import {signInWithGoogle, auth} from "../../firebase/firebaseUtils";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  submitHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      this.setState({
        email: "",
        password: ""
      })
    } catch(error) {
      console.log("Error loging in", error.message)
    }
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
          <div className="buttons">
            <CustomBtn type="submit">Sign in</CustomBtn>
            <CustomBtn onClick={signInWithGoogle} isGoogleSignedIn>Sign in with Google</CustomBtn>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
