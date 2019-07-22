import React from 'react';
import "./cartDropdown.scss";
import CustomBtn from "../CustomButton/CustomBtn";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomBtn>Go to checkout</CustomBtn>
    </div>
  );
};

export default CartDropdown;