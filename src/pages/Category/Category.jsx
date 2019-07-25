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
      <h2 className="title">{props.categoryTitle}</h2>
      <div className="items">
        {renderItems()}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let displayCategory = [];
  let categoryTitle = null;
  for(let category of state.shopData) {
    if(category.routeName === ownProps.match.params.category) {
      displayCategory = category.items;
      categoryTitle = category.title;
    }
  }
  return {
    categoryItems: displayCategory,
    categoryTitle
  }
}

export default connect(mapStateToProps)(Category);