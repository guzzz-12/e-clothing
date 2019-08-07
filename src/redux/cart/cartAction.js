import {cartActionTypes} from "./cartTypes";

export const showHideDropdown = () => {
  return {
    type: cartActionTypes.SHOW_HIDE_DROPDOWN
  }
}

export const addItem = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item
  }
}

export const subtractItem = (item) => {
  return {
    type: cartActionTypes.SUBTRACT_ITEM,
    payload: item
  }
}

export const removeItem = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item.id
  }
}

export const emptyCart = () => {
  return {
    type: cartActionTypes.EMPTY_CART
  }
}