import {cartActionTypes} from "./cartTypes";
import {addItemToCart} from "./cartUtilities";

const initialState = {
  showDropdown: false,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case cartActionTypes.SHOW_HIDE_DROPDOWN:
      return {...state, showDropdown: !state.showDropdown}
    case cartActionTypes.ADD_ITEM:
      let cartItems = [];
      const itemExists = state.cartItems.find(cartItem => {
        return cartItem.id === action.payload.id;
      });      
      if(itemExists) {
        cartItems = addItemToCart(state.cartItems, itemExists);
      } else {
        let item = {...action.payload, quantity: 1};
        cartItems = [...state.cartItems, item]
      }
      return {
        ...state,
        cartItems
      }
    case cartActionTypes.REMOVE_ITEM:
      const filteredItems = state.cartItems.filter(item => {
        return item.id !== action.payload
      });
      return {...state, cartItems: filteredItems}
    default:
      return state;
  }
}

export default cartReducer;