import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Ul from "../common/UnorderedList";
import ModalEdit from "../Modal/ModalEdit";
import {addEditRecipeBtn, deleteItem} from "../../actions/recipeBoxActions";

class Panel extends React.Component<any, any>{    

    constructor(props:any){
        super(props);

        this.editRecipe = this.editRecipe.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    
    public editRecipe(){
        const {title, ingredients} = this.props;
        this.props.addEditRecipeBtn("edit", title, ingredients);
    }
    
    public deleteItem(){
       const {title, ingredients} = this.props; 
       this.props.deleteItem(title, ingredients);
    }
    
    public render(){
        
        const {title, ingredients, collapseId} = this.props;
        return(  
           <div className="panel panel-success">
                <div className="panel-heading">
                    <h4 className="panel-title" role="presentation">
                        <a data-toggle="collapse" data-parent="#accordion" href={"#collapse" + collapseId}>{title}</a>
                    </h4>
                </div>
                <div id={"collapse" + collapseId} className="panel-collapse collapse" aria-hidden="true" role="tabpanel">
                    <div className="panel-body">
                        <h4 className="text-center">Ingredients</h4>
                        <hr/> 
                        <Ul ingredients={ingredients}/>
                        <div role="toolbar" className="btn-toolbar" >
                            <button id="btn-del" type="button" className="btn btn-danger"
                             onClick={this.deleteItem}   
                            >Delete</button>
                            {/* Trigger the modal */}
                            <button id="btn-edit" type="button" className="btn btn-default" data-toggle="modal" data-target="#editModal"
                                onClick={this.editRecipe}
                            >Edit</button> 
                        </div>   
                    </div>
                </div>
                <ModalEdit />
            </div>           
        );
    }
}

function mapDispatchToProps(dispath: any) {
    return bindActionCreators({
        addEditRecipeBtn: addEditRecipeBtn,
        deleteItem: deleteItem
        }, dispath);    
}

export default connect (null, mapDispatchToProps) (Panel);