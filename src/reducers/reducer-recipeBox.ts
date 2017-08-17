import * as types from "../actions/actionsTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState, action:any){
    switch (action.type) {

        case  types.LOAD_RECIPES_SUCCESS:
        case  types.ADD_EDIT_RECIPES_BTN_SUCCESS:
        case  types.ADD_RECIPE__SUCCESS:
        case  types.EDIT_RECIPE__SUCCESS:
        case  types.DELETED_ITEM_SUCCESS:
            return(
                state = {
                   ...state,
                   recipe: action.payload,
                   recipes: [...state.recipes, action.payload] 
                }
            );
                 
        default:
            return state;
    }
}