import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css' //fetching from the node_module

import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 221100}));
store.dispatch(addExpense({description: 'gas bill', amount: 2100, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 112100}));

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense);

// Provider - Must include the name of your store
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

