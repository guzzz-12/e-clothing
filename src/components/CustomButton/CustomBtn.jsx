import React from 'react';
import "./customBtn.scss";

const CustomBtn = (props) => {
  const {children, ...rest} = props;

  return (
    <button className={`${props.isGoogleSignedIn ? "google-sign-in" : ""} custom-button`} {...rest}>
      {children}
    </button>
  );
}

export default CustomBtn;
