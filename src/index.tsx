import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "./index.scss";
import App from "./components/App";
import {loadRecipes} from "./actions/recipeBoxActions";


const store = configureStore();

store.dispatch(loadRecipes());

ReactDOM.render(

   <Provider store={store}>
        <App />
    </Provider> 

    , document.getElementById('root'));