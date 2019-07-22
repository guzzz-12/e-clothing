import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-Icon.scss"; 
import {showHideDropdown} from "../../redux/cart/cartAction";
import {connect} from "react-redux";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={() => props.toggleDropdown()}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDropdown: () => {
      dispatch(showHideDropdown())
    }
  }
}

export default connect(null, mapDispatchToProps)(CartIcon);