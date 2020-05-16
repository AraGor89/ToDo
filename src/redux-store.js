import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import toDoReducer from "./reducers/toDoReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  toDoReducer: toDoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.store = store;
export default store;
