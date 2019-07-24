import React from 'react';
import "./checkoutItem.scss";
import {connect} from "react-redux";
import {removeItem, addItem, subtractItem} from "../../redux/cart/cartAction";

const CheckoutItem = (props) => {
  if (props.quantity === 0) {
    return null;
  }
  
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={props.item.imageUrl} alt="item"/>
      </div>
      <span className="name">{props.item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => props.subtractOne(props.item)}>&#10094;</div>
        <span className="value">{props.quantity}</span>
        <div className="arrow" onClick={() => props.addOne(props.item)}>&#10095;</div>
      </span>
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
    },
    addOne: (item) => {
      dispatch(addItem(item))
    },
    subtractOne: (item) => {
      dispatch(subtractItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);