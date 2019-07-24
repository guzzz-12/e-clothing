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
        onClick={() => {
            props.history.push("/checkout")
            props.hideDropdown()
          }
        }
      >
        Go to checkout
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartDropdown.cartItems
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