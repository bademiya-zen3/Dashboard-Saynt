import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import Reducer from './reducers/index';


const store = createStore(Reducer);
//console.log("store" + store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));