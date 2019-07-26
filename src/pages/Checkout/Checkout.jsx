import React from 'react';
import "./checkout.scss";
import {connect} from "react-redux";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeBtn from "../../components/StripeBtn/StripeBtn";

const Checkout = (props) => {
  const totalPrice = () => {
    let count = 0;
    for(let item of props.items) {
      count = count + item.quantity * item.price
    };
    return count;
  }

  const renderItems = (items) => {
    return items.map(item => {
      return <CheckoutItem key={item.id} item={item} quantity={item.quantity} />
    })
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
      {renderItems(props.items)}
      <div className="total">
        <span>Total: ${totalPrice()}</span>
      </div>
      <div className="test-warning">
        Usar la siguiente tarjeta de crédito de prueba para probar la funcionalidad de pago:
        <br/>
        <p>N°: 4242-4242-4242-4242 - Exp: 01/20 - CVV: 123</p>
      </div>
      <StripeBtn price={totalPrice()}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartDropdown.cartItems
  }
}

export default connect(mapStateToProps)(Checkout);