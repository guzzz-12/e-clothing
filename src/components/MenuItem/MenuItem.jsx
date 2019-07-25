import React from 'react';
import "./menuItem.scss";
import {Link} from "react-router-dom";

const MenuItem = (props) => {
  return (
    <Link className={`${props.size} menu-item`} to={`/shop/${props.linkUrl}`}>
      <div
        className="background-image"
        style={{backgroundImage: `url(${props.image})`}}
      >
      </div>
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </Link>
  );
}

export default MenuItem;
