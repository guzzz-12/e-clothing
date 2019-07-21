import React, { Component } from 'react';
import {shopData} from "./shopData";
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

class Shop extends Component {
  state = {
    collections: shopData
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(collection => {
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
}

export default Shop;



