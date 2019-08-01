import React from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import crownLogo from "../../assets/crown-logo.png";
import {auth} from "../../firebase/firebaseUtils";
import {connect} from "react-redux";
import CartIcon from "../Cart-Icon/Cart-Icon";
import CartDropdown from "../CartDropdown/CartDropdown";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={crownLogo} alt="crown logo" className="logo" />
      </Link>
      {props.currentUser && <div className="userName">Welcome, {props.currentUser.displayName}</div>}
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {props.currentUser ?
          <div className="option" onClick={() => auth.signOut()}>Sign out</div>
          :
          <Link className="option" to="/signin">Sign in to start shopping!</Link>
        }
        <CartIcon />
      </div>
      {props.showCart ? <CartDropdown/> : null}      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    showCart: state.cartDropdown.showDropdown
  }
}

export default connect(mapStateToProps)(Header);