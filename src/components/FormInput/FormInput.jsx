import React from 'react';
import "./formInput.scss";

const FormInput = (props) => {
  const {onChangeHandler, label, ...rest} = props;

  return (
    <div className="group">
      {label ?
        <label
          className={`${props.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
        : null}
      <input
        className="form-input"
        onChange={onChangeHandler}
        {...rest}
      />
    </div>
  );
};

export default FormInput;