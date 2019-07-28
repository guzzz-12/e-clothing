import React from 'react';
import "./collectionsOverview.scss";
import {connect} from "react-redux";
import PreviewCollection from "../PreviewCollection/PreviewCollection";
import {fetchCollectionsStartAsync} from "../../redux/shopData/shopDataAction";
import Spinner from "../Spinner/Spinner";

class CollectionsOverview extends React.Component {
  componentDidMount() {
    this.props.getShopData()
  }

  render() {
    const collectionsArray = Object.values(this.props.collections);
    return (
      <React.Fragment>
        {this.props.isLoading ?
          <Spinner />
          :
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
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.shopData.shopData,
    isLoading: state.shopData.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getShopData: () => {
      dispatch(fetchCollectionsStartAsync())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsOverview);
