import expensesReducer from '../../reducers/expenses';
import expensesData from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expensesData[1].id
  }

  const state = expensesReducer(expensesData, action);
  expect(state).toEqual([expensesData[0], expensesData[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '4'
  };

  const state = expensesReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});

test('should add an expense', () => {
  const expense = {
    id: '200',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expensesData, action);
  expect(state).toEqual([...expensesData, expense]); // here we are checking against the test data plus the expense
  // created in this test

});

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expensesData[1].id,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expensesData, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };

  const state = expensesReducer(expensesData, action);
  expect(state).toEqual(expensesData);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expensesData[1]]
  }

  const state = expensesReducer(expensesData, action);
  expect(state).toEqual([expensesData[1]]);
});
