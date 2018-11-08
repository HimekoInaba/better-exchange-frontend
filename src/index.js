import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from "./router";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import store from './store'

const superStore = createStore(store);

ReactDOM.render(
    <Provider store={superStore}>
        <Router/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
