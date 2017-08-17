import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {editRecipe} from "../../actions/recipeBoxActions";


class Modal extends React.Component<any, any>{    

    constructor(props:any){
        super(props);
        this.saveUpdateRecipe = this.saveUpdateRecipe.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
        this.updateRecipeName = this.updateRecipeName.bind(this);

        this.state = { 
            inputvalue:  "",
            textAreaValue: "",
            oldRecipeName: ""
        };            
    }

    public componentWillReceiveProps(newProps: any) {
        debugger;
        const {recipeName, ingredients } = newProps.recipeVariables.recipe;
        this.setState({ 
            inputvalue:  recipeName,
            textAreaValue: ingredients,
            oldRecipeName: recipeName
        });
    }
    
    public saveUpdateRecipe(){
        
        let recipeName: any = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["recipeName"]);
        let recipeIngredients: any = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["ingredients"]);

        this.props.editRecipe(this.state.oldRecipeName ,recipeName.value, recipeIngredients.value); 

        recipeName.value = "";
        recipeIngredients.value ="";
    }

    public updateIngredients(event:any){
        let textAreaValue = event.target.value;
        this.setState({textAreaValue: textAreaValue});
    }

    public updateRecipeName(event:any){
        let inputvalue = event.target.value;
        this.setState({inputvalue: inputvalue});
    }

    public render(){
         
        return( 
            <div className="modal fade" id="editModal" role="dialog">
                <div className="modal-dialog">
                    {/* Modal content */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <p className="modal-title">Edit Recipe</p>
                        </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label  className="control-label">
                                            <span>Recipe</span>
                                        </label>
                                        <input type="text" label="Recipe" id="title" className="form-control" 
                                            ref="recipeName" value={this.state.inputvalue} placeholder="Recipe Name"
                                            onChange={this.updateRecipeName} required> 
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label  className="control-label">
                                            <span >Ingredients</span>
                                        </label>
                                        <textarea type="textarea" label="Ingredients" placeholder="Enter Ingredients,Separated,By Commas"
                                            id="ingredients" className="form-control" ref="ingredients" value={this.state.textAreaValue}
                                            onChange={this.updateIngredients}
                                            >  
                                        </textarea>
                                    </div>
                                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default btn-xs pull-right" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn-xs pull-right" data-dismiss="modal"
                                onClick={this.saveUpdateRecipe}
                            >
                                Edit Recipe      
                            </button>
                        </div>
                    </div>
                
                </div>
            </div>                   
        );
    }
}

function mapStateToProps(state:any, ownProps:any){

    return {
        recipeVariables: state.recipeBox
    };
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        editRecipe: editRecipe
        }, dispath);    
}

export default connect (mapStateToProps, mapDispatchToProps)(Modal);