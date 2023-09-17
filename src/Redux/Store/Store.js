import { createStore, applyMiddleware } from "redux";
import { movieReducer } from "../Reducer/MovieReducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// 1- create store
export const Store = createStore(movieReducer, applyMiddleware(thunk));
