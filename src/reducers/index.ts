import {combineReducers} from "redux";
import recipeBox from "./reducer-recipeBox";

const rootReducer = combineReducers({
    recipeBox
});

export default rootReducer;