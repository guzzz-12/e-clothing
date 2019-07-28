import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";
import thunk from "redux-thunk";

const middlewares = [thunk];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, composedEnhancer);
export const persistor = persistStore(store);

export default {store, persistor};