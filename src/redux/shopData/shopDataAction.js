import { shopDataActionTypes } from "./shopDataTypes";
import {firestore, convertSnapshot} from "../../firebase/firebaseUtils";

export const fetchCollectionsStart = () => {
  return {
    type: shopDataActionTypes.GET_COLLECTIONS_START
  }
}

export const fetchCollectionsSuccess = (data) => {
  return {
    type: shopDataActionTypes.GET_COLLECTIONS_SUCCESS,
    payload: data
  }
}

export const fetchCollectionsError = (errorMessage) => {
  console.log(errorMessage)
  return {
    type: shopDataActionTypes.GET_COLLECTIONS_ERROR,
    payload: errorMessage
  }
}

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart())
    collectionRef.get()
    .then((snapshot) => {
      let collectionsObj = {};
      const collectionsArray = convertSnapshot(snapshot);
      for(let collection of collectionsArray) {
        collectionsObj[collection.routeName] = collection
      }
      dispatch(fetchCollectionsSuccess(collectionsObj))
    })
    .catch(err => {
      dispatch(fetchCollectionsError(err.message))
    })
  }
}