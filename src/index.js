import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { reducer as loginReducer } from "./redux/reducers/LoginReducer";
import { reducer as plaidReducer } from "./redux/reducers/PlaidReducer";
import { reducer as registerReducer } from "./redux/reducers/RegisterReducer";
import { reducer as profileReducer } from "./redux/reducers/ProfileReducer";
import {reducer as blockReducer} from "./redux/reducers/BlockReducers"
import {reducer as addTransactionReducer} from "./redux/reducers/AddTransactionReducer"
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(combineReducers({loginReducer,plaidReducer,registerReducer,profileReducer,blockReducer,addTransactionReducer}), applyMiddleware(thunk, logger));
//I: Might be able to stick this store creator in its own folder in the redux folder


/*I:
The app uses sessionStorage for authentication handling 
"sessionStorage is similar to localStorage; 
the difference is that while data in localStorage doesn't expire, 
data in sessionStorage is cleared when the page session ends."
https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
*/
ReactDOM.render(
  <Provider store={store}>
      <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
  );
  
  
  /*I: State structure:

  {
    addTransactionReducer: {
      categories: '',
      transaction: '',
      error: null,
      isFetching: false
    },
    blockReducer: {
      blocks:[],
      error:null,
      isFetching:false,
    },
    profileReducer: {
      error:null,
      isFetching:false,
      transactions:[],
      Balance:0.00,
      categories:[],
      accounts:[]
    },
    registerReducer: {
      error:null,
      isFetching:false
    },
    plaidReducer: {
      error:null,
      isFetching:false,
      transactions:[],
      Balance:0.00,
      categories:[],
      accounts:[]
    },
    loginReducer: {
      user:{
        id: sessionStorage.getItem("userID") || null,
        token:sessionStorage.getItem("token") || "",
        message:"",
        LinkedAccount:sessionStorage.getItem("LinkedAccount") || false
      },
      error:null,
      isFetching:false,
      navState: sessionStorage.getItem("navState") || ""
    }
  }

  AddTransactionReducer
  const initialState = {
    categories: '',
    transaction: '',
    error: null,
    isFetching: false
  };
  
  BlockReducers
  const initialState = {
          blocks:[],
          error:null,
          isFetching:false,
      };
  
  LoginReducer
  const initialState = {
      user:{
          id: sessionStorage.getItem("userID") || null,
          token:sessionStorage.getItem("token") || "",
          message:"",
          LinkedAccount:sessionStorage.getItem("LinkedAccount") || false
      },
      error:null,
      isFetching:false,
      navState: sessionStorage.getItem("navState") || ""
  };
  
  PlaidReducer
  const initialState = {
      error:null,
      isFetching:false,
      transactions:[],
      Balance:0.00,
      categories:[],
      accounts:[],
  };
  
  ProfileReducer
  const initialState = {
      error:null,
      isFetching:false,
      profile:{},
      user:{}
  };
  
  RegisterReducer
  const initialState = {
      error:null,
      isFetching:false,
  };
  
  */