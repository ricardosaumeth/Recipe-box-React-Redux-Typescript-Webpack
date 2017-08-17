import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Panel from "./Panel/Panel";
import ModalAdd from "./Modal/ModalAdd";

class App extends React.Component<any, any>{   
    
    public render(){
        
        let panels;
        if(this.props.recipeVariables.recipe.recipes != null){
          let counter = 0;
          panels = this.props.recipeVariables.recipe.recipes.map(function(recipe:any){
            counter++;
            return <Panel  key={counter.toString()} title={recipe.title} ingredients={recipe.ingredients}
                    collapseId={counter.toString()}/>    
          });
        }
        return(  
           <div className="container">
             <div id="container" className="well">
               <div role="tablist" className="panel-group" id="accordion"> 
                 {panels}
               </div>      
             </div>
             {/* Trigger the modal with a button */}
             <button id="btn-del" type="button" className="btn btn-primary btn-md" 
                data-toggle="modal" data-target="#addModal">Add Recipe</button>
             <ModalAdd /> 
            </div>            
        );
    }
}

function mapStateToProps(state:any, ownProps:any){
    return {
        recipeVariables: state.recipeBox
    };
}


export default connect (mapStateToProps)(App);