import React from 'react';
import "./category.scss";
import {connect} from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";

const Category = (props) => {
  const renderItems = () => {
    return props.categoryItems.map(item => {
      return <CollectionItem key={item.id} item={item} />
    })
  }

  return (
    <div className="collection-page">
      <h2 className="title" style={{textTransform: "capitalize"}}>{props.match.params.category}</h2>
      <div className="items">
        {renderItems()}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let displayCategory = [];
  for(let category of state.shopData) {
    if(category.routeName === ownProps.match.params.category) {
      displayCategory = category.items
    }
  }
  return {
    categoryItems: displayCategory
  }
}

export default connect(mapStateToProps)(Category);