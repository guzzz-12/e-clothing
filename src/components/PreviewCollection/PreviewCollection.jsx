import React from 'react';
import "./previewCollection.scss";
import CollectionItem from '../CollectionItem/CollectionItem';
import {Link} from "react-router-dom";

const PreviewCollection = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <Link to={`/shop/${props.routeName}`}>
        <span>See full collection...</span>
      </Link>
      <div className="preview">
        {props.items.map(item => {
          return (
            <CollectionItem
              key={item.id}
              item={item}
            />
          )
        }).slice(0, 4)}
      </div>
    </div>
  );
};

export default PreviewCollection;