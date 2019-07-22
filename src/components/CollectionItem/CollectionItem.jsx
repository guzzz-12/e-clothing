import React from 'react';
import "./collectionItem.scss";
import CustomBtn from "../CustomButton/CustomBtn";

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{backgroundImage: `url(${props.imageUrl})`}}
      />
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
      <CustomBtn inverted>Add to cart</CustomBtn>
    </div>
  );
};

export default CollectionItem;