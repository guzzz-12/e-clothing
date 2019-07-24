import React from 'react';
import "./cartDropdown.scss";
import CustomBtn from "../CustomButton/CustomBtn";
import {connect} from "react-redux";
import CartItem from '../Cart-Item/Cart-Item';

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          props.items.length > 0 ?
          props.items.map(item => {
            return <CartItem key={item.id} item={item} />
          })          
          : <span className="empty-message">Shopping cart is empty</span>
        }
      </div>
      <CustomBtn>Go to checkout</CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartDropdown.cartItems
  }
}

export default connect(mapStateToProps)(CartDropdown);