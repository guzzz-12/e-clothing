import React from 'react';
import "./collectionItem.scss";
import CustomBtn from "../CustomButton/CustomBtn";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cartAction";

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{backgroundImage: `url(${props.item.imageUrl})`}}
      />
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">{props.item.price}</span>
      </div>
      <CustomBtn
        onClick={()=> props.addItem(props.item)}
        inverted
      >Add to cart
      </CustomBtn>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    }
  }
}

export default connect(null, mapDispatchToProps)(CollectionItem);