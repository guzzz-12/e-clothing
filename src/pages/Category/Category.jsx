import React from 'react';
import "./category.scss";
import {connect} from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import {fetchCollectionsStartAsync} from '../../redux/shopData/shopDataAction';
import Spinner from "../../components/Spinner/Spinner";

class Category extends React.Component {
  componentDidMount() {
    this.props.getCategoryData()
  }
  
  renderItems = () => {
    return this.props.categoryItems.map(item => {
      document.title = `Crown | Shop: ${this.props.categoryTitle}`
      return <CollectionItem key={item.id} item={item} />
    })
  }
  
  render() {
    return (
      <React.Fragment>
        {this.props.isLoading ?
          <Spinner />
          :
          <div className="collection-page">
            <h2 className="title">{this.props.categoryTitle}</h2>
            <div className="items">
              {this.renderItems()}
            </div>
          </div>
        }
      </React.Fragment>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  console.log(state.shopData.shopData)
  const selectedCategory = state.shopData.shopData[ownProps.match.params.category];
  return {
    categoryItems: selectedCategory ? selectedCategory.items : [],
    categoryTitle: selectedCategory ? selectedCategory.title : null,
    isLoading: state.shopData.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryData: () => {
      dispatch(fetchCollectionsStartAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);