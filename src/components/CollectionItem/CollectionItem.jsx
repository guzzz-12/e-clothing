import React from 'react';
import "./collectionItem.scss";
import CustomBtn from "../CustomButton/CustomBtn";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cartAction";

const CollectionItem = (props) => {
  return (
    <div className="collection-item">
      <div className="img-container">
        <img className="image" src={props.item.imageUrl} alt={props.item.name}/>
      </div>
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">${props.item.price}</span>
      </div>
      <CustomBtn
        onClick={()=> props.addItem(props.item)}
        disabled={props.currentUser ? false : true}
        inverted
      >{props.currentUser ? "Add to cart" : "Login to start shopping!"}
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);