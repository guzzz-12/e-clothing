import React from 'react';
import "./previewCollection.scss";

const PreviewCollection = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items.map(item => {
          return <div key={item.id}>{item.name}</div>
        }).slice(0, 4)}
      </div>
    </div>
  );
};

export default PreviewCollection;