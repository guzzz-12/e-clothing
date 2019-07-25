import React from 'react';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';
import {connect} from "react-redux";

const Shop = (props) => {
  return (
    <div className="shop-page">
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

export default connect(mapStateToProps)(Shop);



