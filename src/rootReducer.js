import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import user from "./reducers/user";

export default combineReducers({
  user
});
