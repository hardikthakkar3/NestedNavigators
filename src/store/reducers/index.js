import { combineReducers } from "redux";
import CountReducer from "./CountReducer";

const rootReducer = combineReducers({
  countReducer: CountReducer,
});

export default rootReducer;
