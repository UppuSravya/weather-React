import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';



let storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

let store = storeWithMiddleware(rootReducer);

ReactDOM.render(
    <Provider store = {store}>
    <App />
     </Provider>, document.getElementById('root')
);

registerServiceWorker();
