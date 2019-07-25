import React from 'react';
import "./collectionsOverview.scss";
import {connect} from "react-redux";
import PreviewCollection from "../PreviewCollection/PreviewCollection";

const CollectionsOverview = (props) => {
  return (
    <div className="collections-overview">
      {props.collections.map(collection => {
        return (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            items={collection.items}
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
