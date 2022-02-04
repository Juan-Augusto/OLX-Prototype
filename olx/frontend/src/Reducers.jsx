import  useReducer  from "./Reducers/userReducer";
import { combineReducers } from "redux";

export default combineReducers({
    user:useReducer
});