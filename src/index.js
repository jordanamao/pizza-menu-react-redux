import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import reducer from './reducers'
import { createStore } from 'redux'
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';

//contains the store, store holds the whole state tree of the application
//reducer is passed to store and react redux provider is like a context that makes store
//available throughout the whole program

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 