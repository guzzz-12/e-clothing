import { shopDataActionTypes } from "./shopDataTypes";

const initialState = {
  shopData: {},
  isFetching: false,
  errorMessage: null
};

const shopDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case (shopDataActionTypes.GET_COLLECTIONS_START):
      return {...initialState, isFetching: true}
    case (shopDataActionTypes.GET_COLLECTIONS_SUCCESS):
      return {
        ...initialState,
        shopData: action.payload,
        isFetching: false
      }
    case (shopDataActionTypes.GET_COLLECTIONS_ERROR):
      return {
        ...initialState,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default shopDataReducer;