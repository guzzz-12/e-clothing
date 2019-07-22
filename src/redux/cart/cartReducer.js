import {cartActionTypes} from "./cartTypes";

const initialState = {
  showDropdown: false
}

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case cartActionTypes.SHOW_HIDE_DROPDOWN:
      return {...state, showDropdown: !state.showDropdown}
    default:
      return state;
  }
}

export default cartReducer;