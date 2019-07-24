import React from 'react';
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./cart-Icon.scss"; 
import {showHideDropdown} from "../../redux/cart/cartAction";
import {connect} from "react-redux";

const CartIcon = (props) => {
  const itemsCounter = () => {
    let count = 0;
    for(let item of props.itemCount) {
      count = count + item.quantity;
    };
    return count;
  }

  return (
    <div className="cart-icon" onClick={() => props.toggleDropdown()}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemsCounter()}</span>
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

const mapStateToProps = (state) => {
  return {
    itemCount: state.cartDropdown.cartItems
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);