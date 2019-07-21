import React from 'react';
import "./previewCollection.scss";
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items.map(item => {
          return (
            <CollectionItem
              key={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              price={item.price}
            />
          )
        }).slice(0, 4)}
      </div>
    </div>
  );
};

export default PreviewCollection;