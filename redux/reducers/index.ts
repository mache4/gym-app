import { combineReducers } from "@reduxjs/toolkit";
import exercises from "./exercises";
import records from "./records";

const reducer = combineReducers({ exercises, records });
export default reducer;