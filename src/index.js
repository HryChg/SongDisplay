import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // Components from react-redux library
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
    // Wrap Provider around App and then
    // set up the store using all reducers
    <Provider store={ createStore(reducers) }>
        <App/>
    </Provider>,
    document.querySelector('#root')
);