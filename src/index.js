import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import { Provider } from "react-redux";
import {todoListReducer} from './Reducers/todoReducer'


if (localStorage.getItem("todoList") === null) {
  localStorage.setItem("todoList", JSON.stringify([]))
}

let initialState={
  CurrentIndex:-1,
  todoList:JSON.parse(localStorage.getItem("todoList"))
}
var store = createStore(todoListReducer,initialState); 


ReactDOM.render(
  <Provider store={store}><App/></Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
