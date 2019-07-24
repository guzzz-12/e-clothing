import React from 'react';
import "./checkout.scss";
import {connect} from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = (props) => {
  const totalPrice = () => {
    let count = 0;
    for(let item of props.items) {
      count = count + item.quantity * item.price
    };
    return count;
  }
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {props.items.map(item => {
        return <CheckoutItem key={item.id} item={item} />
      })}
      <div className="total">
        <span>Total: ${totalPrice()}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartDropdown.cartItems
  }
}

export default connect(mapStateToProps)(Checkout);