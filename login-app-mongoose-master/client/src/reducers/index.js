import { combineReducers } from "redux";
import userReducers from "./user";
import postReducers from "./post";

export default combineReducers({ userReducers, postReducers });
