import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";

const middlewares = [];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, composedEnhancer);
export const persistor = persistStore(store);

export default {store, persistor};