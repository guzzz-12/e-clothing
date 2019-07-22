import {cartActionTypes} from "./cartTypes";

const initialState = {
  showDropdown: false,
  cartItems: []
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case cartActionTypes.SHOW_HIDE_DROPDOWN:
      return {...state, showDropdown: !state.showDropdown}
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default:
      return state;
  }
}

export default cartReducer;