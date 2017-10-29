import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'; // middleware

import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses";
import expenseData from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]); // takes middleware

// When comparing Objects one must use toEqual instead of toBe (which are for primitives)

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense( '123abc', {note: 'test'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'test'
    }
  });
});

test('should setup add expense action object with provided values',() => {

  const action = addExpense(expenseData[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenseData[2]
  });

});

// done parameter - this is used in async testing, here we are manually controlling twhen the test is done, to cater for
// things that might take a bit extra time
test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 40000
  };

  // we can chain here because we added a return when we pushed to the database in the expense action under the
  // startAddExpense method
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions(); // returns an array of actions
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    // need it this way for chaining below
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');

  }).then((snapshot) => { //chaining
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  // we can chain here because we added a return when we pushed to the database in the expense action under the
  // startAddExpense method
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions(); // returns an array of actions
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');

  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults);
    done();
  });
});

// test('should setup add expense action object with default values',() => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense:{
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// });

