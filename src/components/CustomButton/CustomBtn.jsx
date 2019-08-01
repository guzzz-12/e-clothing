import React from 'react';
import "./customBtn.scss";

const CustomBtn = (props) => {
  const {children, ...rest} = props;

  return (
    <button
      disabled={props.disabled}
      className={`${props.isGoogleSignedIn ? "google-sign-in" : ""} ${props.inverted ? "inverted" : ""} ${!props.disabled ? "custom-button" : "custom-button--disabled"}`} {...rest}>
      {children}
    </button>
  );
}

export default CustomBtn;
