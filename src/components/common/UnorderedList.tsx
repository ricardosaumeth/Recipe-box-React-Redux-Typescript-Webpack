import * as React from "react";

interface UlProps {ingredients: string[]} 

const Ul  = (props:UlProps) =>{
        let counter = 0;
        const ingredients = props.ingredients.map(function(ingredients:string){
            counter++;
            return (
               <li className="list-group-item" key={counter.toString()}>{ingredients}</li> 
            );    
        });

        return(
           <ul className="list-group">
              {ingredients}  
            </ul>
        );   
    }

export default Ul;