import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const middlewares = [logger];
const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, composedEnhancer);
// const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;