import FBReducer from "./FBReducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  FBReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
