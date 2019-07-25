import {combineReducers} from "redux";
import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directory";

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartDropdown"]
}

const rootReducer = combineReducers({
  user: userReducer,
  cartDropdown: cartReducer,
  directory: directoryReducer
})

export default persistReducer(persistConfig, rootReducer)