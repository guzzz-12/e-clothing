import React from 'react';
import "./collectionsOverview.scss";
import {connect} from "react-redux";
import PreviewCollection from "../PreviewCollection/PreviewCollection";

const CollectionsOverview = (props) => {
  const collectionsArray = Object.values(props.collections);
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

const mapStateToProps = (state) => {
  return {
    collections: state.shopData
  }
}

export default connect(mapStateToProps)(CollectionsOverview);
