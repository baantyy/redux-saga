import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

import store from './redux/store';
import { Provider } from 'react-redux'

import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
