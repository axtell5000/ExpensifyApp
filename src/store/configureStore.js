
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // eg of middleware

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// working with Chrome Redux extension and thunk - you need this
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // Store creation
// We use an object to tell which reducer is managing which state
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))

  );

  return store;
};


