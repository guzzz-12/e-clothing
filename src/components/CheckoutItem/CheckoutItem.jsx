import React from 'react';
import "./checkoutItem.scss";
import {connect} from "react-redux";
import {removeItem} from "../../redux/cart/cartAction";

const CheckoutItem = (props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.item.imageUrl} alt="item"/>
      </div>
      <span className="name">{props.item.name}</span>
      <span className="quantity">{props.item.quantity}</span>
      <span className="price">${props.item.price}</span>
      <div
        className="remove-button"
        onClick={() => props.removeItem(props.item)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      dispatch(removeItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);