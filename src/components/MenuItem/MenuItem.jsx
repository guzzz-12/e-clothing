import React from 'react';
import "./menuItem.scss";

const MenuItem = (props) => {
  return (
    <div style={{backgroundImage: `url(${props.image})`, backgroundSize: "cover", backgroundPosition: "center"}} className="menu-item">
      <div className="content">
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;
