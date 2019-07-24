import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const middlewares = [];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, composedEnhancer);
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;