import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import App from './components/app';



const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//let unsubscribe = store.subscribe(() =>
//    console.log(store.getState())
//)


ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('root'));