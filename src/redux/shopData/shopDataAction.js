import { shopDataActionTypes } from "./shopDataTypes";

export const getShopDataFromFirestore = (shopData) => {
  return {
    type: shopDataActionTypes.ADD_DATA_FROM_FIRESTORE,
    payload: shopData
  }
}