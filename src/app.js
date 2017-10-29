import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';


import 'normalize.css/normalize.css' //fetching from the node_module

import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

console.log('test');
// Provider - Must include the name of your store
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

