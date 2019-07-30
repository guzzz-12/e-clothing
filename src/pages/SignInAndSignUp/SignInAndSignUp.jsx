import React from 'react';
import "./SignInAndSignUp.scss";
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignIn_SignUp = () => {
  document.title = "Crown | Sign In - Sign Up"
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>

  );
};

export default SignIn_SignUp;