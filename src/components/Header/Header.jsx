import React from 'react';
import "./header.scss";
import {Link} from "react-router-dom";
import {ReactComponent as HeaderLogo} from "../../assets/crown.svg";
import {auth} from "../../firebase/firebaseUtils";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <HeaderLogo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {props.currentUser ?
          <div className="option" onClick={() => auth.signOut()}>Sign out</div>
          :
          <Link className="option" to="/signin">Sign in</Link>
        }
      </div>
    </div>
  );
};

export default Header;