import React from 'react';
import "./collectionsOverview.scss";
import {connect} from "react-redux";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import {firestore, convertSnapshot} from "../../firebase/firebaseUtils";
import { getShopDataFromFirestore } from '../../redux/shopData/shopDataAction';

class CollectionsOverview extends React.Component {
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

      // this.setState({loading: false})
      this.props.getShopData(collectionsObj)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot()
  }

  render() {
    const collectionsArray = Object.values(this.props.collections);
    return (
      <div className="collections-overview">
        {collectionsArray.map(collection => {
          return (
            <PreviewCollection
              key={collection.id}
              title={collection.title}
              items={collection.items}
              routeName={collection.routeName}
            />
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.shopData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShopData: (data) => {
      dispatch(getShopDataFromFirestore(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview);
