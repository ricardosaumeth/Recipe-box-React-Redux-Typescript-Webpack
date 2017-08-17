import * as types from "./actionsTypes";

let payload   = {
    addEdit: "",
    recipes: [{}],
    recipeName : "",
    ingredients: ""
}

export function loadRecipes(){

    if(typeof localStorage["recipeLocalState"] == "undefined"){
        payload.recipes = [
            {title: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Eggs", "Pumpkin Pie Spice", "Pie Crust"]}, 
            {title: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs"]}, 
            {title: "Onion Pie", ingredients: ["Onion", "Pie Crust", "Sounds Yummy right?"]}
        ]; 
    }else{
        payload.recipes = JSON.parse(localStorage.getItem('recipeLocalState'));
    }
    
    return {
        type: types.LOAD_RECIPES_SUCCESS,
        payload: payload
    };
}

export function addEditRecipeBtn(addEdit:string, recipeName?:string, ingredients?:string){ 
    payload.recipeName = recipeName;
    payload.ingredients = ingredients; 
    return {
        type: types.ADD_EDIT_RECIPES_BTN_SUCCESS,
        payload: payload
    }  
}

export function addRecipe(recipeName:string, ingredients:string){
    
    payload.recipes.push(
        
        {title:recipeName, ingredients: ingredients.split(",")}
        
    ); 
    
    localStorage.setItem('recipeLocalState', JSON.stringify(payload.recipes));
    const locStorage = localStorage.getItem('recipeLocalState');
    payload.recipes = JSON.parse(locStorage);

    return {
        type: types.ADD_RECIPE__SUCCESS,
        payload: payload
    };
}

export function editRecipe(OldrecipeName:string, NewrecipeName:string, ingredients?:string){
    if(NewrecipeName){
        payload.recipes.forEach((recipe:any)=>{
            
            if(recipe.title === OldrecipeName){
                payload.recipeName =  NewrecipeName;
                recipe.title = NewrecipeName;
                recipe.ingredients =  ingredients.split(",");
            }
        });
        return {
            type: types.EDIT_RECIPE__SUCCESS,
            payload: payload
        };     
    }else{
        alert("Please enter a Recipe Name!")
    }
    
}

export function deleteItem(recipeName:string, ingredients:string){
   if(recipeName){
       let index = 0;
        payload.recipes.forEach((recipe:any)=>{
            
            if(recipe.title === recipeName){
               payload.recipes.splice(index, 1); 
            }
            index++;
        });
        return {
            type: types.DELETED_ITEM_SUCCESS,
            payload: payload
        };     
    }else{
        alert("Please enter a Recipe Name!")
    } 
}