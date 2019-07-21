import React from 'react';
import "./signIn_SignUp.scss";
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignIn_SignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>

  );
};

export default SignIn_SignUp;