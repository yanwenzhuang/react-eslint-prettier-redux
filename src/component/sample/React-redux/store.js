import countReducer from "./counterReducer";
import {createStore, combineReducers} from "redux";

const store = createStore(
  combineReducers({
    counter: countReducer,
  })
);

export default store;
