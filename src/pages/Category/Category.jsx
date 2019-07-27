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
  const selectedCategory = state.shopData[ownProps.match.params.category];
  return {
    categoryItems: selectedCategory ? selectedCategory.items : [],
    categoryTitle: selectedCategory ? selectedCategory.title : null
  }
}

export default connect(mapStateToProps)(Category);