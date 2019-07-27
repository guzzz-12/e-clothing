import { shopDataActionTypes } from "./shopDataTypes";

const initialState = {};

const shopDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case (shopDataActionTypes.ADD_DATA_FROM_FIRESTORE):
      return {...initialState, ...action.payload}
    default:
      return state
  }
}

export default shopDataReducer;