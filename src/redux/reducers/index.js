import  riskLevel  from "./riskLevel";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    risk: riskLevel
});

export default allReducers;