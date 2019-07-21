import React, { Component } from 'react';
import {shopData} from "./shopData";

class Shop extends Component {
  state = {
    shopdata: shopData
  }

  render() {
    return (
      <div>
        Shop Page
      </div>
    );
  }
}

export default Shop;



