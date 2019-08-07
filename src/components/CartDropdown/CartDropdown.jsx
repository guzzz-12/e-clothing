import React from 'react';
import "./cartDropdown.scss";
import CustomBtn from "../CustomButton/CustomBtn";
import {connect} from "react-redux";
import CartItem from "../Cart-Item/Cart-Item";
import {withRouter} from "react-router-dom";
import {showHideDropdown} from "../../redux/cart/cartAction";

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
      <CustomBtn
        disabled={props.items.length <= 0 || !props.currentUser ? true : false}
        onClick={() => {
            props.history.push("/checkout")
            props.hideDropdown()
          }
        }
      >
        {props.items.length > 0 && props.currentUser ? "Go to checkout" : "Start adding items"}
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartDropdown.cartItems,
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDropdown: () => {
      dispatch(showHideDropdown())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));