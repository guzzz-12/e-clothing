import React from 'react';
import "./category.scss";
import {connect} from "react-redux";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import {firestore, convertSnapshot} from "../../firebase/firebaseUtils";
import { getShopDataFromFirestore } from '../../redux/shopData/shopDataAction';

class Category extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    //Tomar el shopData desde la base de datos
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      let collectionsObj = {};

      const collectionsArray = await convertSnapshot(snapshot);
      for(let collection of collectionsArray) {
        collectionsObj[collection.routeName] = collection
      }

      this.setState({loading: false})
      this.props.getCategoryData(collectionsObj)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot()
  }

  renderItems = () => {
    return this.props.categoryItems.map(item => {
      return <CollectionItem key={item.id} item={item} />
    })
  }

  render() {  
    return (
      <React.Fragment>
        {this.state.loading ?
          <div className="loader"></div>
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
  const selectedCategory = state.shopData[ownProps.match.params.category];
  return {
    categoryItems: selectedCategory ? selectedCategory.items : [],
    categoryTitle: selectedCategory ? selectedCategory.title : null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryData: (data) => {
      dispatch(getShopDataFromFirestore(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);