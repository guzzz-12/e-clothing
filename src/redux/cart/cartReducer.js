import {cartActionTypes} from "./cartTypes";
import {addItemToCart, removeItemFromCart} from "./cartUtilities";

const initialState = {
  showDropdown: false,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case cartActionTypes.SHOW_HIDE_DROPDOWN:
      return {...state, showDropdown: !state.showDropdown}
    case cartActionTypes.ADD_ITEM:
      let addedCartItems = [];
      const itemExists = state.cartItems.find(cartItem => {
        return cartItem.id === action.payload.id;
      });      
      if(itemExists) {
        addedCartItems = addItemToCart(state.cartItems, itemExists);
      } else {
        let item = {...action.payload, quantity: 1};
        addedCartItems = [...state.cartItems, item]
      }
      return {
        ...state, cartItems: addedCartItems
      }
    case cartActionTypes.SUBTRACT_ITEM:
      let subtractedCartItems = [];
      const itemToUpdate = state.cartItems.find(cartItem => {
        return cartItem.id === action.payload.id
      })
      subtractedCartItems = removeItemFromCart(state.cartItems, itemToUpdate);
      return {...state, cartItems: subtractedCartItems}
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