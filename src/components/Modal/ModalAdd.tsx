import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addRecipe} from "../../actions/recipeBoxActions";

class Modal extends React.Component<any, any>{    

    constructor(props:any){
        super(props);
        this.saveUpdateRecipe = this.saveUpdateRecipe.bind(this);
    }
    
    public saveUpdateRecipe(){
        
        let recipeName: any = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["recipeName"]);
        let recipeIngredients: any = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["ingredients"]);
        
        this.props.addRecipe(recipeName.value, recipeIngredients.value);

        recipeName.value = "";
        recipeIngredients.value ="";
    }

    public render(){   
        return( 
            <div className="modal fade" id="addModal" role="dialog">
                <div className="modal-dialog">
                    {/* Modal content */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <p className="modal-title">Add Recipe</p>
                        </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label  className="control-label">
                                            <span>Recipe</span>
                                        </label>
                                        <input type="text" label="Recipe" placeholder="Recipe Name" id="title" className="form-control" 
                                            ref="recipeName" required>   
                                        </input>
                                    </div>
                                    <div className="form-group">
                                        <label  className="control-label">
                                            <span >Ingredients</span>
                                        </label>
                                        <textarea type="textarea" label="Ingredients" placeholder="Enter Ingredients,Separated,By Commas" 
                                            id="ingredients" className="form-control" ref="ingredients">
                                        </textarea>
                                    </div>
                                </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default btn-xs pull-right" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary btn-xs pull-right" data-dismiss="modal"
                                onClick={this.saveUpdateRecipe}
                            >
                                Add Recipe       
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
        addRecipe: addRecipe
        }, dispath);    
}

export default connect (mapStateToProps, mapDispatchToProps)(Modal);